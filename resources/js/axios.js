/**
 * Axios plugin for vue js
 */
import axios from "axios"
import {BASEURL,AUTH} from "./api_endpoint"

window.$axios = axios.create({
    baseURL: BASEURL
})

/**
 * Add request parameter
 * 
 * @param config
 */
window.$axios.interceptors.request.use(
    function (config) {
        const token = window.localStorage.getItem("token");
        if (token != null) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error.response);
    }
)

/**
 * Add response parameter
 * 
 */
// window.$axios.interceptors.response.use(
//     response => {
//         return response;
//     },
//     function (error) {
//         if (error.response.status === 401) {
//             if(error.response.data.hasOwnProperty('role')){
//                 if(error.response.data.role == 'client'){
//                     return window.location.href = `${BASEURL}/app/admin`
//                 }
//                 return window.location.href = `${BASEURL}/app/client`
//             }
//         }
//         return Promise.reject(error.response);
//     }
// )

