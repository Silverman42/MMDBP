<?php

namespace App\Http\Middleware;

use Closure;

class PermitIfPaid
{
    /**
     * Allow request if client/contestant has made payment
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {   
        if($request->user()->has_paid == true){
            return $next($request);
        }
        return redirect()->back()->with([
            'alert_heading' => 'Action Blocked',
            'alert_message' => 'You have not made your registration payment. Please, retry after making payment',
            'alert_type' => 'error',
        ]);
    }
}
