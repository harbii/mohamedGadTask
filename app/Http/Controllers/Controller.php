<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Symfony\Component\HttpFoundation\Response;

class Controller extends BaseController {

    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function makeResponse( string $message , int $status = 200 , $data = [ ] ) {
        return response( ) -> json( [
            'message' => $message ,
            'data'    => $data    ,
            'status'  => $status  ,
            'check'   => in_array( $status ,  [ Response::HTTP_CREATED , Response::HTTP_OK ] ) ? true : false
        ] , $status );
    }

}
