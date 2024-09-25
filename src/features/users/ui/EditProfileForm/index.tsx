'use client'

import { Box, Textarea, TextInput, Avatar, Image as MatineImage, Button } from '@mantine/core'
import { UserProfile } from '@/entities/user/types'
import { useMyProfile } from '@/entities/user/hooks/useMyProfile'
import Image from 'next/image'

interface EditProfileFormProps {
  userProfile: UserProfile
}

export const EditProfileForm = ({ userProfile }: EditProfileFormProps) => {
  const { data } = useMyProfile(userProfile)
  return (
    <form>
      <MatineImage
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
        height={180}
      />
      <Box pr={16} pl={16}>
        <Avatar bg="themeColors" w={80} h={80} mt={-30} ml={16}>
          <Image src={data?.picture || ''} alt={data?.username || ''} width={80} height={80} />
        </Avatar>
        <TextInput
          withAsterisk
          label="표시 이름"
          // key={form.key('displayName')}
          // {...form.getInputProps('displayName')}
          size="lg"
          value={data?.displayName}
        />
        <TextInput
          withAsterisk
          label="사용자 이름"
          // key={form.key('userName')}
          // {...form.getInputProps('userName')}
          mt={10}
          size="lg"
          value={data?.username}
        />
        <Textarea
          mt={10}
          label="소개"
          // key={form.key('introduce')}
          // {...form.getInputProps('introduce')}
          size="lg"
          value={data?.status}
        />
        <Button fullWidth mt={20} radius={10} size="md" type="submit">
          저장
        </Button>
      </Box>
    </form>
  )
}
