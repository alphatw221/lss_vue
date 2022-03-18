import { axiosInstance, axiosInstanceWithBearer } from "@/libs/axiosClient";

// ('user_subscription_id','maximum_usage_count','interval')
export const create_activate_code = data => {
    console.log(data)
    return axiosInstance.post(`/create_activate_code/`,data);
};

export const get_user_subscription_facebook_pages = () => {
    return axiosInstanceWithBearer.get(`/api/user-subscription/facebook_pages/`)
}

export const bind_user_facebook_pages = (id,data) => {
    return axiosInstanceWithBearer.post(`/api/user-subscription/${id}/bind_facebook_pages/`, data)
}

// export const get_user_subscription_youtube_channels = id => {
//     return axiosInstanceWithBearer.get(`/api/user-subscription/${id}/youtube_channels/`)
// }

// export const get_user_subscription_instagram_profiles = id => {
//     return axiosInstanceWithBearer.get(`/api/user-subscription/${id}/instagram_profiles/`)
// }