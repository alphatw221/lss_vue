import axiosClient from "@/libs/axiosClient";




export const admin_login = data => {
    console.log(data)
    return axiosClient.post(`/token/`,data);
};

// export const whatever_post_api = data => {
//     return this.axios.post(`/watever_post_path` , data);
// };