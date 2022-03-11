import axios from "axios";


const axiosClient = axios.create({
    // baseURL: process.env.BACKEND_URL,
    // // 跨域請求set-cookie
    // withCredentials: true
    // baseURL: "https://gipassl.algotech.app"
    baseURL: "http://127.0.0.1:8000"
});

axiosClient.interceptors.response.use(
    response => response,
    error => {
        // whatever you want to do with the error
        if (error.response.status == 401) {
            // store.commit("SET_USER_DATA", {});
            // this.$router.push({ name: "login" });
            console.log(401401401)
        }
        return Promise.reject(error);
    }
);

export default axiosClient;