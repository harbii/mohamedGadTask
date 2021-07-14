<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class EmailVerification extends Mailable {
    use Queueable, SerializesModels;

    public $email;
    public $link;

    public function __construct( string $email , string $link ) {
        $this -> email = $email ;
        $this -> link  = $link  ;
    }

    public function build( ) {
        return $this -> view( 'emailview' ) -> from( 'example@example.com' ) -> with( [
            'link'  => $this -> link  ,
            'email' => $this -> email ,
        ] ) ;
    }
}
