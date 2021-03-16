<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class IdentityRequest extends FormRequest
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
        $eighteenYearBack = now()->subYear(18);
        return [
            'first_name' => 'string|max:100|required',
            'last_name' => 'string|max:100|required',
            'nationality' => 'string|max:100|required',
            'address' => 'string|max:100|required',
            'age'=> 'numeric|min:18|max:40|required',
            'date_of_birth'=> 'date|date_format:Y-m-d|required|before:'.$eighteenYearBack,
            'place_of_birth'=> 'string|max:88|required',
            'signature' => 'file|mimetypes:image/jpg,image/jpeg,image/png|mimes:jpeg,jpg,png|max:500|nullable',
            'avatar' => 'file|mimetypes:image/jpg,image/jpeg,image/png|mimes:jpeg,jpg,png|max:500'
        ];
    }
}
