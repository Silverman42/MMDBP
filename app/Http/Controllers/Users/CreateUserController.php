<?php

namespace App\Http\Controllers\Users;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\User\CreateUsers;

class CreateUserController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(CreateUsers $request)
    {
        try {
            DB::beginTransaction();
            $user = User::create($request->all());
            $avatar = uploadCloudFile('avatar','avatar');
            if($avatar){
                $user->avatar = $avatar->getSecurePath();
                $user->avatar_id = $avatar->getPublicId();
            }
            $user->password = Hash::make($request->password);
            $user->save();
            $this->addRoleAndPermissions($user,$request);
            DB::commit();
        } catch (\Throwable $error) {
            logger($error);
            return $this->redirectBack('Internal server problem. please try again', 'User creation unsuccessful','error');
        }
        return $this->redirectBack("{$user->last_name} has been successfully added", 'User creation successful');
    }

    private function addRoleAndPermissions(User $user,CreateUsers $request){
        if($request->has('roles') && $request->roles === 'super-admin'){
            $user->removeRole('admin');
            return $user->assignRole('super-admin');
        }
        $user->removeRole('super-admin');
        $user->assignRole('admin');

        (filter_var($request->subjects,FILTER_VALIDATE_BOOLEAN) === true) ? $user->givePermissionTo('modify-subjects') : $user->revokePermissionTo('modify-subjects');
        (filter_var($request->topics,FILTER_VALIDATE_BOOLEAN) === true) ? $user->givePermissionTo('modify-topics') : $user->revokePermissionTo('modify-topics');
        (filter_var($request->questions,FILTER_VALIDATE_BOOLEAN) === true) ? $user->givePermissionTo('modify-questions') : $user->revokePermissionTo('modify-questions') ;
        (filter_var($request->collections,FILTER_VALIDATE_BOOLEAN) === true) ? $user->givePermissionTo('modify-collection') : $user->revokePermissionTo('modify-collection') ;
        (filter_var($request->profile,FILTER_VALIDATE_BOOLEAN) === true) ? $user->givePermissionTo('modify-profile') : $user->revokePermissionTo('modify-profile') ;
        (filter_var($request->settings,FILTER_VALIDATE_BOOLEAN) === true) ? $user->givePermissionTo('modify-settings') : $user->revokePermissionTo('modify-settings') ;
        (filter_var($request->users,FILTER_VALIDATE_BOOLEAN) === true) ? $user->givePermissionTo('modify-users') : $user->revokePermissionTo('modify-users') ;
        return;
    }
}
