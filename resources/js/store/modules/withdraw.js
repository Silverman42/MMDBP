/**
 * Store js
 * 
 */
import {CLIENT,ADMIN} from "../../api_endpoint"
import {requestAction} from "../modules/helpers"
export const state = {
    loading: false,
    fetchWithdrawalLoading: false
}

export const namespaced = true

export const mutations = {
    SET_LOADING_STATUS(state, status = true){
        state.loading = status
    },
    SET_FETCH_WITHDRAWAL_LOADING(state, status = true){
        state.fetchDepositLoading = status
    }
}

export const actions= {
    createWithdrawal(context,{requestParam = {},onSuccess=()=>{}, onError=()=>{}}){
        return requestAction({
            context,
            requestParam,
            loadingMutation: 'SET_LOADING_STATUS',
            route: ADMIN.WITHDRAW.CREATE,
            method: 'post',
            allowAlert: true,
            errorHeading: 'Withdrawal Failed',
            successHeading: 'Withdrawal Successful'
        },
        (response)=>{
            onSuccess(response)
        },
        (error)=>{
            onError(error)
        })
    }
}