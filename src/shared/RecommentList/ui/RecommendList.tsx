import { Grid, Title } from '@mantine/core'
import classes from './styles.module.css'

interface RecommendListProps {
  span?: number
}

export const RecommendList = ({ span = 1 }: RecommendListProps) => {
  return (
    <div className={classes.wrapper}>
      <Title order={4} className={classes.title}>
        회원님을 위한 추천
      </Title>
    </div>
  )
}
