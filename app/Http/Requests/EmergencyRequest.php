<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EmergencyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'emergency_name'=>'string|max:180|required',
            'emergency_phone_number'=>'digits-between:0,18|required',
            'emergency_email'=>'email:rfc|required',
            'emergency_relationship'=>'string|max:40|required'  
        ];
    }
}
