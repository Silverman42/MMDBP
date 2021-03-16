/**
 * Store js
 * 
 */
import {CLIENT,ADMIN} from "../../api_endpoint"
import {requestAction} from "../modules/helpers"
export const state = {
    initiateLoading: false,
    fetchTransferLoading: false,
    completeLoading: false
}

export const namespaced = true

export const mutations = {
    SET_INITIATING_LOADING_STATUS(state, status = true){
        state.initiateLoading = status
    },
    SET_COMPLETION_LOADING_STATUS(state, status = true){
        state.completeLoading = status
    },
    SET_FETCH_TRANSFER_LOADING(state, status = true){
        state.fetchTransferLoading = status
    }
}

export const actions= {
    createTransfer(context,{requestParam = {},onSuccess=()=>{}, onError=()=>{}, role="client"}){
        return requestAction({
            context,
            requestParam,
            loadingMutation: 'SET_INITIATING_LOADING_STATUS',
            route: role == "client" ? CLIENT.TRANSFER.CREATE : ADMIN.TRANSFER.CREATE ,
            method: 'post',
            allowAlert: true,
            errorHeading: 'Transfer Initiation Failed',
            successHeading: 'Transfer Initiated'
        },
        (response)=>{
            onSuccess(response)
        },
        (error)=>{
            onError(error)
        })
    },
    completeTransfer(context,{requestParam = {},onSuccess=()=>{}, onError=()=>{}, role="client"}){
        return requestAction({
            context,
            requestParam,
            loadingMutation: 'SET_COMPLETION_LOADING_STATUS',
            route: role == "client" ? CLIENT.TRANSFER.COMPLETE : ADMIN.TRANSFER.COMPLETE ,
            method: 'post',
            allowAlert: true,
            errorHeading: 'Transfer Failed',
            successHeading: 'Transfer COmpleted'
        },
        (response)=>{
            onSuccess(response)
        },
        (error)=>{
            onError(error)
        })
    }
}