export const BASE_URL = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL

export const API_URL = {
  USERS_LOGIN: 'users/login',
  USERS_PROFILE: 'users/profile',
  USERS_USER: (username?: string) => `users/${username}`,
  POSTS: 'posts',
  FEEDS: 'feeds',
  FEEDS_COMMENT : (id: string) =>  `feeds/${id}/comments`,
  FEEDS_RECOMMEND_USERS: 'feeds/recommendUsers',
  FEED_LIKE: (id: string) => `posts/${id}/like`,
  POSTS_COMMENTS: (id: string) => `posts/${id}/comments`,
  //SUBSCRIBE
  SUBSCRIBER_PLANS: 'subscriberPlans',
}
