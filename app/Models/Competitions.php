<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Competitions extends Model
{
    protected $table = 'competitions';

    public function setHasExpiredAttribute(){
        
    }

    public function users(){
        return $this->hasMany('App\Models\Users','competitions_id');
    }

    public function transactions(){
        return $this->hasMany('App\Models\Transactions','competitions_id');
    }
}
