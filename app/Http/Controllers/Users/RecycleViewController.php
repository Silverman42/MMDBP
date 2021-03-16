<?php

namespace App\Http\Controllers\Users;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RecycleViewController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $user = $this->builder($request);
        return Inertia::render('Users/RecycleBin',[
            'user'=>$user
        ]);
    }

    private function builder(Request $request){
        if($request->has('search')){
            return User::onlyTrashed()->where('first_name',$request->search)->orWhere('last_name',$request->search)->simplePaginate();
        }
        return User::onlyTrashed()->simplePaginate();
    }
}
