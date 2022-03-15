import axiosClient from "@/libs/axiosClient";

// ('user_subscription_id','maximum_usage_count','interval')
export const create_activate_code = data => {
    console.log(data)
    return axiosClient.post(`/create_activate_code/`,data);
};