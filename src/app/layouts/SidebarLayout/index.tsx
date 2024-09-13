'use client'

import '@mantine/core/styles.css'
import { Sidebar } from '@/widgets/Sidebar/ui'
import classes from './styles.module.css'
import { ThemeToggleButton } from '@/widgets'
import { Grid } from '@mantine/core'
import { RecommendList } from '@/shared/RecommentList/ui/RecommendList'

export function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={classes.wrap}>
      <ThemeToggleButton />
      <Sidebar />
      <div className={classes.container}>{children}</div>
      <Grid>
        <RecommendList span={3} />
      </Grid>
    </div>
  )
}
