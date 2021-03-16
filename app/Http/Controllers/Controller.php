<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Session;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected function redirectBack(string $message,string $heading ='Action created', string $message_type = 'success'){
        Session::flash('alert_heading', $heading);
        Session::flash('alert_message', $message);
        if($message_type == 'success'){
            Session::flash('alert_type', 'success');
        }
        else {
            Session::flash('alert_type', 'error');
        }
        return redirect()->back();
    }
}
