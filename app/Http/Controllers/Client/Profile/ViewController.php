<?php

namespace App\Http\Controllers\Client\Profile;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ViewController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {   
        $user = User::with(['transactions'=> function($query){
                    return $query->where('is_completed',true)->first();
                }])
                ->where('id',$request->user()->id)->first()->toArray();
        return Inertia::render('Client/Profile',compact('user'));
    }
}
