import { UserProfile } from '@/entities/user/types'
import {Button} from "@/shared/ui/button";
import {Avatar, AvatarImage} from "@/shared/ui/avatar";
import {AvatarFallback} from "@radix-ui/react-avatar";

interface ProfileProps {
  profile: UserProfile
  isSubscribed ?: boolean
  onClick?: () => void
}

export const Profile = ({ profile, isSubscribed, onClick }: ProfileProps) => {
  if (!profile) return null

  return (
    <li className='align-center'>
      <div className='flex justify-between'>
        <Button variant="ghost" className='flex' onClick={onClick}>
          <Avatar>
            <AvatarImage src={profile.picture as string}/>
          </Avatar>
          <div className='flex flex-col items-start'>
            <p>{profile.displayName}</p>
            <p>@{profile.username}</p>
          </div>
        </Button>
        {isSubscribed && <Button>구독</Button>}
      </div>
    </li>
  )
}
