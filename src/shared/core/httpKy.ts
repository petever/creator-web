import ky from '@toss/ky'
import { BASE_URL } from '@/shared/constants/apiURL'
import { auth } from '@/auth'
import { getSession } from 'next-auth/react'

export const createKy = (isServer: boolean) => {
  return ky.create({
    prefixUrl: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    hooks: {
      beforeRequest: [
        async (request: Request) => {
          const session = isServer ? await auth() : await getSession()
          request.headers.set('Authorization', `Bearer ${session?.accessToken}`)
        },
      ],
    },
  })
}

export const httpKy = createKy(typeof window === 'undefined')
