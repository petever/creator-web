'use client'

import '@mantine/core/styles.css'
import { Sidebar } from '@/widgets/Sidebar/ui'
import classes from './styles.module.css'
import { ThemeToggleButton } from '@/widgets'

export function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={classes.wrap}>
      <ThemeToggleButton />
      <Sidebar />
      {children}
    </div>
  )
}
