import { SubscribePlan } from '@/entities/subscribe/types'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/shared/ui/card'
import { Check } from 'lucide-react'
import { Button } from '@/shared/ui/button'
import parse from 'html-react-parser'
import SubscribeCardMenu from '@/features/subscribe/ui/SubscribeCardMenu'
import { Badge } from '@/shared/ui/badge'
import { formatPrice } from '@/shared/util/price'
import { useToast } from '@/shared/hooks/use-toast'

interface SubscribeCardProps {
  plan: SubscribePlan
  isCreator?: boolean
  isSubscribed?: boolean
  hasMembership?: boolean
  onClick?: (id: string) => void
}

const SubscribeCard = ({
  plan,
  isCreator,
  hasMembership,
  isSubscribed,
  onClick,
}: SubscribeCardProps) => {
  const { toast } = useToast()
  const price = `${formatPrice(plan.price)} / 월`

  const handleClick = () => {
    if (!isSubscribed && hasMembership) {
      return toast({
        title: '구독 중인 맴버십이 있습니다. 해지 후 구독해주세요.',
        variant: 'destructive',
      })
    }
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
          <Button
            className="w-full"
            variant={isSubscribed ? 'outline' : 'default'}
            onClick={handleClick}
          >
            <Check /> {isSubscribed ? '구독해지' : '구독하기'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default SubscribeCard
