<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up( ) {
        Schema::create( 'users' , function ( Blueprint $table ) {
            $table -> id( );
            $table -> string( 'name' );
            $table -> string( 'email' ) -> unique( );
            $table -> timestamp( 'email_verified_at' ) -> nullable( );
            $table -> string( 'password' );
            $table -> rememberToken( );
            $table -> timestamps( );
			$table -> foreignId ( 'customer_id'  ) -> index ( ) -> references( 'id' ) -> on( 'customers'  ) -> onDelete( 'cascade' ) -> onUpdate( 'cascade' ) ;
            $table -> string( 'api_token' , 80 ) -> unique( ) -> nullable( ) -> default( null );
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down( ) {
        Schema::dropIfExists( 'users' );
    }
}
