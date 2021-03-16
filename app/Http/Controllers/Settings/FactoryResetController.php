<?php

namespace App\Http\Controllers\Settings;

use App\Models\Settings;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class FactoryResetController extends Controller
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
        if($this->superAdminCanReset($request) === false){
            return $this->redirectBack('Your entered password does not match. Please try again','Factory Reset Failed','error');
        }
        $this->resetSettings();
        return $this->redirectBack('All question records and settings have been reverted to their default state','Factory Reset Complete');

    }

    private function superAdminCanReset(Request $request):bool{
        return (Hash::check($request->password, $request->user()->password) ? true : false);
    }
    
    private function validateInput(Request $request){
        return $request->validate([
            'password'=> 'required|string'
        ]);
    }

    private function resetSettings(){
        $settings = Settings::first();
        $defaultSetting = settings(true);
        $settings->update($defaultSetting);
    }
}
