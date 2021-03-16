/**
 * Store js
 * 
 */
import {CLIENT,ADMIN} from "../../api_endpoint"
import {requestAction} from "../modules/helpers"
export const state = {
    loading: false,
    fetchDepositLoading: false
}

export const namespaced = true

export const mutations = {
    SET_LOADING_STATUS(state, status = true){
        state.loading = status
    },
    SET_FETCH_DEPOSIT_LOADING(state, status = true){
        state.fetchDepositLoading = status
    }
}

export const actions= {
    createDeposit(context,{requestParam = {},onSuccess=()=>{}, onError=()=>{}}){
        return requestAction({
            context,
            requestParam,
            loadingMutation: 'SET_LOADING_STATUS',
            route: ADMIN.DEPOSIT.CREATE,
            method: 'post',
            allowAlert: true,
            errorHeading: 'Deposit Failed',
            successHeading: 'Deposit Successful'
        },
        (response)=>{
            onSuccess(response)
        },
        (error)=>{
            onError(error)
        })
    }
}