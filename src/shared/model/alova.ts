import { createAlova } from 'alova'
import adapterFetch from 'alova/fetch'
import ReactHook from 'alova/react'
import { getServerSession } from 'next-auth'
import { mockAdapter } from '@/shared/model/mock'
import { getSession } from 'next-auth/react'

export const alova = createAlova({
  baseURL: 'http://rumor-lab.com',
  statesHook: ReactHook,
  requestAdapter: mockAdapter,
  responded: async (response) => {
    if (response.status !== 200) {
      throw new Error(`[${response.status}]${response.statusText}`)
    }
    return await response.json()
  },
})
