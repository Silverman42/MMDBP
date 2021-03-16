<?php
use App\Models\Settings;

if(!function_exists('settings')){
    function settings(bool $shouldReturnDefault = false):array{
        $app_url = config('app.url');
        $default = [
            'app_name' => 'MMBP',
            'app_email' => 'admin@mmmbp.com',
            'app_url' => $app_url,
            'color_scheme' => 'gray',
            'naira_charge' => 0.00,
            'dollar_charge' => 0.00,
            'disable_client_profile_modification' => false,
            'disable_client_registration' => false,
            'recieve_client_emails' => false,
            'auth_logo' => "{$app_url}/img/app_logo.svg",
            'auth_logo_id' => null,
            'dashboard_logo' => "{$app_url}/img/dashboard_logo.svg",
            'dashboard_logo_id' => null
        ];
        if(config('app_env') == 'local' || $shouldReturnDefault == true){
            return $default;
        }
        $settings = Settings::first();
        return ($settings == null ? $default : $settings->toArray());
    }
}