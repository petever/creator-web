export const API_URL = {
  USERS_LOGIN: 'users/login',
  USERS_PROFILE: 'users/profile',
  POSTS: 'posts',
  FEEDS:(userName ?: string) =>  `feeds${!userName ? '' : `?userName=${userName}`}`,
  FEEDS_RECOMMEND_USERS : 'feeds/recommendUsers'
}
