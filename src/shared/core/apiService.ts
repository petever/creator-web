import ky from '@toss/ky'

export const apiService = ky.create({
  prefixUrl: 'http://182.227.155.8:9090',
  headers: { 'Content-Type': 'application/json' },
})
