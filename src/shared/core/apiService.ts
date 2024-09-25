import ky from '@toss/ky'
import { auth } from '@/auth'

export const apiService = ky.create({
  prefixUrl: 'http://182.227.155.8:9090',
  headers: { 'Content-Type': 'application/json' },
  hooks: {
    beforeRequest: [
      async (request: Request) => {
        const session = await auth()
        request.headers.set('Authorization', `Bearer ${session?.accessToken}`)
      },
    ],
  },
})
