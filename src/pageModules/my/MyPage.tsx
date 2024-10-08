import ContentTabs from '@/pageModules/userDetail/ui/ContentTabs'
import { getServerProfile } from '@/entities/user/api/getServerProfile'
import {ProfileTopSection} from "@/features/users/ui/ProfileTopSection";
import {PAGE} from "@/shared/constants/page";
import Link from "next/link";
import SubscribeButton from "@/features/users/ui/SubscribeButton";

const MyPage = async () => {
  const initialData = await getServerProfile()


  return (
    <>
      <ProfileTopSection userProfile={initialData} children={
        <Link href={PAGE.SETTINGS_PROFILE}>프로필 편집</Link>
      }/>
      <ContentTabs />
    </>
  )
}

export default MyPage
