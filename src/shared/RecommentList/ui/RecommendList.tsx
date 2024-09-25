'use client'
import { Title } from '@mantine/core'
import classes from './styles.module.css'
import { useMediaQuery } from '@mantine/hooks'

interface RecommendListProps {
  span?: number
  isRecommend?: boolean
}

export const RecommendList = ({ span = 1, isRecommend }: RecommendListProps) => {
  const isPcWidth = useMediaQuery('(min-width: 1000px)')
  if (!isRecommend) return null
  if (!isPcWidth) return null

  return (
    <div className={classes.wrapper}>
      <Title order={4} className={classes.title}>
        회원님을 위한 추천
      </Title>
    </div>
  )
}
