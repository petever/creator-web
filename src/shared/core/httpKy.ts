import ky from '@toss/ky'
import { BASE_URL } from '@/shared/constants/apiURL'
import { getSession } from 'next-auth/react'

export const createKy = (isServer: boolean) => {
  return ky.create({
    prefixUrl: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    hooks: {
      beforeRequest: [
        async (request: Request) => {
          let session = null
          if (isServer) {
            const { auth } = await import('@/auth')
            session = await auth()
            return request.headers.set('Authorization', `Bearer ${session?.accessToken}`)
          }
          const { getSession } = await import('next-auth/react')
          session = await getSession()
          request.headers.set('Authorization', `Bearer ${session?.accessToken}`)
        },
      ],
    },
  })
}

export const httpKy = createKy(typeof window === 'undefined')
