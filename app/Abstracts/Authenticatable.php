<?php

namespace App\Abstracts;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User;
use Illuminate\Notifications\Notifiable;

Abstract class Authenticatable extends User {
    use HasFactory, Notifiable;

    protected $fillable = [
        'name'              ,
        'website'           ,
        'email'             ,
        'api_token'         ,
        'customer_id'       ,
        'email_verified_at' ,
        'password'
    ];

    protected $hidden = [
        'password'       ,
        'remember_token' ,
        'api_token'      ,
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $appends = [
        'type' ,
    ];

    public function gettypeAttribute( ) : string {
        return static::basename( ) ;
    }

    static public function basename( ) {
        return strtolower( class_basename( static::class ) ) ;
    }

    static public function guared( ) {
        return \Auth::guard( static::basename( ) ) ;
    }

    static public function guareds( ) {
        return \Auth::guard( static::basename( ) . 's' ) ;
    }

    static public function attempt( array $array ) {
        return static :: guared ( ) -> attempt( $array ) ;
    }

    public function toAuthArray( ) : array {
        return $this -> toArray( ) + [ 'token' => $this -> api_token ] ;
    }

}