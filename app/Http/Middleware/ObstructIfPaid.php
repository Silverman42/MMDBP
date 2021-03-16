<?php

namespace App\Http\Middleware;

use Closure;

class ObstructIfPaid
{
    /**
     * Allow request if client/contestant has not made payment
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if($request->user()->has_paid == false){
            return $next($request);
        }
        return redirect()->back()->with([
            'alert_heading' => 'Action Blocked',
            'alert_message' => 'Only unpaid contestants are allowed to execute this action. Please, contact support for more information',
            'alert_type' => 'error',
        ]);
    }
}
