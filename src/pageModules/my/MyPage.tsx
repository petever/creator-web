import ContentTabs from '@/pageModules/userDetail/ui/ContentTabs'
import { getServerProfile } from '@/entities/user/api/getServerProfile'
import { ProfileTopSection } from '@/features/users/ui/ProfileTopSection'
import { PAGE } from '@/shared/constants/page'
import Link from 'next/link'
import classes from './styles.module.css'

const MyPage = async () => {
  const initialData = await getServerProfile()

  return (
    <>
      <ProfileTopSection
        userProfile={initialData}
        render={
          <div className={classes.linkButton}>
            <Link href={PAGE.SETTINGS_PROFILE}>프로필 편집</Link>
          </div>
        }
      />
      {/*<ContentTabs />*/}
    </>
  )
}

export default MyPage
