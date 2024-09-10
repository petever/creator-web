import { createAlova } from 'alova'
import fetchAdapter from 'alova/fetch'
import ReactHook from 'alova/react'
import { mockAdapter } from '@/shared/model/mock'

export const alova = createAlova({
  baseURL: 'http://rumor-lab.com',
  statesHook: ReactHook,
  requestAdapter: process.env.NODE_ENV === 'production' ? fetchAdapter() : mockAdapter,
  responded: (response) => {
    if (response.status !== 200) {
      throw new Error(`[${response.status}]${response.statusText}`)
    }
    return response.json()
  },
})
