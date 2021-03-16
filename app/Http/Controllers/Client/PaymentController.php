<?php

namespace App\Http\Controllers\Client;

use Inertia\Inertia;
use App\Models\Statistics;
use App\Models\Transactions;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Unicodeveloper\Paystack\Facades\Paystack;
use Illuminate\Support\Facades\Request as FacadesRequest;

class PaymentController extends Controller
{

    private function validateInput(Request $request){
        return $request->validate([
            'nationality'=>'string|max:30|'
        ]);
    }

    private function updateClientNationality(Request $request){
        return $request->user()->update(['nationality' => $request->nationality]);
    }

    private function mergeRequest(Request $request, string $trans_reference){
        $charge = $request->nationality === 'Nigeria' ? settings()['naira_charge'] * 100 : settings()['dollar_charge'] * 100 ;
        $currency = $request->nationality === 'Nigeria' ? 'NGN' : 'USD' ;
        $request->merge([
            'email' => $request->user()->email,
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
        $this->mergeRequest($request,$trans_reference);
        $this->updateClientNationality($request);
        $this->setPaymentParameters($request);
        try{
            return Paystack::getAuthorizationUrl()->redirectNow();
        }catch(\Exception $e) {
            $message = json_encode($e->getMessage());
            logger($e->getMessage());
            $message = str_replace('\n','',$message);
            $message = explode('response',$message)[1];
            $message = str_replace(['\\'],'',$message);
            $message = substr_replace($message,'',0,1);
            $message = substr_replace($message,'',-1,1);
            $messageArray =(array) json_decode($message);
            return $this->redirectBack($messageArray['message'],'Payment failed','error');
        }  
    }

    private function setPaymentParameters(Request $request){
        $transaction = new Transactions;
        $transaction->user_id = $request->user()->id;
        $transaction->competitions_id = $request->user()->competitions_id;
        $transaction->reference_id = $request->reference;
        $transaction->transaction_type = 'deposit';
        $transaction->email = $request->user()->email;
        $transaction->reference_id = $request->reference;
        $transaction->currency = strtolower($request->currency);
        $transaction->amount = $request->amount / 100;
        $transaction->save();
    }

    public function handleGatewayCallback(Request $request){
        $paymentDetails = Paystack::getPaymentData();
        $transaction = Transactions::where('reference_id',$paymentDetails['data']['reference'])->first();
        if($transaction && $paymentDetails['status'] === true){
            DB::beginTransaction();
            $this->updateClientProfile($request);
            $statistics = $this->updateStatistics($paymentDetails);
            $updatedTransaction = $this->updateTransactionInfo($transaction,$paymentDetails,$statistics);
            DB::commit();
            session()->flash('alert_heading','Payment Successful' );
            session()->flash('alert_message','Your payment was successful. You can proceed to update your profile' );
            session()->flash('alert_type','success' );
            return Inertia::render('Client/Invoice',[
                'invoice' => $updatedTransaction->load('competitions'),
                'directToProfile' => true
            ]);
        }
        return redirect()->route('client.dashboard')->with([
            'alert_heading' => 'Payment Unsuccessful',
            'alert_message' => 'The transaction reference was not found. Please contact support for assitance',
            'alert_type' => 'error',
        ]);
    }

    private function updateClientProfile(Request $request){
        $request->user()->has_paid = true;
        $request->user()->profile_stage = 'audition';
        $request->user()->save();
    }

    private function updateStatistics(array $paymentDetails): Statistics{
        $statistics = Statistics::first();
        if($paymentDetails['data']['currency'] == 'NGN'){
            $statistics->increment('naira_balance',($paymentDetails['data']['amount'] / 100));
            $statistics->increment('naira_deposit_count');
            return $statistics;
        }
        $statistics->increment('dollar_balance',($paymentDetails['data']['amount'] / 100));
        $statistics->increment('dollar_deposit_count');
        return $statistics;
    }

    private function updateTransactionInfo(Transactions $transaction, array $paymentDetails, Statistics $stats){
        $transaction->is_completed = true;
        $transaction->balance = $paymentDetails['data']['currency'] == 'NGN' ? $stats->naira_balance : $stats->dollar_balance;
        $transaction->save();
        $transaction->refresh();
        return $transaction;
    }
}
