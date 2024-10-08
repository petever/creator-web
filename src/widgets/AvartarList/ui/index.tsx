import { Avatars } from '../../types'
import { Profile } from '@/features'
import { Carousel } from '@mantine/carousel'
import {DUMMY_PROFILE} from "@/shared/model";

interface AvatarListProps {
  avatars: Avatars[]
  maxLength?: number
}

export const AvatarList = ({ avatars, maxLength }: AvatarListProps) => {
  if (!avatars) return null

  return (
    <Carousel>
      {avatars?.map((avatar: Avatars, avatarIndex) => {
        return (
          <Carousel.Slide key={`recommend_${avatarIndex}`}>
            <Profile profile={DUMMY_PROFILE} size="sm" />
          </Carousel.Slide>
        )
      })}
    </Carousel>
  )
}
