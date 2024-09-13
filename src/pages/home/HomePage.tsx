'use client'

import { Grid } from '@mantine/core'
import classes from './styles.module.css'
import { Contents } from '@/pages/home/Contents'
import { RecommendList } from '@/shared/RecommentList/ui/RecommendList'

const HomePage = () => {
  return (
    <div className={classes.wrapper}>
      <Grid>
        <Contents />
        <RecommendList span={3} />
      </Grid>
    </div>
  )
}

export default HomePage
