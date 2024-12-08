'use client'

import { Profile } from '@/features'
import { UserProfile } from '@/entities/user/types'
import Link from 'next/link'
import { PAGE } from '@/shared/constants/page'
import { getDateFormat } from '@/shared/lib'

interface PostingHeaderProps {
  profile: UserProfile
  createdAt: Date
}

export const PostingHeader = ({ profile, createdAt }: PostingHeaderProps) => {
  return (
    <div className={'flex justify-between p-3 items-center mb-2'}>
      <Link href={PAGE.MEMBER_PAGE(profile.username)}>
        <Profile profile={profile} />
      </Link>
      <span className="text-sm text-gray-500">{getDateFormat(createdAt)}</span>
    </div>
  )
}
