'use client'

import { Avatar, Box, Button, Flex, Image as MatineImage, Textarea, TextInput } from '@mantine/core'
import { UserProfile } from '@/entities/user/types'
import { useMyProfile } from '@/entities/user/hooks/useMyProfile'
import Image from 'next/image'
import { useForm } from '@mantine/form'
import { useUpdateMyProfile } from '@/features/users/hooks/useUpdateMyProfile'
import { validateDisplayName, validateUsername } from '@/features/users/util/profileValidate'
import { useSession } from 'next-auth/react'

interface EditProfileFormProps {
  userProfile: UserProfile
}

export const EditProfileForm = ({ userProfile }: EditProfileFormProps) => {
  const session = useSession()
  console.log(session)
  const { data } = useMyProfile(userProfile)
  const { updateProfileMutate } = useUpdateMyProfile()
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      displayName: data?.displayName || '',
      username: data?.username || '',
      status: data?.status || '',
    },
    validate: {
      displayName: (value) => validateDisplayName(value),
      username: (value) => validateUsername(value),
    },
  })

  const isFormValid = form.isValid() && form.isDirty()
  const handleSubmit = (values: UserProfile) => {
    updateProfileMutate(values)
    form.resetDirty()
  }

  return (
    <form onSubmit={form.onSubmit((values: any) => handleSubmit(values))}>
      <MatineImage
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
        height={180}
      />
      <Box>
        <Avatar bg="themeColors" w={80} h={80} mt={-30} ml={16} mb={20}>
          <Image src={data?.picture || ''} alt={data?.username || ''} width={80} height={80} />
        </Avatar>
        <Flex direction="column" gap={20}>
          <TextInput
            withAsterisk
            label="닉네임"
            key={form.key('displayName')}
            {...form.getInputProps('displayName')}
            size="lg"
          />
          <TextInput
            withAsterisk
            label="사용자 이름"
            key={form.key('username')}
            {...form.getInputProps('username')}
            mt={10}
            size="lg"
          />
          <Textarea
            mt={10}
            label="소개"
            key={form.key('status')}
            {...form.getInputProps('status')}
            size="lg"
          />
        </Flex>
        <Button fullWidth mt={20} radius={10} size="md" type="submit" disabled={!isFormValid}>
          저장
        </Button>
      </Box>
    </form>
  )
}
