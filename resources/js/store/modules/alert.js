/**
 * Store for Alerts and error handling
 */
export const namespaced = true;

export const state={
    errorBag: '',
    alertType: '', //success or error,
    alertMessage: '',
    alertHeading: '',
}

export const mutations={
    SET_ERROR_BAG(state, error){
        state.errorBag = error
    },
    RESET_ERROR_BAG(){
        state.errorBag = {}
    },
    SET_SUCCESS_ALERT(state,{heading,message}){
        state.alertType = 'success'
        state.alertMessage = message
        state.alertHeading = heading
    },
    SET_ERROR_ALERT(state,{heading,message}){
        state.alertType = 'error'
        state.alertMessage = message
        state.alertHeading = heading
    },
    RESET_ALERT(){
        state.alertType = ''
        state.alertMessage = ''
        state.alertHeading = ''
    }
}

export const actions={
    createSuccessAlert(context,{heading,message}){
        context.commit('RESET_ALERT')
        context.commit('SET_SUCCESS_ALERT',{heading,message})
        setTimeout(()=>{
            context.commit('RESET_ALERT')
        },4000)
    },
    createErrorAlert(context,{heading,message}){
        context.commit('RESET_ALERT')
        context.commit('SET_ERROR_ALERT',{heading,message})
        setTimeout(()=>{
            context.commit('RESET_ALERT')
        },4000)
    }
}
