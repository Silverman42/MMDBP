<?php

namespace App\Http\Controllers\Client;

use Inertia\Inertia;
use App\Models\Transactions;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class InvoiceController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $invoice = Transactions::where([
                'user_id'=>$request->user()->id, 
                'competitions_id' => $request->user()->competitions_id,
                'is_completed'=> true
            ])->with(['competitions'])->firstOrFail();
        return Inertia::render('Client/Invoice',compact('invoice'));
    }
}
