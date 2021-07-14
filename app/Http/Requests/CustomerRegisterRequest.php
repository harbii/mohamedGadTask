<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class CustomerRegisterRequest extends FormRequest {

    public function rules( ) {
        return [
            'name'    => 'required|min:2|max:45'                                            ,
            'email'   => 'required|email|unique:customers,email|unique:users,email'         ,
            'website' => 'required|url'                                                     ,
            'password' => [ 'required' , Password::min( 8 ) -> mixedCase( ) -> numbers( ) ] ,
        ];
    }

    public function messages( ) {
        return [
            'password.regex' => ( 'password_required' ),
        ];
    }

}
