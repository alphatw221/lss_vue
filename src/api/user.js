import axiosClient from "@/libs/axiosClient";




export const admin_login = data => {
    console.log(data)
    return axiosClient.post(`/token/`,data);
};

export const retrieve_user = id => {
    console.log(id)
    return axiosClient.get(`/user/${id}`);
};

export const update_user = (id,data) => {
    console.log(id)
    return axiosClient.put(`/user/${id}`, data);
};

// export const whatever_post_api = data => {
//     return this.axios.post(`/watever_post_path` , data);
// };

