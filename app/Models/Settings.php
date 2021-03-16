<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Settings extends Model
{
    protected $table = 'settings';

    protected $fillable = [
        'app_name','app_email','app_url','color_scheme',
        'disable_client_profile_modification','disable_client_registration',
        'recieve_client_emails','auth_logo','dashboard_logo','auth_logo_id','dashboard_logo_id',
        'naira_charge','dollar_charge'
    ];
}
