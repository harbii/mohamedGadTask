<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class CustomerLoginRequest extends FormRequest {

    public function rules( ) {
        return [
            'email'   => 'required|email' ,
            'password' => [ 'required' , Password::min( 8 ) -> mixedCase( ) -> numbers( ) ]   ,
        ];
    }

    public function messages( ) {
        return [
            'password.regex' => 'password_required' ,
        ];
    }

}
