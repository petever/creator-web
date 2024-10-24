'use client'
import classes from './styles.module.css'
import { Sidebar } from '@/shared'

interface SidebarLayoutProps {
  children: React.ReactNode
}

export async function SidebarLayout({ children }: SidebarLayoutProps) {
  return (
    <div className={classes.wrap}>
      <Sidebar />
      <div className={classes.container}>{children}</div>
    </div>
  )
}
