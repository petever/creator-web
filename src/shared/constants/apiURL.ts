export const BASE_URL = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL

export const API_URL = {
  USERS: 'users',
  USERS_LOGIN: 'users/login',
  USERS_SIGNUP: 'users/signup',
  USERS_PROFILE: 'users/profile',
  USERS_USER: (username?: string) => `users/${username}`,
  USERS_PASSWORD_RESET: 'users/password-reset',
  FOLLOW: (id: string) => `followings/${id}`,
  REISSUE: 'reissue',
  //FEED
  POSTS: 'posts',
  FEED_LIKE_MEMBERS: (id: string) => `posts/${id}/likes`,
  FEEDS: 'posts',
  FEED_DETAIL: (id: string) => `posts/${id}`,
  FEEDS_COMMENT: (id: string) => `posts/${id}/comments`,
  FEEDS_RECOMMEND_USERS: 'posts/recommendUsers',
  FEED_LIKE: (id: string) => `posts/${id}/like`,
  POSTS_COMMENTS: (id: string) => `posts/${id}/comments`,
  COMMENT_LIKE: (id: string, commentId: string) => `posts/${id}/comments/${commentId}/like`,
  //SUBSCRIBE
  SUBSCRIBERS: 'subscribers',
  SUBSCRIBER_PLANS: 'subscriberPlans',
  //CREATOR
  CREATOR: 'creators',
  CREATOR_APPLY: 'creators/apply',
  //NOTIFICATIONS
  NOTIFICATIONS: 'notifications',
  //SEARCH
  SEARCH: 'search',
  SEARCH_TRENDS: `search/trends`,
}
