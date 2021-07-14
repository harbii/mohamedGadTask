<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware( 'auth:users'     ) -> get ( '/user'     , fn ( Request $request ) => $request -> user( ) );
Route::middleware( 'auth:customers' ) -> get ( '/customer' , fn ( Request $request ) => $request -> user( ) );

Route::post( '/register'          , [ 'uses' => 'CustomerController@register'          , 'as' => 'api.auth.register'          ]);
Route::get ( '/EmailVerification' , [ 'uses' => 'CustomerController@EmailVerification' , 'as' => 'api.auth.EmailVerification' ]) -> middleware( 'auth:customers' );
Route::post( '/login'             , [ 'uses' => 'CustomerController@login'             , 'as' => 'api.auth.login'             ]);
Route::get ( '/me'                , [ 'uses' => 'CustomerController@me'                , 'as' => 'api.auth.me'                ]);
Route::get ( '/logout'            , [ 'uses' => 'CustomerController@logout'            , 'as' => 'api.auth.logout'            ]);

Route::get ( '/PrivilegesType'    , [ 'uses' => 'CustomerController@PrivilegesType'    , 'as' => 'api.Type.PrivilegesType'    ]);

Route::post( '/createUser'        , [ 'uses' => 'CustomerController@createUser'        , 'as' => 'api.Type.createUser'        ]) -> middleware( 'auth:customers' ) ;
