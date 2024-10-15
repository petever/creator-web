import { getServerProfile } from '@/entities/user/api/getServerProfile'
import { EditProfileForm } from '@/widgets/user/ui/EditProfileForm'

const EditProfilePage = async () => {
  const userProfile = await getServerProfile()
  return <EditProfileForm userProfile={userProfile} />
}

export default EditProfilePage
