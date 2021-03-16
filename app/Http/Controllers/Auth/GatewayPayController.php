<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Unicodeveloper\Paystack\Facades\Paystack;

class GatewayPayController extends Controller
{
    public function viewRegisterForm(){
        return view('auth.register');
    }
    
    private function validateInput(Request $request){
        return $request->validate([
            'first_name' => 'string|required|max:22',
            'last_name' => 'string|required|max:22',
            'email'=> 'email:rfc|required|unique:users',
            'password'=>'string|confirmed|required|min:6',
            'nationality'=>'string|max:30|'
        ]);
    }

    private function mergeRequest(Request $request, string $trans_reference){
        $charge = $request->nationality === 'Nigeria' ? settings()['naira_charge'] * 100 : settings()['dollar_charge'] * 100 ;
        $currency = $request->nationality === 'Nigeria' ? 'NGN' : 'USD' ;
        $request->merge([
            'amount' => $charge,
            'currency' => $currency,
            'reference' => $trans_reference,
            'metadata'=> json_encode([
                'first_name'=> $request->first_name,
                'last_name'=> $request->last_name,
            ]),
        ]);
    }

    public function redirectToGateway(Request $request){
        $trans_reference = paystack()->genTranxRef();
        $this->validateInput($request);
        $new_request = $this->mergeRequest($request,$trans_reference);
        try{
            return Paystack::getAuthorizationUrl()->redirectNow();
        }catch(\Exception $e) {
            logger($e->getMessage());
            return redirect()->back()->withMessage(['msg'=>'The paystack token has expired. Please refresh the page and try again.', 'type'=>'error']);
        }  
    }

    public function handleGatewayCallback(){
        $paymentDetails = Paystack::getPaymentData();
        dd($paymentDetails);
    }
}
