<?php

namespace App\Http\Controllers\Settings;

use Inertia\Inertia;
use App\Models\Settings;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Session;

class GeneralController extends Controller
{

    public function view(){
        return Inertia::render('Settings/View',['color_schemes'=> config('user_interface.color_schemes')]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Settings  $settings
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Settings $settings)
    {
        $validated = $this->validateInput($request);
        $settings = Settings::first();
        if(!$settings){
            $settings->create($request->all());
            return $this->redirectBack('You successfully added new settings','New Settings Added');
        }
        $settings->update($request->all());
        return $this->redirectBack('You successfully updated settings','Settings Updated');
    }

    private function validateInput(Request $request){
        return $request->validate([
            'app_name' => 'string|required|max:30',
            'app_email' => 'email:rfc|required',
            'app_url' => 'string|required',
            'color_scheme' => 'string|required',
            'dollar_charge' => 'integer|required|digits_between:0,6',
            'naira_charge' => 'integer|required|digits_between:0,6',
            'disable_client_profile_modification' => 'boolean|required',
            'disable_client_registration' => 'boolean|required',
            'recieve_client_emails' => 'boolean|required'
        ]);
    }
}
