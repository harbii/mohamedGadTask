<?php

namespace App\Models;

use App\Abstracts\Authenticatable;

class User extends Authenticatable {

    public function addprivileges( array $arrays = [ ] ) : static {
        foreach( $arrays as $id ) $this -> privileges_rel( ) -> create( [ 'privileges_types_id' => $id ] ) ;
        return $this ;
    }

	public function privileges_rel( ) {
		return $this -> hasMany( privilege::class );
	}

}