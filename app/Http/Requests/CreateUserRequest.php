<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class CreateUserRequest extends FormRequest {

    public function rules( ) {
        return [
            'name'         => 'required|min:2|max:45'                                           ,
            'email'        => 'required|email|unique:customers,email|unique:users,email'        ,
            'privileges'   => 'required|array'                                                  ,
            'privileges.*' => 'required|integer'                                                ,
            'password'     => [ 'required' , Password::min( 8 ) -> mixedCase( ) -> numbers( ) ] ,
        ];
    }

    public function messages( ) {
        return [
            'password.regex' => ( 'password_required' ),
        ];
    }

}
