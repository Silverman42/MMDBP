/**
 * Store js
 * 
 */
import {CLIENT,ADMIN} from "../../api_endpoint"
import {requestAction} from "../modules/helpers"
export const state = {
    initiateLoading: false,
    fetchTransferLoading: false,
    completeLoading: false,
    docUploadLoading: false
}

export const namespaced = true

export const mutations = {
    SET_INITIATING_LOADING_STATUS(state, status = true){
        state.initiateLoading = status
    },
    SET_COMPLETION_LOADING_STATUS(state, status = true){
        state.completeLoading = status
    },
    SET_DOCUMENT_UPLOAD_LOADING_STATUS(state, status = true){
        state.docUploadLoading = status
    },
    SET_FETCH_TRANSFER_LOADING(state, status = true){
        state.fetchTransferLoading = status
    }
}

export const actions= {
    createTransfer(context,{requestParam = {},onSuccess=()=>{}, onError=()=>{}}){
        return requestAction({
            context,
            requestParam,
            loadingMutation: 'SET_INITIATING_LOADING_STATUS',
            route: CLIENT.INTER_BANK_TRANSFER.CREATE ,
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
    uploadDocument(context,{requestParam = {},onSuccess=()=>{}, onError=()=>{},type = 'tax_pay_receipt'}){
        let documentName = type == 'tax_pay_receipt' ? 'Tax payment receipt' : 'Transfer certificate'
        return requestAction({
            context,
            requestParam,
            loadingMutation: 'SET_DOCUMENT_UPLOAD_LOADING_STATUS',
            route: type == 'tax_pay_receipt' ? CLIENT.INTER_BANK_TRANSFER.TAX_PAYMENT_RECEIPT :  CLIENT.INTER_BANK_TRANSFER.TRANSFER_CERT,
            method: 'post',
            allowAlert: true,
            errorHeading: `${documentName} upload Failed`,
            successHeading: `${documentName} upload successful`,
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
    completeTransfer(context,{requestParam = {},onSuccess=()=>{}, onError=()=>{},}){
        return requestAction({
            context,
            requestParam,
            loadingMutation: 'SET_COMPLETION_LOADING_STATUS',
            route: CLIENT.INTER_BANK_TRANSFER.COMPLETE,
            method: 'post',
            allowAlert: true,
            errorHeading: 'Transfer Failed',
            successHeading: 'Transfer Completed'
        },
        (response)=>{
            onSuccess(response)
        },
        (error)=>{
            onError(error)
        })
    }
}