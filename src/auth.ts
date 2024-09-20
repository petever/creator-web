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
  callbacks: {
    async signIn({ user, account, profile }) {
      const payload = {
        socialId: profile?.sub as string,
        username: user.name,
        picture: user.image,
        token: account?.access_token,
        socialType: 'GOOGLE',
      }

      const data = await login(payload)

      return !!data.accessToken
    },

    async jwt({ token, account }) {
      if (account?.id_token) {
        token.accessToken = account?.id_token
      }
      return token
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string
      return session
    },
    async redirect({ baseUrl }) {
      return `${baseUrl}/home`
    },
  },
})
