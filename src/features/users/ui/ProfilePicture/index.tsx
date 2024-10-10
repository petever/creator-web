import React, { useRef, useState } from 'react'
import { Avatar } from '@mantine/core'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import Image from 'next/image'
import { useUserProfileFormContext } from '@/features/users/lib/profile-context'
import { IconCamera } from '@tabler/icons-react'

interface ProfilePictureProps {
  imageSrc?: string | File
  alt?: string
}

const ProfilePicture = ({ imageSrc = '', alt = '' }: ProfilePictureProps) => {
  const form = useUserProfileFormContext()
  const [src, setSrc] = useState<string | File>(imageSrc)
  const openRef = useRef<() => void>(null)

  const handlePictureUpdate = (files: File[]) => {
    setSrc(URL.createObjectURL(files[0]))

    form.setFieldValue('picture', files[0])
  }

  return (
    <Dropzone
      w={80}
      h={80}
      mt={-30}
      ml={16}
      mb={20}
      accept={IMAGE_MIME_TYPE}
      openRef={openRef}
      onDrop={handlePictureUpdate}
    >
      <Avatar w={80} h={80} pos="relative">
        <Avatar pos="absolute" size="sm">
          <IconCamera size="1.5rem" />
        </Avatar>
        <Image src={src as string} alt={alt} width={80} height={80} />
      </Avatar>
    </Dropzone>
  )
}

export default ProfilePicture
