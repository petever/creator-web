'use client'

import { Profile } from '@/features'
import { useDisclosure } from '@mantine/hooks'
import {UserProfile} from "@/entities/user/types";
import {PAGE} from "@/shared/constants/page";
import {useRouter} from "next/navigation";

interface PostingHeaderProps {
  profile: UserProfile
}

export const PostingHeader = ({ profile }: PostingHeaderProps) => {
  const [opened, { open, close }] = useDisclosure(false)

  const handleDetailOpen = () => {
    open()
  }

  const router = useRouter()

  const goToMemberPage = (name : string) => {
    router.push(PAGE.MEMBER_PAGE(name))
  }

  return (
    <div className={'flex justify-between'}>
      <Profile profile={profile} size="md" onClick={() => goToMemberPage(profile.username)}/>
    </div>
  )
}
