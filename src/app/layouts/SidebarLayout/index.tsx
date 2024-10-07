import classes from './styles.module.css'
import { ThemeToggleButton } from '@/widgets'
import Header from '@/features/Header'
import { RecommendList } from '@/shared/RecommentList/ui/RecommendList'
import {Sidebar} from "@/shared";

interface SidebarLayoutProps {
  title?: string
  children: React.ReactNode
  isRecommend?: boolean
}

export function SidebarLayout({ title, children, isRecommend }: SidebarLayoutProps) {
  return (
    <div className={classes.wrap}>
      <ThemeToggleButton />
      <Sidebar />
      <div className={classes.container}>
        <div className={classes.contentWrapper}>
          {title && <Header text={title} />}
          {children}
        </div>
        <div className={classes.recommend}>
          <RecommendList isRecommend={isRecommend} />
        </div>
      </div>
    </div>
  )
}
