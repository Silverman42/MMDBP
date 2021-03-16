<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class Boolean implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        return array_search($value,[false,true,1,0,'1','0','false','true'],true);
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The value of :attribute must be boolean';
    }
}
