import HomePage from '@/pageModules/home/HomePage'
import { getServerFeeds } from '@/entities/feeds/api/getServerFeeds'
import { getServerFeedRecommendUsers } from '@/shared/RecommentList/api/getServerFeedRecommendUsers'

interface HomeProps {}

export default async function Home({}: HomeProps) {
  const initialFeeds = await getServerFeeds()
  const recommends = await getServerFeedRecommendUsers()
  return <HomePage initialFeeds={initialFeeds} recommends={recommends} />
}
