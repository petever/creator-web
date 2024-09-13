'use client'

import { Grid } from '@mantine/core'
import classes from './styles.module.css'
import { Contents } from '@/pageModules/home/Contents'
import { RecommendList } from '@/shared/RecommentList/ui/RecommendList'
import { useSession } from 'next-auth/react'
import React from 'react'

const HomePage = () => {
  console.log(useSession())
  return (
    <div className={classes.wrapper}>
      {/*<Grid>*/}
      {/*  <Contents />*/}
      {/*  <RecommendList span={3} />*/}
      {/*</Grid>*/}1
    </div>
  )
}

export default HomePage
