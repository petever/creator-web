import { alova } from '@/shared/model/alova'

export const getRecommend = (): any => {
  return alova.Get(`/recommend`)
}
