import authConfig from './auth.config'
import NextAuth from 'next-auth'
import { createI18nMiddleware } from 'next-international/middleware'
import { NextRequest } from 'next/server'

const { auth } = NextAuth(authConfig)
export default auth(async function middleware(req: NextRequest) {
  // Your custom middleware logic goes here
})

const I18nMiddleware = createI18nMiddleware({
  locales: ['ko', 'en'],
  defaultLocale: 'ko'
})



export const config = {
  matcher: ['/login', '/home'],
}

export function middleware(request: NextRequest) {
  return I18nMiddleware(request)
}
