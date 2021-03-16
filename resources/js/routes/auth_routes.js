import guest from "../routes/middleware/guest";
import unverified from "../routes/middleware/unverified";
/**
 * @description Auth routes
 * @return {array}
 */

export default [
    {
        path: "/",
        component : ()=>import(/* webpackChunkName: "auth_routes" */ '../pages/auth/Index'),
        children:[
            {
                path: "",
                component: ()=>import(/* webpackChunkName: "auth_routes" */ '../pages/auth/Login'),
                name: 'auth.login',
                meta:{
                    middleware: [guest]
                }
            },
            {
                path: "register",
                component: ()=>import(/* webpackChunkName: "auth_routes" */ '../pages/auth/Register'),
                name: 'auth.register',
                meta:{
                    middleware: [guest]
                }
            },
            {
                path: "password_recovery",
                component: ()=>import(/* webpackChunkName: "auth_routes" */ '../pages/auth/PasswordRecovery'),
                name: 'auth.password_recovery',
                meta:{
                    middleware: [guest]
                }
            },
            {
                path: "pin_recovery",
                component: ()=>import(/* webpackChunkName: "auth_routes" */ '../pages/auth/PinRecovery'),
                name: 'auth.pin_recovery',
                meta:{
                    middleware: [guest]
                }
            },
            {
                path: "email_verification",
                component: ()=>import(/* webpackChunkName: "auth_routes" */ '../pages/auth/EmailVerification'),
                name: 'auth.email_verification',
                meta:{
                    middleware: [unverified]
                }
            }
        ]
    },
    {
        path: '*',
        component: ()=>import(/* webpackChunkName: "not_found" */ '../pages/auth/404')
    }
]
