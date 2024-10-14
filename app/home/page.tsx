import HomePage from '@/pageModules/home/HomePage'
import { getServerFeeds } from '@/entities/feeds/api/getServerFeeds'

interface HomeProps {}

export default async function Home({}: HomeProps) {
  const initialFeeds = await getServerFeeds()
  return <HomePage initialFeeds={initialFeeds} />
}
