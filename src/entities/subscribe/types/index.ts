import { Owner } from '@/entities/feeds/types'

export interface SubscribePlan {
  id: string
  owner: Owner
  name: string
  description: string
  price: number | string
  duration: number
  unit: string
}
