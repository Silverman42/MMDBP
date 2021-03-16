/**
 * Axios plugin for vue js
 */
import axios from "axios"
import store from "../store/index"
const VueAxios = {
    install(Vue, {
        baseURL = 'http://localhost:3000'
    } = {}) {

        const axiosInit = axios.create({
            baseURL: baseURL
        })

        /**
         * Add request parameter
         * 
         * @param config
         */
        axiosInit.interceptors.request.use(
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
         *
         * 
         */
        axiosInit.interceptors.response.use(
            response => {
                return response;
            },
            function (error) {
                if (error.response.status === 401) {
                    store.commit("auth/CLEAR_USER");
                }
                return Promise.reject(error.response);
            }
        )

        Vue.prototype.$axios = function () {
            return axiosInit
        }
    }
}

export default VueAxios
