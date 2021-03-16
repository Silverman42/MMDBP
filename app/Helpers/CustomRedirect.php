<?php
use Illuminate\Support\Facades\Session;

/**
 * - A wrapper for response content negotiation.
 * - if the request is a form request a redirect should be used
 * - if an AJAX request is made, the response should be a JSON response
 * @param string $message
 * @param string $heading
 * @param string $message_type
 */
if(!function_exists('redirectBack')){
    function redirectBack(string $message,string $heading ='Action created', string $message_type = 'success'){
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