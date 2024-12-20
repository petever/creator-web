export interface UserProfile {
  id: string
  displayName: string
  username: string
  status: string
  picture: string | File
  role: string
  cover: string | File
  subscribed?: {
    postStatus: 'PUBLIC' | 'SUBSCRIBED' | 'PRIVATE' | 'BLOCK' | 'DELETED'
    planId: string
  }
  description?: string | null
}
