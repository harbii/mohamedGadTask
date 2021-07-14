import axios from 'axios'           ;

interface PrivilegesType{
    id    : number
    name  : number
    value : number
}

export default class PrivilegesTypes {
    static _list : PrivilegesType[ ] = [ ] ;
    static async list( ) : Promise< PrivilegesType[ ] > {
        return this._list.length ? this._list : ( this._list = await this.getList( ) ) ;
    }
    static async getList( ) : Promise< PrivilegesType[ ] > {
        return ( await axios.get( 'api/PrivilegesType' ) ).data.data ;
    }
}