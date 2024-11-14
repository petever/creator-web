import { formattedPriceToNumber } from '@/shared/util/price'

export const covertPayloadPlan = (plan: any) => {
  return {
    ...plan,
    price: formattedPriceToNumber(plan.price),
    duration: 1,
    unit: 'MONTHS',
  }
}
