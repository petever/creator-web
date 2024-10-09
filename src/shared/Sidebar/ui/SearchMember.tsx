'use client'
import { Button, Container, Drawer, Flex, Input } from '@mantine/core'
import { Profile } from '@/features'
import classes from '@/shared/Sidebar/ui/styles.module.css'
import { DUMMY_PROFILE } from '@/shared/model'
import { UserProfile } from '@/entities/user/types'
import { useRouter } from 'next/navigation'

interface SearchMemberProps {
  opened: boolean
  onClose: () => void
}

export const SearchMember = ({ opened, onClose }: SearchMemberProps) => {
  const router = useRouter()
  const handleRouteMemberPage = (profile: UserProfile) => {
    router.push(`/${profile.displayName}`)
  }

  return (
    <Drawer opened={opened} onClose={onClose} className={classes.drawerWrapper} withOverlay={false}>
      <Container>
        <Input />
        <Profile
          profile={DUMMY_PROFILE}
          size="sm"
          onClick={() => handleRouteMemberPage(DUMMY_PROFILE)}
        />
      </Container>
    </Drawer>
  )
}
