<?php

namespace App\Http\Services;

use Hash;
use Auth;

use App\Models\User;
use App\Models\Customer;

use Illuminate\Http\Request;

use App\Mail\EmailVerification;

class AuthService {

    public function attempt( Request $Request ) : Customer | User | bool {
        $user = false ;
        if( Customer::attempt ( $Request -> only( 'email' , 'password' ) ) ) $user = Customer :: where( 'email' , $Request -> get( 'email' ) ) -> first( ) ;
        if( User    ::attempt ( $Request -> only( 'email' , 'password' ) ) ) $user = User     :: where( 'email' , $Request -> get( 'email' ) ) -> first( ) ;
        return $user ;
    }

    public function register( Request $Request ) : Customer {
        $customer = Customer::create( [
            'email_verified_at' => null                               ,
            'api_token'         => \Str::random( 80 )                 ,
            'password'          => Hash::make( $Request -> password ) ,
        ] + $Request -> all( ) );
        \Mail::to( $customer ) -> send( new EmailVerification( $customer -> email , route( 'api.auth.EmailVerification' , [ 'api_token' => $customer -> api_token ] ) ) );
        return $customer ;
    }

    public function me( Request $Request ) : Customer | User | bool {
        $user = false ;
        if( Customer :: guareds ( ) -> check ( ) ) $user = Customer :: guareds ( ) -> user ( ) ;
        if( User     :: guareds ( ) -> check ( ) ) $user = User     :: guareds ( ) -> user ( ) ;
        return $user ;
    }

    public function logout( Request $Request ) : void {
        Auth::logout( ) ;
        if ( $user = $this -> me( $Request ) ) $user -> update( [ 'api_token' => null ] )  ;
    }

}
