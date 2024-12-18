export const PAGE = {
  HOME: '/home',
  MEMBER_PAGE: (name: string) => `/${name}`,
  EXPLORE: '/explore',
  NOTIFICATIONS: '/notifications',

  // FEEDS
  FEEDS: (id: string) => `/feeds/${id}`,

  //auth
  LOGIN: '/login',
  SIGNUP: '/signup',

  // settings
  SETTINGS: '/settings',
  SETTINGS_PROFILE: '/settings/profile',
  SETTINGS_PASSWORD: '/settings/password',
  SETTINGS_NOTIFICATION: '/settings/notification',
  SETTINGS_NOTIFICATION_EMAIL: '/settings/notification/email',
  SETTINGS_CREATOR: '/settings/creator',
  SETTINGS_SUBSCRIBE: '/settings/subscribe',
}
