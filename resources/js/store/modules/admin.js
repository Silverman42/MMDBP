/**
 * admin Store
 * 
 * @description The store registers information about logged in users
 */
import {
    ADMIN
} from "../../api_endpoint";

import {freshSearchAction, moreDataSearchAction, fetchAction,requestAction} from "./helpers"

export const namespaced = true

export const state = {
    search_admins: [],
    selectedAdmin: {},
    loading: false,
    fetchLoading: false,
    searchLoading: false,
    currentSearchPage: 1,
    nextSearchPage: 1,
    lastSearchPage: 1
}

export const mutations = {
    SET_SEARCH_ADMINS(state, admin) {
        state.search_admins = [...state.search_admins, ...admin]
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
    SET_FETCH_LOADING_STATUS(state, status = true) {
        state.fetchLoading = status
    },
    SET_SEARCH_LOADING_STATUS(state, status = true) {
        state.searchLoading = status
    },
    SET_SELECTED_ADMIN(state,admin){
        state.selectedAdmin = admin
    },
    RESET_SELECTED_ADMIN(state){
        state.selectedAdmin = {}
    },
    RESET_ADMINS(state) {
        state.currentSearchPage = 1
        state.nextSearchPage = 1
        state.lastSearchPage = 1
        state.search_admins = []
    }
}

/**
 * 
 */
export const actions = {

    searchAdmins(context,{searchParam={},searchState = 'fresh'}){
        let param = {
            context,
            route: ADMIN.ADMINS.FETCH_ALL,
            searchParam,
            errorHeading: 'admin Search Failed',
            loadingMutation: 'SET_SEARCH_LOADING_STATUS',
            setDataMutation: 'SET_SEARCH_ADMINS',
            resetMutation: 'RESET_ADMINS',
            pageMutation: 'SET_PAGINATION',
            nextPageState: 'nextSearchPage',
            lastPageState: 'lastSearchPage'
        }
        if (searchState == 'fresh'){
            return freshSearchAction(param)
        }
        return moreDataSearchAction(param)
    },

    fetchadmin(context,requestParams={}){
        return fetchAction({
            context,
            requestParams,
            route: ADMIN.ADMINS.FETCH_SINGLE,
            loadingMutation : 'SET_FETCH_LOADING_STATUS',
            dataSetMutation : 'SET_SELECTED_ADMIN',
            errorHeading: 'Admin not found'
        })
    },  
    createAdmin(context,{requestParam={},onSuccess=()=>{},onError=()=>{}}){
        return requestAction({
            context,
            requestParam,
            errorHeading: 'Admin creation failed',
            loadingMutation: 'SET_LOADING_STATUS',
            successHeading: 'Admin creation successful',
            route: ADMIN.ADMINS.CREATE,
            method: 'post'
        },
        ()=>{
            onSuccess()
        },
        ()=>{
            onError()
        })
    }
}
