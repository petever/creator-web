export interface LoginRequest {
  socialId: string
  socialType?: string
  picture?: string | null
  username?: string | null
  token?: string
}

export interface LoginResponse {
  id: string
  username: string
  picture: string
  accessToken: string
}

