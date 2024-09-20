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
        picture: user.image,
        token: account?.access_token,
        socialType: 'GOOGLE',
      }

      const data = await login(payload)
      user.accessToken = data.accessToken
      return !!data
    },

    async jwt({ token, account, profile, user }) {
      if (user) {
        token.accessToken = user.accessToken
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
