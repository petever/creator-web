import {API_URL} from "@/shared/constants/apiURL";
import {serverKy} from "@/shared/core/serverKy";

export const getServerFeedRecommendUsers = async () => {
  return await serverKy.get(API_URL.FEEDS_RECOMMEND_USERS).json()
}
