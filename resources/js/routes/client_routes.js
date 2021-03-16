import client from "../routes/middleware/client";
/**
 * @description Client routes
 * @return {array}
 */
 export default [
     {
         path: "/client",
         component : ()=>import(/* webpackChunkName: "client_routes" */ '../pages/client/Layout'),
         children: [
            {
                path: '',
                component: ()=>import(/* webpackChunkName: "client_routes" */ '../pages/client/Dashboard'),
                name: 'client.dashboard',
                meta:{
                    middleware: [client]
                }
            },
            {
                path: '/profile',
                component: ()=>import(/* webpackChunkName: "client_routes" */ '../pages/client/Profile'),
                name: 'client.profile',
                meta:{
                    middleware: [client]
                }
            },
            {
                path: 'settings',
                component: ()=>import(/* webpackChunkName: "client_routes" */ '../pages/client/Settings'),
                name: 'client.settings',
                meta:{
                    middleware: [client]
                }
            },
            {
                path: 'transfer',
                component: ()=>import(/* webpackChunkName: "client_routes" */ '../pages/client/InterBankTransfer'),
                name: 'client.transfer',
                meta:{
                    middleware: [client]
                }
            },
            {
                path: 'transaction',
                component: ()=>import(/* webpackChunkName: "client_routes" */ '../pages/client/Transaction'),
                name: 'client.transaction',
                meta:{
                    middleware: [client]
                }
            },
         ]
     }
 ]
 