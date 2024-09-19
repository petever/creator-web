import { Grid, Title } from '@mantine/core'
import classes from './styles.module.css'
import { useRequest } from 'alova/client'
import { Loading } from '@/shared/RecommentList/ui/Loading'
import { Profile } from '@/features'
import { Recommend } from '@/shared/RecommentList/types'

interface RecommendListProps {
  span?: number
}

export const RecommendList = ({ span = 1 }: RecommendListProps) => {
  return (
    <Grid.Col span={span}>
      <div className={classes.wrapper}>
        <Title order={4} className={classes.title}>
          회원님을 위한 추천
        </Title>
      </div>
    </Grid.Col>
  )
}
