export const routes = [
    { name : 'home'     , path : '/'         , component : ( ) => import( './components/pages/home.vue'     ) } ,
    { name : 'login'    , path : '/login'    , component : ( ) => import( './components/pages/login.vue'    ) } ,
    { name : 'register' , path : '/register' , component : ( ) => import( './components/pages/register.vue' ) } ,
    { name : 'Users'    , path : '/Users'    , component : ( ) => import( './components/pages/Users.vue'    ) } ,
];