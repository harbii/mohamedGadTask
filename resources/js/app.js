import   App         from './components/App.vue'  ;
import   Vue         from 'vue'                   ;
import   VueRouter   from 'vue-router'            ;
import   VueAxios    from 'vue-axios'             ;
import   axios       from 'axios'                 ;
import { routes    } from './routes'              ;
import bus           from './Services/bus.ts' ;

Vue.use( VueRouter );
Vue.use( VueAxios , axios );
Vue.use( ( Vue ) =>{
    Vue.prototype.$bus = bus ;
} );

const router = new VueRouter({
    mode   : 'history' ,
    routes : routes
});

const vue = new Vue({
    el     : '#app'        ,
    router : router        ,
    render : h => h( App ) ,
});
