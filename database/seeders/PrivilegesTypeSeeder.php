<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\privilegesType;
use Illuminate\Support\Facades\Schema;

class PrivilegesTypeSeeder extends Seeder {
    public function run( ) {
        Schema:: disableForeignKeyConstraints ( ) ;
        privilegesType::truncate( ) -> Insert( [
            [ 'name' => 'Admin/full access'                    ] ,
            [ 'name' => 'Sales/Sales Page'                     ] ,
            [ 'name' => 'Back Office/Configuration & Settings' ] ,
        ] ) ;
        Schema:: enableForeignKeyConstraints  ( ) ;
    }
}
