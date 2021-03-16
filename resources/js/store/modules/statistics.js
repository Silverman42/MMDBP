/**
 * client Store
 * 
 * @description The store registers information about logged in users
 */
import {
    ADMIN, CLIENT
} from "../../api_endpoint"
import {fetchAction} from "./helpers"

export const namespaced = true

export const state={
    transaction:{},
    withdrawal: {},
    deposit: {},
    transfer: {},
    balance: 0,
    loading:false
}

export const mutations={
    SET_STATS(state,stats = {}){
        state.transaction = stats[0]['data'].transaction || {}
        state.deposit = stats[0]['data'].deposit || {}
        state.withdrawal = stats[0]['data'].withdrawal || {}
        state.transfer = stats[0]['data'].transfer || {}
        state.balance = stats[0]['data'].balance || 0
    },
    SET_LOADING_STATUS(state,status){
        state.stats = status
    }
}

export const actions={
    fetchStatistics(context,{userType = 'client',onSuccess=()=>{},onError=()=>{}}={}){
        return fetchAction({
            context,
            route: userType == 'admin' ? ADMIN.STATISTICS.FETCH : CLIENT.STATISTICS.FETCH,
            loadingMutation : 'SET_LOADING_STATUS',
            dataSetMutation : 'SET_STATS',
            errorHeading: 'Statistics not found'
        },(response)=>{
            onSuccess(response)
        },(error)=>{
            onError(error)
        })
    }
}