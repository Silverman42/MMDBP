<?php

namespace App\Http\Controllers\Users;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ViewUsersController extends Controller
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
        return Inertia::render('Users/List',[
            'user'=> $user
        ]);
    }

    private function builder(Request $request){
        if($request->has('search')){
            return User::where('first_name','LIKE',"%$request->search%")
            ->orWhere('last_name','LIKE',"%$request->search%")
            ->simplePaginate(50);
        }
        return User::simplePaginate(50);
    }
}
