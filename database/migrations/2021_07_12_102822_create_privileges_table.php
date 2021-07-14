<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePrivilegesTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up( ) {
        Schema::create( 'privileges' , function (Blueprint $table) {
            $table -> id         ( ) ;
			$table -> foreignId ( 'user_id'             ) -> index ( ) -> references( 'id' ) -> on( 'users'            ) -> onDelete( 'cascade' ) -> onUpdate( 'cascade' ) ;
			$table -> foreignId ( 'privileges_types_id' ) -> index ( ) -> references( 'id' ) -> on( 'privileges_types' ) -> onDelete( 'cascade' ) -> onUpdate( 'cascade' ) ;
            $table -> timestamps ( ) ;
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down( ) {
        Schema::dropIfExists( 'privileges' );
    }
}
