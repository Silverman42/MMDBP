/**
 * Creates a fresh request to the api to fetch the latest search items
 * @param {} 
 */
export const freshSearchAction = ({
    context = {},
    route = '',
    searchParam = {},
    errorHeading = '',
    loadingMutation = '',
    resetMutation = '',
    pageMutation = '',
    setDataMutation = '',
    errorAlertAction = '',

}) => {
    context.commit(loadingMutation, true)
    context.commit(resetMutation)
    window.$axios.get(route, {
            params: {
                ...searchParam,
                page: 1
            }
        })
        .then((response) => {
            context.commit(pageMutation, {
                current: response.data.current_page,
                last: response.data.last_page
            })
            context.commit(setDataMutation, response.data.data)
            context.commit(loadingMutation, false)
        })
        .catch((error) => {
            context.dispatch(errorAlertAction, {
                heading: errorHeading,
                message: error.statusText
            }, {
                root: true
            })
            context.commit(loadingMutation, false)
        })
}

/**
 * Makes a request to the api to fetch more search items based on the page number sent to the api 
 * @param {*} param0 
 */
export const moreDataSearchAction = ({
    context = {},
    route = '',
    searchParam = {},
    errorHeading = '',
    loadingMutation = '',
    pageMutation = '',
    setDataMutation = '',
    nextPageState = '',
    lastPageState = '',
    errorAlertAction = 'alert/createErrorAlert',
    successAlertAction = 'alert/createSuccessAlert'
}) => {
    if (context.state[nextPageState] <= context.state[lastPageState]) {
        context.commit(loadingMutation, true)
        return window.$axios.get(route, {
                params: {
                    page: context.state[nextPageState],
                    ...searchParam
                }
            })
            .then((response) => {
                context.commit(pageMutation, {
                    current: response.data.current_page,
                    last: response.data.last_page
                })
                context.commit(setDataMutation, response.data.data)
                context.commit(loadingMutation, false)
            })
            .catch((error) => {
                context.dispatch(errorAlertAction, {
                    heading: errorHeading,
                    message: error.statusText
                }, {
                    root: true
                })
                context.commit(loadingMutation, false)
            })
    }
    return context.dispatch(successAlertAction, {
        heading: 'Oops!! No Data to fetch',
        message: 'You have completed your search'
    }, {
        root: true
    })
}

/**
 * Makes request to the API to fetch all the items of an entity/model
 * @param {*}
 */
export const fetchAction = ({
    context = {},
    route = '',
    requestParams = {},
    errorHeading = '',
    loadingMutation = '',
    dataSetMutation = '',
    errorAlertAction = 'alert/createErrorAlert',
},
    onSuccess = ()=>{},
    onError = ()=>{},
) => {
    context.commit(loadingMutation, true)
    window.$axios.get(route,{
        params: requestParams
    })
        .then((response) => {
            context.commit(dataSetMutation, response.data.data || response.data)
            onSuccess(response)
            context.commit(loadingMutation, false)
        })
        .catch((error) => {
            context.dispatch(errorAlertAction, {
                heading: errorHeading,
                message: error.statusText
            }, {
                root: true
            })
            onError(error)
            context.commit(loadingMutation, false)
        })
}

/**
 * Makes requests of any type (post, get, put, delete, patch) to 
 * the API endpoint to perform a particular action
 * 
 * @param {*}
 */
export const requestAction = ({
    context = {},
    route,
    errorHeading,
    loadingMutation,
    method,
    errorBagMutation = 'alert/SET_ERROR_BAG',
    resetErrorBagMutation = 'alert/RESET_ERROR_BAG',
    errorAlertAction = 'alert/createErrorAlert',
    successAlertAction = 'alert/createSuccessAlert',
    successHeading = '',
    successMessage = '',
    requestParam = {},
    allowAlert = true,
    requestHeaders = {},
}, onSuccess = () => {}, onError = () => {}) => {
    context.commit(loadingMutation, true)
    const parameters = method == 'get' || method == 'delete' ? {params : requestParam} : requestParam
    const axios = window.$axios[method](route, parameters,{headers: requestHeaders})
        axios.then((response) => {
            let message = response.hasOwnProperty('data') ? response.data.message : successMessage
            context.commit(resetErrorBagMutation,{},{
                root: true
            })
            if(allowAlert == true){
                context.dispatch(successAlertAction, {
                    heading: successHeading,
                    message
                }, {
                    root: true
                })
            }
            onSuccess(response)
            context.commit(loadingMutation, false)
        })
        .catch((error) => {
            let message = ''
            if(error.hasOwnProperty('data')){
                if (error.data.hasOwnProperty('errors')) {
                    context.commit(errorBagMutation, error.data.errors || {}, {
                        root: true
                    })
                }
                message = error.data.message || error.statusText
                if(allowAlert == true){
                    context.dispatch(errorAlertAction, {
                        heading: errorHeading,
                        message
                    }, {
                        root: true
                    })
                }
            }
            onError(error)
            context.commit(loadingMutation, false)
        })
}
