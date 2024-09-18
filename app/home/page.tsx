import HomePage from '@/pageModules/home/HomePage'
import { getFeeds } from '@/entities/feeds/api/getFeeds'

export default async function Home() {
  const result = await getFeeds()
  return <HomePage />
}
