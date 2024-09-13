import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { login } from '@/features/users/api/login'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      const payload = {
        socialId: user.id,
        username: user.name,
        picture: user.image,
        token: account?.access_token,
        socialType: 'GOOGLE',
      }
      const data = await login(payload)
      return !!data.accessToken
    },

    async jwt({ token, account, user }) {
      if (account && user) {
        token.accessToken = account?.id_token
      }
      return token
    },
    async session({ session, token }: { session: any; token: any }) {
      if (token) {
        session.user.accessToken = token.accessToken
      }
      return session
    },
    async redirect({ baseUrl }) {
      return `${baseUrl}/home`
    },
  },
})

export { handler as GET, handler as POST }
