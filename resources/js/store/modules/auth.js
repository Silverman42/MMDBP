/**
 * Authentication Store
 * 
 * @description The store registers information about logged in users
 */
 import {AUTH,BASEURL} from "../../api_endpoint";
 import {fetchAction,requestAction} from "../../store/modules/helpers"

 export const namespaced = true

 export const state = {
    userData : {},
    role : null,
    token : window.localStorage.getItem('token'),
    loading : false,
    avatarUploading: false,
    errorBag: {},
    userFetchLoading: false,
    hasProcessingTransaction: false
 }

 export const mutations = {
    SET_USER(state,data){
        state.userData = data
        state.role = data.roles
    },
    SET_PROCESSING_TRANSACTION(state,data){
        state.hasProcessingTransaction = data == 1 ? true : false
    },
    SET_AVATAR_UPLOADING(state,status){
        state.avatarUploading = status
    },
    SET_TOKEN(state,token){
        state.token = token
        window.localStorage.setItem('token',token)
    },
    CLEAR_USER(){
        window.localStorage.clear()
        window.location.href = BASEURL+AUTH.LOGIN_VIEW
    },
    SET_ERROR_BAG(state,errorBag){
        state.errorBag = errorBag
    },
    SET_LOADING(state,status){
        state.loading = status
    },
    SET_USER_FETCH_LOADING(state,status = true){
        state.userFetchLoading = status
    }
 }

 export const actions={
     registerUser(context,{payload,router}){
        context.commit('SET_LOADING',true)
        window.$axios.post(AUTH.REGISTER,payload)
        .then((response)=>{
            context.commit('SET_LOADING',false)
            context.commit('SET_USER',response.data.user)
            context.commit('SET_TOKEN',response.data.token)
            context.dispatch('alert/createSuccessAlert',{heading:'Registration Successful',message:'Enjoy your trading session'},{root:true})
            router.push({name:'client.dashboard'})
        })
        .catch((error)=>{
            if(error.data.hasOwnProperty('errors')){
                context.commit('alert/SET_ERROR_BAG',error.data.errors || {},{root:true})
            }
            let message = error.data.message || error.statusText
            context.dispatch('alert/createErrorAlert',{heading:'Registration failed',message},{root:true})
            context.commit('SET_LOADING',false)
        })
     },
     loginUser(context,{payload,router}){
        context.commit('SET_LOADING',true)
        window.$axios.post(AUTH.LOGIN,payload)
        .then((response)=>{
            context.commit('SET_LOADING',false)
            context.commit('SET_USER',response.data.user)
            context.commit('SET_TOKEN',response.data.token)
            context.dispatch('alert/createSuccessAlert',{heading:'Login Successful',message:'Enjoy your trading session'},{root:true})
            if(context.state.role == 'admin'){
               return router.push({name:'admin.dashboard'})
            }
            return router.push({name:'client.dashboard'})
        })
        .catch((error)=>{
            let message = error.data || error.statusText
            context.dispatch('alert/createErrorAlert',{heading:'Login failed',message},{root:true})
            context.commit('SET_LOADING',false)
        })
     },
     resetPassword(context,{payload}){
        context.commit('SET_LOADING',true)
        window.$axios.post(AUTH.PASSWORD_EMAIL,payload)
        .then((response)=>{
            context.commit('SET_LOADING',false)
            context.dispatch('alert/createSuccessAlert',{heading:'Reset Mail Sent',message:'Your password recovery mail has been sent to your email'},{root:true})
        })
        .catch((error)=>{
            let message = ''
            if(error.hasOwnProperty('data')){
                if(error.data.hasOwnProperty('errors')){
                    context.commit('alert/SET_ERROR_BAG',error.data.errors || {},{root:true})
                }
                message = error.data.message || error.statusText
            }
            context.dispatch('alert/createErrorAlert',{heading:'Login failed',message},{root:true})
            context.commit('SET_LOADING',false)
        })
     },

     logoutUser(context,router){
        context.commit('SET_LOADING',true)
        window.$axios.post(AUTH.LOGOUT,{})
        .then((response)=>{
            context.commit('SET_LOADING',false)
            context.dispatch('alert/createSuccessAlert',{heading:'Logout Successfull',message:'Your have successfully logged out of your account'},{root:true})
            router.push({name:'auth.login'})
        })
        .catch((error)=>{
            let message = error.message || error.statusText
            context.dispatch('alert/createErrorAlert',{heading:'Logout failed',message},{root:true})
            context.commit('SET_LOADING',false)
        })
     },
     getUserData(context,{onSuccess=()=>{}, onError=()=>{}} = {}){
        return fetchAction({
            context,
            route : AUTH.FETCH_USER_PROFILE,
            errorHeading : 'User data not found',
            loadingMutation : 'SET_USER_FETCH_LOADING',
            dataSetMutation : 'SET_USER',
            errorAlertAction : 'alert/createErrorAlert'
        },()=>{
            onSuccess()
        },()=>{
            onError()
        })
     },
     updateBiodata(context,{requestParam={},onSuccess=()=>{}, onError=()=>{}} = {}){
        return requestAction({
            context,
            requestParam,
            route : AUTH.UPDATE_BIODATA,
            method: 'put',
            errorHeading : 'Biodata Update Failed',
            successHeading: 'Biodata Update successful',
            loadingMutation : 'SET_LOADING'
        },()=>{
            onSuccess()
        },()=>{
            onError()
        })
     },
     updatePassword(context,{requestParam={},onSuccess=()=>{}, onError=()=>{}} = {}){
        return requestAction({
            context,
            requestParam,
            route : AUTH.UPDATE_PASSWORD,
            method: 'put',
            errorHeading : 'Password Update Failed',
            successHeading: 'Password Update successful',
            loadingMutation : 'SET_LOADING'
        },()=>{
            onSuccess()
        },()=>{
            onError()
        })
     },

     verifyEmail(context,{requestParam={},onSuccess=()=>{}, onError=()=>{}} = {}){
        return requestAction({
            context,
            requestParam,
            route : AUTH.RESEND_EMAIL_VERIFICATION,
            method: 'post',
            errorHeading : 'Verification mail not sent',
            successHeading: 'Verification mail sent',
            loadingMutation : 'SET_LOADING'
        },()=>{
            onSuccess()
        },()=>{
            onError()
        })
     },
     resetPin(context,{requestParam={},onSuccess=()=>{}, onError=()=>{}} = {}){
        return requestAction({
            context,
            requestParam,
            route : AUTH.PIN_EMAIL,
            method: 'post',
            errorHeading : 'Pin Recovery Email Not Sent',
            successHeading: 'Pin Recovery Email Sent',
            loadingMutation : 'SET_LOADING'
        },()=>{
            onSuccess()
        },()=>{
            onError()
        })
     },
     uploadAvatar(context,{requestParam = {},onSuccess=()=>{}, onError=()=>{}}){
        return requestAction({
            context,
            requestParam,
            loadingMutation: 'SET_AVATAR_UPLOADING',
            route: AUTH.UPLOAD_AVATAR,
            method: 'post',
            allowAlert: true,
            errorHeading: `Profile picture upload failed`,
            successHeading: `Profile picture upload successful`,
            requestHeaders:{
                'Content-Type': 'multipart/form-data'
            }
        },
        (response)=>{
            onSuccess(response)
        },
        (error)=>{
            onError(error)
        })
    },
 }
