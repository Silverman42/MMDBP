<?php

namespace App\Http\Controllers\Settings;

use Throwable;
use App\Models\Settings;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserInterfaceController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {   
        $this->validateInput($request);
        $setting = settings();
        try {
            $auth_logo_details = replaceCloudFile('auth_logo','logo',($setting['auth_logo_id'] ?? null));
            $dash_logo_details = replaceCloudFile('dashboard_logo','logo',$setting['dashboard_logo_id'] ?? null);
            $this->updateSetting($request,$auth_logo_details,$dash_logo_details,$setting);
        } catch (\Throwable $th) {
            return $this->redirectBack('Logo failed to upload due to internal errors','Logo upload failed','error');
        }
        return $this->redirectBack('You successfully updated your user interface settings','User Interface Updated');
    }

    private function updateSetting(Request $request, $auth_logo_details, $dash_logo_details, array $setting){
        $updated_settings = Settings::first();
        $updated_settings->auth_logo = $auth_logo_details != null ? $auth_logo_details->getSecurePath() : $setting['auth_logo'];
        $updated_settings->dashboard_logo = $dash_logo_details != null ? $dash_logo_details->getSecurePath() : $setting['dashboard_logo'];
        $updated_settings->auth_logo_id= $auth_logo_details != null ? $auth_logo_details->getPublicId() : $setting['auth_logo_id'];
        $updated_settings->dashboard_logo_id= $dash_logo_details != null ? $dash_logo_details->getPublicId() : $setting['dashboard_logo_id'];
        $updated_settings->color_scheme = $request->color_scheme;
        $updated_settings->save();
    }

    private function validateInput(Request $request){
        return $request->validate([
            'color_scheme'=> 'required|string|max:50',
            'auth_logo'=> 'nullable|file|mimetypes:image/jpg,image/jpeg,image/png|mimes:jpeg,jpg,png|max:500',
            'dashboard_logo'=> 'nullable|file|mimetypes:image/jpg,image/jpeg,image/png|mimes:jpeg,jpg,png|max:500'
        ]);
    }
}

