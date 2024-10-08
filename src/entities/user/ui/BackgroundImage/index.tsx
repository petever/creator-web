import React from 'react'
import { Image } from '@mantine/core'

interface BackgroundImageProps {
  cover : string | File
}

const BackgroundImage = ({cover} : BackgroundImageProps) => {
  return (
    <div>
      <Image
        src={cover}
        height={300}
      />
    </div>
  )
}

export default BackgroundImage
