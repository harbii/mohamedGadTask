import axios from 'axios'           ;
import jwt   from '../Services/jwt' ;

export default class auth {
    static async getme( api_token ?: string ) : Promise<any> {
        if( api_token ) jwt.setheadersAuth( api_token ) ;
        return jwt.checkIfUserExists( ) ? await axios.get( 'api/me' ) : null ;
    }
    static async logout( ) : Promise<any> {
        jwt.logout( ) ;
        return jwt.checkIfUserExists( ) ? await axios.get( 'api/logout' ) : null ;
    }
}