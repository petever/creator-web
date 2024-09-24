import ky from '@toss/ky'
import { auth } from '@/auth'
import { getSession } from 'next-auth/react'

export const apiService = ky.create({
  prefixUrl: 'http://182.227.155.8:9090',
  headers: { 'Content-Type': 'application/json' },
  hooks: {
    beforeRequest: [
      async (request: Request) => {
        if (typeof window === 'undefined') {
          const session = await auth()
          request.headers.set('Authorization', `Bearer ${session?.accessToken}`)
        }
        const session = await getSession()
        request.headers.set('Authorization', `Bearer ${session?.accessToken}`)
      },
    ],
  },
})
