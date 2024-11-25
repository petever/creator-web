import { UserProfile } from '@/entities/user/types'
import { Avatar, AvatarImage } from '@/shared/ui/avatar'

interface ProfileProps {
  profile: UserProfile
}

export const Profile = ({ profile }: ProfileProps) => {
  if (!profile) return null

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center justify-between gap-2">
        <Avatar>
          <AvatarImage src={profile.picture as string} />
        </Avatar>
        <div className="flex-1">
          <p className="truncate w-full font-medium">{profile.displayName}</p>
          <p className="truncate w-full text-sm text-gray-400">@{profile.username}</p>
        </div>
      </div>
    </div>
  )
}
