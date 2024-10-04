'use client'

import { Box, Button, Flex, Image as MatineImage, Textarea, TextInput } from '@mantine/core'
import { UserProfile } from '@/entities/user/types'
import { useMyProfile } from '@/entities/user/hooks/useMyProfile'
import { useUpdateMyProfile } from '@/features/users/hooks/useUpdateMyProfile'
import { validateDisplayName, validateUsername } from '@/features/users/util/profileValidate'
import ProfilePicture from '@/features/users/ui/ProfilePicture'
import { UserProfileFormProvider, useUserProfileForm } from '@/features/users/lib/profile-context'

interface EditProfileFormProps {
  userProfile: UserProfile
}

export const EditProfileForm = ({ userProfile }: EditProfileFormProps) => {
  const { data } = useMyProfile(userProfile)
  const { updateProfileMutate } = useUpdateMyProfile()
  const form = useUserProfileForm({
    mode: 'controlled',
    initialValues: {
      picture: data?.picture || '',
      cover: data?.cover || '',
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
    const { displayName, username, status, picture, cover } = values

    const formData = new FormData()
    formData.append('editUserRequest', JSON.stringify({ displayName, username, status }))
    formData.append('picture', picture)
    // formData.append('cover', cover)
    updateProfileMutate(formData)

    form.resetDirty()
  }

  return (
    <UserProfileFormProvider form={form}>
      <form onSubmit={form.onSubmit((values: any) => handleSubmit(values))}>
        <MatineImage src={data?.cover} height={180} />
        <Box>
          <ProfilePicture imageSrc={form.getValues().picture} alt={data?.username} />
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
    </UserProfileFormProvider>
  )
}
