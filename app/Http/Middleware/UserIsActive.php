<?php

namespace App\Http\Middleware;

use Closure;

class UserIsActive
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if($request->user()->is_active == 0) {
            return response()->json([
                'message' => 'Authenticated user is not active',
            ], 401);
        }
        return $next($request);
    }
}
