/**
 * Registeration Store
 * 
 * @description The store registers information of users
 */
import {
    AUTH
} from "../../api_endpoint";

import {requestAction} from "./helpers"

export const namespaced = true

export const state = {
    loading: false,
}

export const mutations = {
    SET_LOADING_STATUS(state, status = false){
        state.loading = status
    }
}

export const actions = {
    validateBiodata(context,{requestParam={},onSuccess=()=>{},onError=()=>{}}){
        return requestAction({
            context,
            requestParam,
            loadingMutation: 'SET_LOADING_STATUS',
            route: AUTH.VALIDATE_BIODATA,
            method: 'post',
            allowAlert: false
        },
        ()=>{
            onSuccess()
        },
        ()=>{
            onError()
        })
    },
    validateContact(context,{requestParam={},onSuccess=()=>{},onError=()=>{}}){
        return requestAction({
            context,
            requestParam,
            loadingMutation: 'SET_LOADING_STATUS',
            route: AUTH.VALIDATE_CONTACT,
            method: 'post',
            allowAlert: false
        },
        ()=>{
            onSuccess()
        },
        ()=>{
            onError()
        })
    },
    completeRegistration(context,{requestParam={},onSuccess=()=>{},onError=()=>{}}){
        return requestAction({
            context,
            requestParam,
            loadingMutation: 'SET_LOADING_STATUS',
            route: AUTH.REGISTER,
            method: 'post',
            allowAlert: true,
            errorHeading: 'Registration Failed',
            successHeading: 'Registration Successful'
        },
        (response)=>{
            onSuccess(response)
        },
        (error)=>{
            onError(error)
        })
    },
    

}

