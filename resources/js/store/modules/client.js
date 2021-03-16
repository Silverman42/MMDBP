/**
 * client Store
 * 
 * @description The store registers information about logged in users
 */
import {
    ADMIN,AUTH
} from "../../api_endpoint";

import {freshSearchAction, moreDataSearchAction, fetchAction, requestAction} from "./helpers"

export const namespaced = true

export const state = {
    search_clients: [],
    selectedClient: {},
    loading: false,
    fetchLoading: false,
    searchLoading: false,
    currentSearchPage: 1,
    nextSearchPage: 1,
    lastSearchPage: 1,
    accountCheckloading: false
}

export const mutations = {
    SET_SEARCH_CLIENTS(state, client) {
        state.search_clients = [...state.search_clients, ...client]
    },
    SET_PAGINATION(state, {
        current,
        last
    }) {
        state.currentSearchPage = current
        state.lastSearchPage = last
        state.nextSearchPage++
    },
    SET_LOADING_STATUS(state, status = true) {
        state.loading = status
    },
    SET_ACCUOUNT_NUM_CHECK_LOADING_STATUS(state, status = true) {
        state.accountCheckloading = status
    },
    SET_FETCH_LOADING_STATUS(state, status = true) {
        state.fetchLoading = status
    },
    SET_SEARCH_LOADING_STATUS(state, status = true) {
        state.searchLoading = status
    },
    SET_SELECTED_CLIENT(state,client){
        state.selectedClient = client
    },
    RESET_SELECTED_CLIENT(state){
        state.selectedClient = {}
    },
    RESET_CLIENTS(state) {
        state.currentSearchPage = 1
        state.nextSearchPage = 1
        state.lastSearchPage = 1
        state.search_clients = []
    }
}

/**
 * 
 */
export const actions = {

    searchClients(context,{searchParam={},searchState = 'fresh'}){
        let param = {
            context,
            route: ADMIN.CLIENT.FETCH_ALL,
            searchParam,
            errorHeading: 'Client Search Failed',
            loadingMutation: 'SET_SEARCH_LOADING_STATUS',
            setDataMutation: 'SET_SEARCH_CLIENTS',
            resetMutation: 'RESET_CLIENTS',
            pageMutation: 'SET_PAGINATION',
            nextPageState: 'nextSearchPage',
            lastPageState: 'lastSearchPage'
        }
        if (searchState == 'fresh'){
            return freshSearchAction(param)
        }
        return moreDataSearchAction(param)
    },

    fetchClient(context,{requestParams={},onSuccess=()=>{},onError=()=>{}}){
        return fetchAction({
            context,
            requestParams,
            route: ADMIN.CLIENT.FETCH_SINGLE,
            loadingMutation : 'SET_FETCH_LOADING_STATUS',
            dataSetMutation : 'SET_SELECTED_CLIENT',
            errorHeading: 'Client not found'
        },()=>{
            onSuccess()
        },()=>{
            onError()
        })
    },  

    deactivateClient(context,{requestParam = {}, onSuccess=()=>{}, onError=()=>{}}){
        return requestAction({
            context,
            route : ADMIN.CLIENT.DEACTIVATE,
            errorHeading: 'Client Deactivation failed',
            loadingMutation: 'SET_LOADING_STATUS',
            method:'put',
            successHeading: 'Client Successfully Dactivated',
            requestParam
        },
        ()=>{
            onSuccess()
        },
        ()=>{
            onError()
        })
    },
    activateClient(context,{requestParam = {}, onSuccess=()=>{}, onError=()=>{}}){
        return requestAction({
            context,
            route : ADMIN.CLIENT.ACTIVATE,
            errorHeading: 'Client Activation failed',
            loadingMutation: 'SET_LOADING_STATUS',
            method:'put',
            successHeading: 'Client Successfully activated',
            requestParam
        },
        ()=>{
            onSuccess()
        },
        ()=>{
            onError()
        })
    },
    createClient(context,{requestParam={},onSuccess={},onError={}}){
        return requestAction({
            requestParam,
            errorHeading: 'Client creation failed',
            loadingMutation: 'SET_LOADING_STATUS',
            context,
            method: 'post',
            route: ADMIN.CLIENT.CREATE,
            successHeading: 'Client creation successful'
        },
        ()=>{
            onSuccess()
        },
        ()=>{
            onError()
        }
        )
    },

    checkValidAccountNumber(context,{requestParam={},onSuccess={},onError={}}){
        return requestAction({
            requestParam,
            loadingMutation: 'SET_ACCUOUNT_NUM_CHECK_LOADING_STATUS',
            context,
            method: 'get',
            route: AUTH.VERIFY_ACCOUNT_NUM,
            allowAlert: false,
        },
        (response)=>{
            onSuccess(response)
        },
        (error)=>{
            onError(error)
        }
        )
    }

}
