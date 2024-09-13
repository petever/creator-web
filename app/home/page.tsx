import HomePage from '@/pages/home/HomePage'
import { getFeeds } from '@/entities/feeds/api/getFeeds'

export default async function Home() {
  const result = await getFeeds()
  console.log('process.env.222', process.env.NODE_ENV)
  console.log(result, 'result')
  return <HomePage />
}
