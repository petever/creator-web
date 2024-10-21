import { SubscribePlan } from '@/entities/subscribe/types'

export type AddSubscribePlan = Omit<SubscribePlan, 'owner' | 'id'>
