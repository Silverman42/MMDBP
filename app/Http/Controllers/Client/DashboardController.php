<?php

namespace App\Http\Controllers\Client;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    public function __invoke(Request $request)
    {
        $user = User::with(['transactions'=> function($query){
            return $query->where('is_completed',true)->first();
        },'competitions'])
        ->where('id',$request->user()->id)->first()->toArray();
        return Inertia::render('Client/Dashboard',[
            'token' => csrf_token(),
            'user'=>$user
        ]);
    }
}
