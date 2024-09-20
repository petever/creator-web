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
