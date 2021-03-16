import {CLIENT,ADMIN, AUTH} from "../../api_endpoint"
import {freshSearchAction,moreDataSearchAction,requestAction} from "../modules/helpers"

export const namespaced = true

export const state = {
    transactionEditLoading: false,
    transactionList: [],
    searchLoading: false,
    currentSearchPage: 1,
    nextSearchPage: 1,
    lastSearchPage: 1,
}

export const mutations = {
    SET_TRANSACTION_LIST(state, transaction) {
        state.transactionList = [...state.transactionList, ...transaction]
    },
    SET_PAGINATION(state, {
        current,
        last
    }) {
        state.currentSearchPage = current
        state.lastSearchPage = last
        state.nextSearchPage++
    },

    SET_SEARCH_LOADING_STATUS(state, status = true) {
        state.searchLoading = status
    },

    SET_EDIT_LOADING_STATUS(state, status = true) {
        state.transactionEditLoading = status
    },

    RESET_SEARCH_LIST(state) {
        state.currentSearchPage = 1
        state.nextSearchPage = 1
        state.lastSearchPage = 1
        state.transactionList = []
    }
}

export const actions={
    searchTransactions(context,{searchParam={},searchState = 'fresh',role = 'client'}){

        let param = {
            context,
            route: role === 'admin' ? ADMIN.TRANSACTION.SEARCH : CLIENT.TRANSACTION.SEARCH,
            searchParam,
            errorHeading: 'Transaction Search Failed',
            loadingMutation: 'SET_SEARCH_LOADING_STATUS',
            setDataMutation: 'SET_TRANSACTION_LIST',
            resetMutation: 'RESET_SEARCH_LIST',
            pageMutation: 'SET_PAGINATION',
            nextPageState: 'nextSearchPage',
            lastPageState: 'lastSearchPage'
        }
        if (searchState == 'fresh'){
            return freshSearchAction(param)
        }
        return moreDataSearchAction(param)
    },
    createOTP(context,{requestParam = {},onSuccess = ()=>{}, onError = ()=>{}}){
        return requestAction({
            context,
            requestParam,
            loadingMutation: 'SET_EDIT_LOADING_STATUS',
            route: ADMIN.OTP.CREATE ,
            method: 'post',
            allowAlert: true,
            errorHeading: 'OTP Generation Failed',
            successHeading: 'OTP Generation Successful'
        },
        (response)=>{
            onSuccess(response)
        },
        (error)=>{
            onError(error)
        })
    },
    cancelTransaction(context,{requestParam = {},onSuccess = ()=>{}, onError = ()=>{}}){
        return requestAction({
            context,
            requestParam,
            loadingMutation: 'SET_EDIT_LOADING_STATUS',
            route: ADMIN.TRANSACTION.CANCEL ,
            method: 'post',
            allowAlert: true,
            errorHeading: 'Transaction Cancellation Failed',
            successHeading: 'Transaction Cancellation Successful'
        },
        (response)=>{
            onSuccess(response)
        },
        (error)=>{
            onError(error)
        })
    }
}