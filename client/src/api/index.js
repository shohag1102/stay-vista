import axios from "axios";
import { clearCookie } from "./auth";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})

// intercept response and check for unauthorized access/response status
axiosSecure.interceptors.response.use(response=>response, async error => {
    console.log('[Interceptor-Err] ', error.response);

    if(
        error.response &&
        error.response.status === 401 &&
        error.response.status === 403 
    ){
        await clearCookie()
        // as navigate works with components 
        // so we need to work with window.location
        window.location.replace('/login')
    }

    return Promise.reject(error)
})

export default axiosSecure;