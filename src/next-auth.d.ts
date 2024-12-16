import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface User {
    accessToken: string
    refreshToken: string
  }

  interface Session extends DefaultSession {
    accessToken: string
    refreshToken: string
  }
}
