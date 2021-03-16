<?php

namespace App\Providers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);
        $this->generateAndShareCSRF();
    }

    private function generateAndShareCSRF():void{
        $settings = settings();
        Inertia::share('auth', function () use ($settings) {
            if (Auth::user()) {
                return [
                    'loading'=> false,
                    'csrf_token'=> csrf_token(),
                    'id' => Auth::user()->id,
                    'first_name' => Auth::user()->first_name,
                    'last_name' => Auth::user()->last_name,
                    'app_url'=> env('APP_URL','http://localhost:3000'),
                    'settings'=> $settings,
                    'alert_heading' => Session::get('alert_heading', null),
                    'alert_message' => Session::get('alert_message', null),
                    'alert_type' => Session::get('alert_type',null),
                    'response_check' => rand(0,20)
                ];
            }
            return [];
        });
    }
}
