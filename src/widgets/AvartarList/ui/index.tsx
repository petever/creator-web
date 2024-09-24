import { Avatars } from '../../types'
import { Profile } from '@/features'
import { Carousel } from '@mantine/carousel'
import '@mantine/carousel/styles.css';

interface AvatarListProps {
  avatars: Avatars[]
  maxLength?: number
}

export const AvatarList = ({ avatars, maxLength }: AvatarListProps) => {
  if (!avatars) return null

  return (
    <Carousel withIndicators>
      {avatars?.map((avatar: Avatars, avatarIndex) => {
        return (
          <Carousel.Slide key={`recommend_${avatarIndex}`}>
            <Profile profile={avatar} size="sm" />
          </Carousel.Slide>
        )
      })}
    </Carousel>
  )
}
