import HomePage from '@/pageModules/home/HomePage'
import { getFeeds } from '@/entities/feeds/api/getFeeds'
import {RecommendList} from "@/shared/RecommentList/ui/RecommendList";
import classes from './styles.module.css'

export default async function Home() {
  const initialFeeds = await getFeeds()
  return (
    <div className={classes.wrapper}>
      <HomePage initialFeeds={initialFeeds} />
      <RecommendList/>
    </div>
  )
}
