import { EditProfileForm } from '@/features/users/ui/EditProfileForm'
import { getServerProfile } from '@/entities/user/api/getServerProfile'

const EditProfilePage = async () => {
  const userProfile = await getServerProfile()
  return (
    <div>
      <EditProfileForm userProfile={userProfile} />
    </div>
  )
}

export default EditProfilePage
