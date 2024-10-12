import {FeedPageable} from "@/entities/feeds/types";

export const API_URL = {
  USERS_LOGIN: 'users/login',
  USERS_PROFILE: 'users/profile',
  POSTS: 'posts',
  FEEDS:(userName ?: string, pageParams ?: FeedPageable) =>  `feeds?&size=10&sort=string${!pageParams ? '' : `&page=${pageParams.page}`}${!userName ? '' : `&username=${userName}`}`,
}
