<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CustomerRegisterRequest;
use App\Http\Requests\CustomerLoginRequest;
use App\Http\Requests\CreateUserRequest;

use App\Http\Services\AuthService;
use App\Http\Services\userService;
use Redirect ;
use App\Models\privilegesType;

use Symfony\Component\HttpFoundation\Response;

class CustomerController extends Controller {

    public function register( CustomerRegisterRequest $Request , AuthService $authService ) {
        return $this -> makeResponse( 'Customer Register successfully' , Response::HTTP_CREATED , $authService -> register( $Request ) -> toAuthArray( ) );
    }

    public function login( CustomerLoginRequest $Request , AuthService $authService ) {
        if ( $user = $authService -> attempt( $Request ) ) return $this -> makeResponse( 'login successfully' , Response::HTTP_OK , $user -> toAuthArray( ) ) ;
        else return $this -> makeResponse( 'Invalid Username or Password' , Response::HTTP_UNAUTHORIZED , [ ] ) ;
    }

    public function EmailVerification( Request $Request ) {
        $Request -> user( ) -> update( [ 'email_verified_at' => now( ) ] ) ;
        return redirect( ) -> route( 'home' , [ 'home' , 'api_token' => $Request -> get( 'api_token' ) ] );
    }

    public function me( Request $Request , AuthService $authService ) {
        if ( $user = $authService -> me( $Request ) ) return $this -> makeResponse( 'login successfully' , Response::HTTP_OK , $user -> toAuthArray( ) ) ;
        else return $this -> makeResponse( 'Invalid Username or Password' , Response::HTTP_UNAUTHORIZED , [ ] ) ;
    }

    public function logout( Request $Request , AuthService $authService ) {
        $authService -> logout( $Request ) ;
        return $this -> makeResponse( 'logout successfully' , Response::HTTP_OK ) ; ;
    }

    public function PrivilegesType( Request $Request ) {
        return $this -> makeResponse( 'successfully' , Response::HTTP_OK , privilegesType::all( ) -> toArray( ) ) ; ;
    }

    public function createUser( CreateUserRequest $Request , userService $userService ) {
        $user = $userService -> createUser( $Request ) ;
        dd(
            $Request -> toArray( ) ,
            $user    -> toArray( ) ,
        );
        return $this -> makeResponse( 'successfully' , Response::HTTP_OK , privilegesType::all( ) -> toArray( ) ) ; ;
    }

}
