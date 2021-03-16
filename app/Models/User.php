<?php

namespace App\Models;

use Illuminate\Support\Str;
use Laravel\Airlock\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable, HasRoles, softDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name','competitions_id','last_name','email','is_active','facebook_url','twitter_url','phone_number','avatar',
        //Emergency
        'emergency_name','emergency_phone_number','emergency_email','emergency_relationship',
        // Identity
        'nationality','address','age','date_of_birth','place_of_birth','signature',
        // Medicals
        'height','weight','shoe_size','dress_size','hip_size','waist_size','bust_size','skin_color','blood_type',
        'is_vegetarian','can_smoke','dietary_needs','surgeries','recent_sickness','medications','allergies',
        //Persona
        "hobbies","profession","educational_cert","ambition",
        //Travel
        "departure_airport_code","passport_number"
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'created_at' => 'datetime:Y-m-d H:i:s'
    ];

    public function competitions(){
        return $this->belongsTo('App\Models\Competitions','competitions_id');
    }

    public function transactions(){
        return $this->hasMany('App\Models\Transactions', 'user_id');
    }
}
