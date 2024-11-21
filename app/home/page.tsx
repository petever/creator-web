import HomePage from '@/pageModules/home/HomePage'
import { getServerFeeds } from '@/entities/feeds/api/getServerFeeds'
import { getFeedRecommendUsers } from '@/shared/RecommentList/api/getFeedRecommendUsers'

interface HomeProps {}

export default async function Home({}: HomeProps) {
  const initialFeeds = await getServerFeeds()
  const recommends = await getFeedRecommendUsers()

  return <HomePage initialFeeds={initialFeeds} recommends={recommends} />
}
