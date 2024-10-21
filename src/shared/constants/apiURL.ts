export const API_URL = {
  USERS_LOGIN: 'users/login',
  USERS_PROFILE: 'users/profile',
  USERS_USER: (username?: string) => `users/${username}`,
  POSTS: 'posts',
  FEEDS: 'feeds',
  FEEDS_RECOMMEND_USERS: 'feeds/recommendUsers',
  FEED_LIKE: (id: string) => `posts/${id}/like`,
  COMMENTS: (id: string) => `feeds/${id}/comments`,
  //SUBSCRIBE
  SUBSCRIBER_PLANS: 'subscriberPlans',
}
