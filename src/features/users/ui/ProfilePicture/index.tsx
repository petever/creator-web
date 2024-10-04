import React, { useRef, useState } from 'react'
import { Avatar } from '@mantine/core'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import Image from 'next/image'
import { useUserProfileFormContext } from '@/features/users/lib/profile-context'

interface ProfilePictureProps {
  imageSrc?: string | FormData
  alt?: string
}

const ProfilePicture = ({ imageSrc = '', alt = '' }: ProfilePictureProps) => {
  const form = useUserProfileFormContext()
  const [src, setSrc] = useState<string | FormData>(imageSrc)
  const openRef = useRef<() => void>(null)

  const handlePictureUpdate = (files: File[]) => {
    setSrc(URL.createObjectURL(files[0]))

    form.setFieldValue('picture', files[0])
  }

  return (
    <Dropzone accept={IMAGE_MIME_TYPE} openRef={openRef} onDrop={handlePictureUpdate}>
      <Avatar bg="themeColors" w={80} h={80} mt={-30} ml={16} mb={20}>
        <Image src={src as string} alt={alt} width={80} height={80} />
      </Avatar>
    </Dropzone>
  )
}

export default ProfilePicture
