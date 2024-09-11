import {Grid, Title} from '@mantine/core'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import classes from "@/shared/RecommentList/ui/styles.module.css";
export const Loading = () => {
  return (
    <div className={classes.wrapper}>
      <Title order={4} className={classes.title}>회원님을 위한 추천</Title>
      <Skeleton/>
    </div>
  )
}
