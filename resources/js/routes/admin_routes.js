import admin from "../routes/middleware/admin"
/**
 * @description Admin routes
 * @return {array}
 */

export default [
    {
        path: "/admin",
        component : ()=>import(/* webpackChunkName: "admin_routes" */ '../pages/admin/Layout'),
        children: [
            {
                path: '',
                component: ()=>import(/* webpackChunkName: "admin_routes" */ '../pages/admin/Dashboard'),
                name: 'admin.dashboard',
                meta:{
                    middleware: [admin]
                }
            },
           
            {
                path: 'transaction',
                component: ()=>import(/* webpackChunkName: "admin_routes" */ '../pages/admin/Transaction'),
                name: 'admin.transaction',
                meta:{
                    middleware: [admin]
                }
            },
            {
                path: 'admins',
                component: ()=>import(/* webpackChunkName: "admin_routes" */ '../pages/admin/Admin'),
                name: 'admin.admins',
                meta:{
                    middleware: [admin]
                }
            },
            {
                path: 'clients',
                component: ()=>import(/* webpackChunkName: "admin_routes" */ '../pages/admin/Clients/Index'),
                children: [
                    {
                        path: '',
                        component: ()=>import(/* webpackChunkName: "admin_routes" */ '../pages/admin/Clients/List'),
                        name: 'admin.clients',
                        meta:{
                            middleware: [admin]
                        }
                    },
                    {
                        path: 'view/:client_id',
                        component: ()=>import(/* webpackChunkName: "admin_routes" */ '../pages/admin/Clients/view'),
                        name: 'admin.clients.view',
                        meta:{
                            middleware: [admin]
                        }
                    }
                ]               
            },
            {
                path: 'settings',
                component: ()=>import(/* webpackChunkName: "admin_routes" */ '../pages/admin/Settings'),
                name: 'admin.settings',
                meta:{
                    middleware: [admin]
                }
            },
            {
                path: 'profile',
                component: ()=>import(/* webpackChunkName: "admin_routes" */ '../pages/admin/Profile'),
                name: 'admin.profile',
                meta:{
                    middleware: [admin]
                }
            },
        ]
    }
]
