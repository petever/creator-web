import Profile from '@/widgets/Profile'
import { getMy } from '@/entities/user/api/getMy'

const MyPage = async () => {
  const result = await getMy()

  return (
    <>
      <Profile />
    </>
  )
}

export default MyPage
