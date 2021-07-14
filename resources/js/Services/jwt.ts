import axios from 'axios' ;
import bus   from './bus' ;
export default class jwt {

    static _user : any = null ;
    static set user( _user : any ) {
        this._user = _user ;
        this.saveInlocalStorage( _user ) ;
    }
    static get user( ) : any {
        let user = this._user || ( this._user = this.getFromlocalStorage( ) ) ;
        return user ;
    }

    static saveInlocalStorage( _user ?: any ) : void {
        if( _user ) localStorage.setItem( 'user' , JSON.stringify( this.user ) ) ;
        else localStorage.removeItem( 'user' ) ;
        this.setheadersAuth( this.user?.token ) ;
    }

    static getFromlocalStorage( ) : any {
        let user = JSON.parse( localStorage.getItem( 'user' ) ) ;
        this.setheadersAuth( user?.token ) ;
        return user ;
    }

    static login( user : any ) : void {
        if( user ){
            this.user = user ;
            bus.$emit( 'user_login' ) ;
        }
    }

    static logout( ) : void {
        this.user = null ;
        bus.$emit( 'user_login' ) ;
    }

    static checkIfUserExists( ) : boolean {
        return this.user !== null ;
    }

    static setheadersAuth( token ?: string ) : void {
        axios.defaults.headers.common[ 'Authorization' ] = 'Bearer ' + token
    }

}