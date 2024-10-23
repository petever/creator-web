'use client'
import { Avatar, Title } from '@mantine/core'
import classes from './styles.module.css'
import { useMediaQuery } from '@mantine/hooks'
import { UserProfile } from '@/entities/user/types'
import { Profile } from '@/features'
import { Carousel } from '@mantine/carousel'
import { useRouter } from 'next/navigation'
import { PAGE } from '@/shared/constants/page'

interface RecommendListProps {
  recommendList: UserProfile[]
  isRecommend?: boolean
}

export const RecommendList = ({ recommendList, isRecommend }: RecommendListProps) => {
  const isPcWidth = useMediaQuery('(min-width: 1200px)')
  const isTabletWidth = useMediaQuery('(min-width : 640px) and (max-width: 1200px)')

  const router = useRouter()

  const goToMemberPage = (name: string) => {
    router.push(PAGE.MEMBER_PAGE(name))
  }

  if (!isPcWidth) return null
  if (isTabletWidth) {
    return (
      <div className={classes.wrapper}>
        <Title order={4} className={classes.title}>
          회원님을 위한 추천
        </Title>
        <div className={classes.recommendSlideWrapper}>
          <Carousel
            slideSize="40px"
            slideGap="20px"
            align="start"
            withControls={false}
            className={classes.recommendSlide}
          >
            {recommendList.map((user) => {
              return (
                <Carousel.Slide key={user.id}>
                  <div className={classes.slideWrapper}>
                    <Avatar
                      size="lg"
                      src={user.picture as string}
                      onClick={() => goToMemberPage(user.displayName)}
                    />
                    <p>{user.displayName}</p>
                  </div>
                </Carousel.Slide>
              )
            })}
          </Carousel>
        </div>
      </div>
    )
  }

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
