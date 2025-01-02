import { UserProfile } from '@/entities/user/types'
import { Avatar, AvatarImage } from '@/shared/ui/avatar'
import { User } from 'lucide-react'

interface ProfileProps {
  profile: UserProfile
}

export const Profile = ({ profile }: ProfileProps) => {
  if (!profile) return null

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center justify-between gap-2">
        {!profile.picture ? (
          <div className="flex justify-center  items-center bg-gray-300 rounded-full w-10 h-10">
            <User />
          </div>
        ) : (
          <Avatar>
            <AvatarImage src={profile.picture as string} width={60} height={60} />
          </Avatar>
        )}
        <div className="flex-1">
          <p className="truncate w-full font-medium">{profile.displayName}</p>
          <p className="truncate w-full text-sm text-gray-400">@{profile.username}</p>
        </div>
      </div>
    </div>
  )
}
