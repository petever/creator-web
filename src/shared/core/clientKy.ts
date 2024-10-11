import { getSession } from 'next-auth/react'
import ky from '@toss/ky'

export const clientKy = ky.create({
  prefixUrl: 'http://182.227.155.8:9090',
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
