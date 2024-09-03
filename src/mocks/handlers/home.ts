import { http, HttpResponse } from 'msw'
import { postsMockData } from '../model'

export const postsHandler = [
  http.get('/posts', () => {
    return HttpResponse.json(postsMockData)
  }),
]
