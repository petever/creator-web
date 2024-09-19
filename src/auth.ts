import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { login } from '@/features/users/api/login'
import authConfig from '@/auth.config'

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  callbacks: {
    async signIn({ user, account }) {
      const payload = {
        socialId: user.id as string,
        username: user.name,
        picture: user.image,
        token: account?.access_token,
        socialType: 'GOOGLE',
      }
      const data = await login(payload)
      return !!data.accessToken
    },

    async jwt({ token, account, user }) {
      if (account?.id_token) {
        token.accessToken = account?.id_token
      }
      return token
    },
    async session({ session, token }: { session: any; token: any }) {
      session.user.accessToken = token.accessToken
      return session
    },
    // async redirect({ baseUrl }) {
    //   return `${baseUrl}/home`
    // },
  },
})
