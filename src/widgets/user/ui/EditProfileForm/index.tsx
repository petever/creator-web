'use client'

import { UserProfile } from '@/entities/user/types'
import { useMyProfile } from '@/entities/user/hooks/useMyProfile'
import { useUpdateMyProfile } from '@/features/users/hooks/useUpdateMyProfile'
import { Input } from '@/shared/ui/input'
import { useForm } from 'react-hook-form'
import { Label } from '@/shared/ui/label'
import { Form } from '@/shared/ui/form'
import { Button } from '@/shared/ui/button'
import ProfileCover from '@/features/users/ui/ProfileCover'
import ProfilePicture from '@/features/users/ui/ProfilePicture'
import { Editor } from '@/shared/ui/Editor'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { WithDrawModal } from '@/features'

interface EditProfileFormProps {
  userProfile: UserProfile
}

export const EditProfileForm = ({ userProfile }: EditProfileFormProps) => {
  const { data } = useMyProfile(userProfile)
  const { updateProfileMutate } = useUpdateMyProfile()

  const schema = z.object({
    picture: z.union([z.string(), z.instanceof(File)]).optional(),
    cover: z.union([z.string(), z.instanceof(File)]).optional(),
    displayName: z.string().min(2, { message: '2글자 이상 입력해주세요.' }),
    username: z.string().min(2, { message: '2글자 이상 입력해주세요.' }),
    description: z.string().optional(),
  })

  const form = useForm<UserProfile>({
    resolver: zodResolver(schema),
    defaultValues: {
      picture: data?.picture || '',
      cover: data?.cover || '/assets/banner.png',
      displayName: data?.displayName || '',
      username: data?.username || '',
      description: data?.description || '',
    },
  })
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isDirty },
    watch,
  } = form

  const onSubmit = (values: UserProfile) => {
    const { displayName, username, description, picture, cover } = values
    const formData = new FormData()
    formData.append(
      'editUserRequest',
      new Blob(
        [
          JSON.stringify({
            displayName,
            username,
            description,
          }),
        ],
        { type: 'application/json' },
      ),
    )
    formData.append('picture', picture)
    formData.append('cover', cover)
    updateProfileMutate(formData)
  }

  const handleEditorChange = (content: string) => {
    setValue('description', content, { shouldDirty: true })
  }
  return (
    <Form {...form}>
      <form className="space-y-6 w-full" onSubmit={handleSubmit(onSubmit)}>
        <ProfileCover imageSrc={watch('cover')} />
        <div className="space-y-4  p-2">
          <ProfilePicture imageSrc={watch('picture')} alt={data?.username} />
          <div>
            <Label htmlFor="username">사용자 ID</Label>
            <Input id="username" placeholder="사용자 ID" {...register('username')} />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
            )}
            <p className="text-gray-500 text-sm mt-1">
              {`${process.env.NEXT_PUBLIC_ORIGIN}/${watch('username')}`}
            </p>
          </div>
          <div>
            <Label htmlFor="displayName">닉네임</Label>
            <Input id="displayName" placeholder="닉네임" {...register('displayName')} />
            {errors.displayName && (
              <p className="text-red-500 text-sm mt-1">{errors.displayName.message}</p>
            )}
          </div>
          <div>
            <Label>소개</Label>
            <Editor value={watch('description')} onChange={handleEditorChange} height="200px" />
          </div>
          <WithDrawModal />
          <Button className="w-full" type="submit" disabled={!isDirty}>
            저장
          </Button>
        </div>
      </form>
    </Form>
  )
}
