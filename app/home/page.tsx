import HomePage from '@/pageModules/home/HomePage'
import { getServerFeeds } from '@/entities/feeds/api/getServerFeeds'

interface HomeProps {
  params : {
    userName ?: string
  }
}

export default async function Home({params} : HomeProps) {
  const {userName} = params

  const initialFeeds = await getServerFeeds(userName)
  return <HomePage initialFeeds={initialFeeds} userName={userName}/>
}
