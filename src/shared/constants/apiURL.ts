export const API_URL = {
  USERS_LOGIN: 'users/login',
  USERS_PROFILE: 'users/profile',
  POSTS: 'posts',
  FEEDS: 'feeds',
  FEEDS_RECOMMEND_USERS : 'feeds/recommendUsers',
  FEED_LIKE : (id : string) => `posts/${id}/like`,
  COMMENTS : (id : string) => `feeds/${id}/comments`
}
