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
      console.log(payload, 'payload')
      // console.log(11111121321313221321)
      // const data = await login(payload)
      const data = await fetch('http://localhost:3000/api/sign-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      console.log(await data.json(), 'data')
      return true
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
