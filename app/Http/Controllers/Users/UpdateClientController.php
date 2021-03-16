<?php

namespace App\Http\Controllers\Users;

use App\Models\User;
use App\Traits\UpdateUserProfile;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Request;

class UpdateClientController extends Controller
{
    use UpdateUserProfile;

    public function getProfileUser(): User{
        $user = User::findOrFail(Request::input('user_id',0));
        return $user;
    }
}
