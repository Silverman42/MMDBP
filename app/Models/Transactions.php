<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transactions extends Model
{
    public $table = 'transactions';

    protected $appends = ["human_date_of_payment"];

    public function competitions(){
        return $this->belongsTo('App\Models\Competitions','competitions_id');
    }

    public function getHumanDateOfPaymentAttribute(){
        return $this->created_at->format('jS F Y');
    }

    public function users(){
        return $this->belongsTo('App\Models\User','user_id');
    }
}
