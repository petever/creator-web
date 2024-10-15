'use client'
import { Button, Title } from '@mantine/core'
import classes from './styles.module.css'
import { useMediaQuery } from '@mantine/hooks'
import { UserProfile } from '@/entities/user/types'
import { Profile } from '@/features'
import SubscribeButton from '@/features/users/ui/SubscribeButton'

interface RecommendListProps {
  recommendList: UserProfile[]
  isRecommend?: boolean
}

export const RecommendList = ({ recommendList, isRecommend }: RecommendListProps) => {
  const isPcWidth = useMediaQuery('(min-width: 1000px)')
  if (!isPcWidth) return null

  return (
    <div className={classes.wrapper}>
      <Title order={4} className={classes.title}>
        회원님을 위한 추천
      </Title>
      <ul className={classes.recommend}>
        {recommendList.map((user) => {
          return (
            <li key={user.id}>
              <Profile profile={user} size={'lg'} isSubscribed />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
