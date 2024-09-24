import HomePage from '@/pageModules/home/HomePage'
import { getFeeds } from '@/entities/feeds/api/getFeeds'

export default async function Home() {
  const initialFeeds = await getFeeds()
  return (
      <HomePage initialFeeds={initialFeeds} />
  )
}
