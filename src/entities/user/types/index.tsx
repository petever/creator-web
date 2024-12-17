export interface UserProfile {
  id: string
  displayName: string
  username: string
  status: string
  picture: string | File
  role: string
  cover: string | File
  subscribed?: {
    isSubscribed: boolean
    planId: string
  }
  description?: string
}
