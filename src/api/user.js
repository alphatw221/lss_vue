import { axiosInstance, axiosInstanceWithBearer } from "@/libs/axiosClient";

export const admin_login = data => {
    console.log(data)
    return axiosInstance.post(`/token/`,data);
};

export const seller_login = data =>{
    return axiosInstance.post(`/api/user/user_login/`, data);
}

export const buyer_login = data =>{
    return axiosInstance.post(`/api/user/customer_login/`,data);
}

export const retrieve_user = id => {
    console.log(id)
    return axiosInstanceWithBearer.get(`/user/${id}`);
};

export const update_user = (id,data) => {
    console.log(id)
    return axiosInstanceWithBearer.put(`/user/${id}`, data);
};

export const list_user = () => {
    return axiosInstanceWithBearer.get('/api/user/list/');
};

export const create_valid_api_user = data => {
    return axiosInstanceWithBearer.post('/api/user/create_valid_api_user/', data);
};

export const get_buyer_profile_images = () => {
    return axiosInstanceWithBearer.get('/api/user/buyer_profile_images/');
};

// export const whatever_post_api = data => {
//     return this.axios.post(`/watever_post_path` , data);
// };

