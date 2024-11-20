import { Owner } from '@/shared/types'

export interface SubscribePlan {
  id: string
  owner: Owner
  name: string
  description: string
  price: number | string
  duration: number
  unit: string
}
