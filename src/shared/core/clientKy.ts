import { getSession } from 'next-auth/react'
import ky from '@toss/ky'
import { BASE_URL } from '@/shared/constants/apiURL'

export const clientKy = ky.create({
  prefixUrl: BASE_URL,
  hooks: {
    beforeRequest: [
      async (request: Request) => {
        const session = await getSession()
        request.headers.set('Authorization', `Bearer ${session?.accessToken}`)
      },
    ],
    afterResponse: [
      async (request: Request, options: any, response: Response) => {
        // console.log('request', request)
        // console.log('options', options)
        // console.log('response', response)
      },
    ],
  },
})
