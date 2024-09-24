'use client'

import '@mantine/core/styles.css'
import { Sidebar } from '@/widgets/Sidebar/ui'
import classes from './styles.module.css'
import { ThemeToggleButton } from '@/widgets'
import Header from '@/features/Header'
import {RecommendList} from "@/shared/RecommentList/ui/RecommendList";

interface SidebarLayoutProps {
  title ?: string
  children : React.ReactNode
}

export function SidebarLayout({ title, children }: SidebarLayoutProps) {
  return (
    <div className={classes.wrap}>
      <ThemeToggleButton />
      <Sidebar />
      <div className={classes.container}>
        <div className={classes.contentWrapper}>
          {title && <Header text={title} />}
          {children}
        </div>
        <RecommendList/>
      </div>
    </div>
  )
}
