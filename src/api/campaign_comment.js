import { axiosInstanceWithBearer } from "@/libs/axiosClient";

export const campaign_comment_summarize = (campaign_id) => {
    return axiosInstanceWithBearer.get(`/api/campaign/${campaign_id}/comments/summarize/`)
}

export const campaign_comment_category_list = (campaign_id, category_name) => {
    return axiosInstanceWithBearer.get(`/api/campaign/${campaign_id}/comments/category/${category_name}/list/`)
}
