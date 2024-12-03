export interface LoginRequest {
  socialId: string
  socialType?: string
  picture?: string | null
  username?: string | null
  email?: string | null
  token?: string
}

export interface LoginResponse {
  id: string
  username: string
  picture: string
  accessToken: string
}

export interface SignupRequest {
  username: string
  password: string
  email: string
}