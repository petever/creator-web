import NextAuth from 'next-auth'
import authConfig from '@/auth.config'
import { login } from '@/features/users/api/login'

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      const payload = {
        socialId: profile?.sub as string,
        username: user.name,
        email: user.email,
        picture: user.image,
        token: account?.access_token,
        socialType: 'GOOGLE',
      }

      const data = await login(payload)
      user.id = data.id
      user.accessToken = data.accessToken
      user.refreshToken = data.refreshToken
      return !!data
    },

    async jwt({ token, account, profile, user }) {
      const currentTime = Math.floor(Date.now() / 1000)

      if (user) {
        token.id = user.id
        token.accessToken = user.accessToken
        token.refreshToken = user.refreshToken
      }

      // if (currentTime > token?.exp) {
      //   try {
      //     const result = await reissue(token.refreshToken)
      //     return {
      //       ...token,
      //       accessToken: result.accessToken,
      //       refreshToken: result.refreshToken,
      //     }
      //   } catch (error) {
      //     console.log(error)
      //   }
      // }

      return token
    },
    async session({ session, token }) {
      session.user.id = token.id as string
      session.accessToken = token.accessToken as string
      return session
    },
    async redirect({ baseUrl, url }) {
      if (url.includes('/settings')) return `${baseUrl}`
      return `${baseUrl}/home`
    },
  },
})
