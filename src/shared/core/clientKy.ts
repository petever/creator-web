import { getSession } from 'next-auth/react'
import ky from '@toss/ky'

export const clientKy = ky.create({
  prefixUrl: 'http://182.227.155.8:9090',
  headers: { 'Content-Type': 'application/json' },
  hooks: {
    beforeRequest: [
      async (request: Request) => {
        const session = await getSession()
        request.headers.set('Authorization', `Bearer ${session?.accessToken}`)
      },
    ],
  },
})
