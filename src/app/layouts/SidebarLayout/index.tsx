import classes from './styles.module.css'
import Header from '@/features/Header'
import { RecommendList } from '@/shared/RecommentList/ui/RecommendList'
import { Sidebar } from '@/shared'
import {getServerFeedRecommendUsers} from "@/shared/RecommentList/api/getServerFeedRecommendUsers";

interface SidebarLayoutProps {
  title?: string
  children: React.ReactNode
  isRecommend?: boolean
}

export async function SidebarLayout({ title, children, isRecommend }: SidebarLayoutProps) {
  const recommendList = await getServerFeedRecommendUsers()

  return (
    <div className={classes.wrap}>
      {/*<ThemeToggleButton />*/}
      <Sidebar />
      <div className={isRecommend ? classes.container : classes.notRecommendContainer}>
        {isRecommend &&
          <div className={classes.recommend}>
            <RecommendList isRecommend={isRecommend} recommendList={recommendList}/>
          </div>
        }
        <div className={isRecommend ? classes.contentWrapper : classes.notRecommendContentWrapper}>
          {title && <Header text={title} />}
          {children}
        </div>
      </div>
    </div>
  )
}
