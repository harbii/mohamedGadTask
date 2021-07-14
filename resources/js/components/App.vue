<template>
    <main>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
            <div class="container-fluid">
                <router-link to="/" class="navbar-brand" href="#">Laravel - mohmed gad task</router-link>
                <div class="collapse navbar-collapse">
                    <div class="navbar-nav">
                        <template v-if = "checkIfUserExists" >
                            <div         exact-active-class = "active" @click = "logout" class = "nav-item nav-link" > logout      </div>
                            <router-link exact-active-class = "active"  to    = "/Users" class = "nav-item nav-link" > create User </router-link>
                        </template>
                        <template v-else >
                            <router-link exact-active-class = "active"     to = "/register" class = "nav-item nav-link" > register </router-link>
                            <router-link exact-active-class = "active"     to = "/login"    class = "nav-item nav-link" > login    </router-link>
                        </template>
                    </div>
                </div>
            </div>
        </nav>
        <div class="container mt-5"> <transition> <keep-alive> <router-view/> </keep-alive> </transition> </div>
    </main>
</template>
 
<script>
    import jwt  from '../Services/jwt.ts' ;
    import auth from '../Models/auth.ts'  ;
    export default {
        data(){return{
            checkIfUserExists : false ,
        } ; },
        methods:{
            async logout( ){
                await auth.logout( );
                this.init( ) ;
            },
            async init( ){
                this.checkIfUserExists = jwt.checkIfUserExists( ) ;
            },
        },
		created( ) {
            this.init( ) ;
			this.$bus.$on( 'user_login' , this.init );
		},
		mounted( ) {
            if( this.$router.currentRoute.query.api_token ) {
                jwt.login( auth.getme( this.$router.currentRoute.query.api_token ) ) ;
				this.$router.push( { name : 'home' } );
            };
		},
		beforeDestroy( ) {
			this.$bus.$off( 'user_login' , this.init );
		},
    }
</script>