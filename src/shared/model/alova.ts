import { createAlova } from 'alova'
import adapterFetch from 'alova/fetch'
import ReactHook from 'alova/react'
import { getServerSession } from 'next-auth'

export const alova = createAlova({
  baseURL: 'http://rumor-lab.com',
  beforeRequest: async (method) => {
    const session: any = await getServerSession()

    console.log('process.env.11111111111', process.env.NODE_ENV)
    method.config.headers.Authorization = `Bearer ${session?.user?.accessToken}`
  },
  statesHook: ReactHook,
  requestAdapter: adapterFetch(),
  responded: async (response) => {
    if (response.status !== 200) {
      throw new Error(`[${response.status}]${response.statusText}`)
    }
    return await response.json()
  },
})
