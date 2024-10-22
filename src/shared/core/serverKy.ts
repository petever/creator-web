import ky from '@toss/ky'
import { auth } from '@/auth'
import { BASE_URL } from '@/shared/constants/apiURL'

export const serverKy = ky.create({
  prefixUrl: BASE_URL,
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
