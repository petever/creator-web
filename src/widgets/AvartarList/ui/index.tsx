import { Avatars } from '../../types'
import { Profile } from '@/features'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

interface AvatarListProps {
  avatars: Avatars[]
  maxLength?: number
}

export const AvatarList = ({ avatars, maxLength }: AvatarListProps) => {
  if (!avatars) return null

  return (
    <Swiper spaceBetween={5} slidesPerView={maxLength || 3}>
      {avatars?.map((avatar: Avatars, avatarIndex) => {
        return (
          <SwiperSlide key={`recommend_${avatarIndex}`}>
            <Profile profile={avatar} size="sm" key={`avatar_${avatarIndex}`} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
