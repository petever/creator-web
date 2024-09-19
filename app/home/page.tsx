import HomePage from '@/pageModules/home/HomePage'
import { getFeeds } from '@/entities/feeds/api/getFeeds'
import { RecommendList } from '@/shared/RecommentList/ui/RecommendList'

export default async function Home() {
  const result = await getFeeds()
  return (
    <>
      <HomePage />
      {/*<RecommendList span={3} />*/}
    </>
  )
}
