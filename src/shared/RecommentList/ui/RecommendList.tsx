import { Grid, Title } from '@mantine/core'
import classes from './styles.module.css'
import { getRecommend } from '@/shared/RecommentList/api/getRecommend'
import { useRequest } from 'alova/client'
import { Loading } from '@/shared/RecommentList/ui/Loading'
import { Profile } from '@/features'
import { Recommend } from '@/shared/RecommentList/types'
import {useMediaQuery} from "@mantine/hooks";

interface RecommendListProps {
  span?: number
}

export const RecommendList = ({ span = 1 }: RecommendListProps) => {
  const isMobile = useMediaQuery('(max-width: 760px)')
  const { loading, data } = useRequest(getRecommend())

  if(isMobile) return null

  if (loading) {
    return <Loading />
  }

  return (
    <div>
      <div className={classes.wrapper}>
        <Title order={4} className={classes.title}>
          회원님을 위한 추천
        </Title>
        {data?.map((recommend: Recommend) => {
          return (
            <div className={classes.recommend}>
              <Profile
                key={`recommend_${recommend.id}`}
                profile={recommend}
                isSubscribed
                size="sm"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
