/**
 * Store js
 * 
 */
import {ADMIN} from "../../api_endpoint"
import {requestAction} from "../modules/helpers"
export const state = {
    loading: false,
}

export const namespaced = true

export const mutations = {
    SET_LOADING_STATUS(state, status = true){
        state.loading = status
    }
}

export const actions= {
    updateSettings(context,{requestParam = {},onSuccess=()=>{}, onError=()=>{}}){
        return requestAction({
            context,
            requestParam,
            loadingMutation: 'SET_LOADING_STATUS',
            route: ADMIN.SETTINGS.UPDATE ,
            method: 'post',
            allowAlert: true,
            errorHeading: 'Settings update failed',
            successHeading: 'Settings update succesfull'
        },
        (response)=>{
            onSuccess(response)
        },
        (error)=>{
            onError(error)
        })
    }
}