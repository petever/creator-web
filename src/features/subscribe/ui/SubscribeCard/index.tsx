import { SubscribePlan } from '@/entities/subscribe/types'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/shared/ui/card'
import { Check } from 'lucide-react'
import { Button } from '@/shared/ui/button'
import parse from 'html-react-parser'
import SubscribeCardMenu from '@/features/subscribe/ui/SubscribeCardMenu'
import { Badge } from '@/shared/ui/badge'
import { formatPrice } from '@/shared/util/price'

interface SubscribeCardProps {
  plan: SubscribePlan
  isCreator?: boolean
  onClick?: (id: string) => void
}

const SubscribeCard = ({ plan, isCreator, onClick }: SubscribeCardProps) => {
  const price = `${formatPrice(plan.price)} / 월`

  const handleClick = () => {
    if (!onClick) return
    onClick(plan.id)
  }

  return (
    <div>
      <Card>
        <CardHeader className="flex-row items-center justify-between">
          <CardTitle className="text-xl">{plan.name}</CardTitle>
          <div className="flex items-center">
            <Badge variant="secondary" className="text-base">
              {price}
            </Badge>
            <SubscribeCardMenu isCreator={isCreator} plan={plan} />
          </div>
        </CardHeader>
        <CardContent className="tiptap">{parse(plan.description)}</CardContent>
        <CardFooter>
          <Button className="w-full" disabled={isCreator} onClick={handleClick}>
            <Check /> 구독하기
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default SubscribeCard
