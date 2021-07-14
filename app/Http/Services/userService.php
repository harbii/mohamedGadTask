<?php

namespace App\Http\Services;

use App\Models\User;
use App\Models\Customer;
use Hash;

use Illuminate\Http\Request;

class userService {

    public function createUser( Request $Request ) : User {
        $User = User::create( [
            'email_verified_at' => now( )                             ,
            'password'          => Hash::make( $Request -> password ) ,
            'customer_id'       => $Request -> user( ) -> id
        ] + $Request -> all( ) ) -> addprivileges( );
        dd(
            'ascuserService' ,
            $Request -> toArray( ) ,
            $Request -> user( ) -> toArray( ) ,
            $User -> toArray( ) ,
        );
        return $User ;
    }

}
