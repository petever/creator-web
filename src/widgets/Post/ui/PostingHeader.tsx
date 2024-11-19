'use client'

import { Profile } from '@/features'
import { UserProfile } from '@/entities/user/types'
import { PAGE } from '@/shared/constants/page'
import { useRouter } from 'next/navigation'
import { Switch } from '@mantine/core'

interface PostingHeaderProps {
  isPrivate: boolean
  onPrivateChange: () => void
  profile: UserProfile
}

export const PostingHeader = ({ profile, isPrivate, onPrivateChange }: PostingHeaderProps) => {
  const router = useRouter()

  const goToMemberPage = (name: string) => {
    router.push(PAGE.MEMBER_PAGE(name))
  }

  return (
    <div className={'flex justify-between p-4'}>
      <Profile profile={profile} size="md" onClick={() => goToMemberPage(profile.username)} />

      {/* TODO : 개발용 */}
      <Switch
        label="비공개"
        checked={isPrivate}
        onChange={(event) => onPrivateChange(event.currentTarget.checked)}
      />
    </div>
  )
}
