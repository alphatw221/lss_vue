import { /*axiosInstance,*/ axiosInstanceWithBearer } from "@/libs/axiosClient";

export const dealer_dashboard = () => {
    return axiosInstanceWithBearer.get('/api/dashboard/dealer_cards/');
};

export const dealer_campaign = () => {
    return axiosInstanceWithBearer.get('/api/dashboard/dealer_campaign_linechart/');
};