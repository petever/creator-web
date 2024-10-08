'use client'
import { Button, Container, Drawer, Flex, Input } from '@mantine/core'
import { Profile } from '@/features'
import classes from '@/shared/Sidebar/ui/styles.module.css'
import {DUMMY_PROFILE} from "@/shared/model";
import {useMediaQuery} from "@mantine/hooks";

interface SearchMemberProps {
  opened: boolean
  onClose: () => void
}

export const SearchMember = ({ opened, onClose }: SearchMemberProps) => {

  return (
    <Drawer opened={opened} onClose={onClose} className={classes.drawerWrapper} withOverlay={false} >
      <Container>
        <Input />
        <Profile
          profile={DUMMY_PROFILE}
          size="sm"
        />
      </Container>
    </Drawer>
  )
}
