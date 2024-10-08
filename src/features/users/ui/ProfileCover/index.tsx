import React, { useRef, useState } from 'react'
import { Image as MatineImage } from '@mantine/core'

import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import { useUserProfileFormContext } from '@/features/users/lib/profile-context'

interface ProfileCoverProps {
  imageSrc: string | File
}

const ProfileCover = ({ imageSrc = ''}: ProfileCoverProps) => {
  const form = useUserProfileFormContext()
  const [src, setSrc] = useState<string | File>(imageSrc)
  const openRef = useRef<() => void>(null)

  const handleCoverUpdate = (files: File[]) => {
    setSrc(URL.createObjectURL(files[0]))

    form.setFieldValue('cover', files[0])
  }

  return (
    <Dropzone accept={IMAGE_MIME_TYPE} openRef={openRef} onDrop={handleCoverUpdate}>
      <MatineImage radius={6} src={src} height={180} style={{ cursor: 'pointer' }} />
    </Dropzone>
  )
}

export default ProfileCover
