import { EditProfileForm } from '@/widgets/user/ui/EditProfileForm'
import { getProfile } from '@/entities/user/api/getProfile'

const EditProfilePage = async () => {
  const userProfile = await getProfile()
  return <EditProfileForm userProfile={userProfile} />
}

export default EditProfilePage
