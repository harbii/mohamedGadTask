<template>
    <div class="container mt-5 row justify-content-md-center" >
        <div class="col-6 text-center">

            <div class="input-group mb-3" ref="name" >
                <span class="input-group-text" style="min-width:100px" >Name</span>
                <input class="form-control" type="text" v-model="name" required autocomplete="name" autofocus>
                <div class="invalid-feedback"/>
            </div>

            <div class="input-group mb-3" ref="email" >
                <span class="input-group-text" style="min-width:100px" >Email</span>
                <input class="form-control" type="email" v-model="email" required autocomplete="email" autofocus>
                <div class="invalid-feedback"/>
            </div>

            <div class="input-group mb-3" ref="password" >
                <span class="input-group-text" style="min-width:100px" >Password</span>
                <input class="form-control" type="password" v-model="password" required autocomplete="password" autofocus>
                <div class="invalid-feedback"/>
            </div>

            <div class="input-group mb-3" ref="privileges" >
                <span class="input-group-text" style="min-width:100px" > Privileges </span>
                <select multiple="true" v-bind:class="{ 'fix-height': multiple === 'true' }"  v-model="privileges"  >
                    <option v-for="Type in PrivilegesTypes" :value="Type.id" v-text ="Type.name"/>
                </select>
                <div class="invalid-feedback"/>
            </div>

            <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                    <div @click="click" class="btn btn-primary"> create new user </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import jwt             from '../../Services/jwt.ts'           ;
    import PrivilegesTypes from '../../Models/PrivilegesTypes.ts' ;
    export default {
        data(){ return{
            PrivilegesTypes : [ ]  ,
            privileges      : [ ]  ,
            name            : ''   ,
            email           : ''   ,
            password        : ''   ,
            multiple        : true ,
        } ; },
        methods : {
            async click( ){
                Object.keys( this.$refs ).map( ( key ) => {
                    this.$refs[ key ].children[ 1 ].classList.remove( 'is-valid'   ) ;
                    this.$refs[ key ].children[ 1 ].classList.remove( 'is-invalid' ) ;
                } ) ;
                try {
                    var form = await this.axios.post( 'api/createUser' , {
                        privileges : this.privileges ,
                        name       : this.name       ,
                        email      : this.email      ,
                        password   : this.password   ,
                    } ) ;
                } catch ( err ) {
                    let data = err.response.data ;
                    Object.keys( this.$refs ).map( ( key ) => {
                        if( Object.keys( data.errors ).includes( key ) ){
                            this.$refs[ key ].children[ 1 ].classList.remove ( 'is-valid'   ) ;
                            this.$refs[ key ].children[ 1 ].classList.add    ( 'is-invalid' ) ;
                            this.$refs[ key ].children[ 2 ].innerHTML = data.errors[ key ] ;
                        }
                        else {
                            this.$refs[ key ].children[ 1 ].classList.add   ( 'is-valid'   ) ;
                            this.$refs[ key ].children[ 1 ].classList.remove( 'is-invalid' ) ;
                        } ;
                    } ) ;
                };
            },
        },
        async created( ){
            this.PrivilegesTypes = await PrivilegesTypes.list( ) ;
            if( jwt.checkIfUserExists( ) ) this.$router.push( { name : 'home' } );
        }
    }
</script>