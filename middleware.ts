import NextAuth from 'next-auth'
import { NextRequest, NextResponse } from 'next/server'
import authConfig from '@/auth.config'
import { auth as userSession } from '@/auth'
import { PAGE } from '@/shared/constants/page'

const { auth } = NextAuth(authConfig)
export default auth(async function middleware(req: NextRequest) {
  const session = await userSession()
  if (!session?.accessToken) NextResponse.redirect(new URL(PAGE.LOGIN, req.url))
})

export const config = {
  matcher: ['/settings/:path*'],
}
