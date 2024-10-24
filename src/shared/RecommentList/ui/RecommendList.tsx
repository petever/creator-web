'use client'
import { Title } from '@mantine/core'
import classes from './styles.module.css'
import { useMediaQuery } from '@mantine/hooks'
import { UserProfile } from '@/entities/user/types'
import { Profile } from '@/features'
import { useRouter } from 'next/navigation'
import { PAGE } from '@/shared/constants/page'

interface RecommendListProps {
  recommends: UserProfile[]
}

export const RecommendList = ({ recommends }: RecommendListProps) => {
  const isPcWidth = useMediaQuery('(min-width: 1200px)')

  const router = useRouter()

  const goToMemberPage = (name: string) => {
    router.push(PAGE.MEMBER_PAGE(name))
  }

  if (!isPcWidth) return null

  return (
    <div className={classes.wrapper}>
      <Title order={4} className={classes.title}>
        회원님을 위한 추천
      </Title>
      <ul className={classes.recommend}>
        {recommends.map((user) => {
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
