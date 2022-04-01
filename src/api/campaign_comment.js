import { axiosInstanceWithBearer } from "@/libs/axiosClient";

export const campaign_comment_summarize = (campaign_id) => {
    return axiosInstanceWithBearer.get(`/api/campaign-comment/summarize/?campaign_id=${campaign_id}`)
}


