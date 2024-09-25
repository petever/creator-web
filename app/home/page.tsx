import HomePage from '@/pageModules/home/HomePage'
import { getServerFeeds } from '@/entities/feeds/api/getServerFeeds'

export default async function Home() {
  const initialFeeds = await getServerFeeds()
  return <HomePage initialFeeds={initialFeeds} />
}
