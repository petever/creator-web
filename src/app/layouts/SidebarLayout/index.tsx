'use client'

import '@mantine/core/styles.css'
import { Sidebar } from '@/widgets/Sidebar/ui'
import classes from './styles.module.css'
import { ThemeToggleButton } from '@/widgets'
import Header from '@/features/Header'

export function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={classes.wrap}>
      <ThemeToggleButton />
      <Sidebar />
      <div className={classes.container}>{children}</div>
    </div>
  )
}
