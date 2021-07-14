<template>
    <div class="container mt-5 row justify-content-md-center">
        <div class="col-6 text-center">

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

            <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                    <div @click="click" class="btn btn-primary"> login </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import jwt  from '../../Services/jwt.ts' ;
    export default {
        data(){ return{
            email    : '' ,
            password : '' ,
        } ; },
        methods : {
            async click( ){
                Object.keys( this.$refs ).map( ( key ) => {
                    this.$refs[ key ].children[ 1 ].classList.remove( 'is-valid'   ) ;
                    this.$refs[ key ].children[ 1 ].classList.remove( 'is-invalid' ) ;
                } ) ;
                try {
                    var form = await this.axios.post( 'api/login' , {
                        email    : this.email    ,
                        password : this.password ,
                    } ) ;
                    jwt.login( form.data.data ) ;
                    console.log( form.data.data ) ;
					this.$router.push( { name : 'home' } );
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
                }
            }
        },
        created( ){
            if( jwt.checkIfUserExists( ) ) this.$router.push( { name : 'home' } );
        }
    }
</script>