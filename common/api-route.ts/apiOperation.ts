import axios, {AxiosRequestConfig, AxiosResponse} from "axios";

const axiosInstance = axios.create({
    baseURL: "/api/v1/",
    timeout: 10000,
})

function apiGet<T = any>(apiPath: string, params: AxiosRequestConfig = {}) {

    return axiosInstance.get(apiPath, params).then((response: AxiosResponse<T>) => response).catch((error: AxiosResponse<T>) => {
        throw error;
    });
}


function apiPost<R = any, T = any>(apiPath: string, data?: R, params: AxiosRequestConfig = {}) {
    return axiosInstance.post(apiPath, data, params).then((response: AxiosResponse<T>) => response).catch((error: AxiosResponse<T>) =>{
        throw error
    })
}

function apiDelete<T=any>(apiPath: string) {
    return axiosInstance.delete(apiPath ).then((response: AxiosResponse<T>) => response).catch((error: AxiosResponse<T>) =>{
        throw error
    })
}


function apiPut<R = any, T = any>(apiPath: string, data?: R, params: AxiosRequestConfig = {}) {
    return axiosInstance.put(apiPath, data, params).then((response: AxiosResponse<T>) => response).catch((error: AxiosResponse<T>) =>{
        throw error
    })
}


export {apiGet,apiPost,apiPut,apiDelete};




