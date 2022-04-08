import axios from "axios";
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();



// let axiosClient = axios.create({
//     // baseURL: process.env.BACKEND_URL,
//     // // 跨域請求set-cookie
//     // withCredentials: true
//     // baseURL: "https://gipassl.algotech.app"
//     baseURL: "http://127.0.0.1:8000",
//     headers: { 'Authorization': `Bearer ${cookies.get("access_token")}` }
// });


// axiosClient.interceptors.response.use(
//     response => response,
//     error => {
//         // whatever you want to do with the error
//         if (error.response.status == 401) {
//             // store.commit("SET_USER_DATA", {});
//             // this.$router.push({ name: "login" });
//             console.log(401401401)
//         }
//         return Promise.reject(error);
//     }
// );



const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_ROOT_API,
})
axiosInstance.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status == 401) {
            console.log(401401401)
        }
        return Promise.reject(error);
    }
);

const axiosInstanceWithBearer = axios.create({
    baseURL: process.env.VUE_APP_ROOT_API,
    headers: { 'Authorization': `Bearer ${cookies.get("access_token")}` }
})
axiosInstanceWithBearer.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status == 401) {
            console.log(401401401)
        }
        return Promise.reject(error);
    }
);

export { axiosInstance, axiosInstanceWithBearer }