import { AUTH,BASEURL } from "../../api_endpoint";

export default (to, from, next, store)=>{
    checkOnlineAuthentication(store,next)
}

const checkOnlineAuthentication = (store,next)=>{
    window.$axios.get(AUTH.FETCH_USER_PROFILE).then((response)=>{
        if(response){
            let userRole = response.data.roles
            store.commit('auth/SET_USER',response.data)
            return checkUserRole(userRole, next)
        }
        return
    }).catch((error)=>{
        if(error.status == 401){
            return window.location.href = `${BASEURL}/app`
        }
        if(error.status == 403 && error.data.hasOwnProperty('type')){
            return next({name: 'auth.email_verification'})
        }
        next({name: "error_page" })
    })
}

const checkUserRole = (userRole,next) => {
    if(userRole !== 'client'){
        return next({name: 'admin.dashboard'})
    }
    return next()
}