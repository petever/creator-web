import { alova } from '@/shared/model/alova'

export const updateFavoritePosting = (id: string): any => {
  return alova.Post(`/feed/favorite/${id}`)
}
