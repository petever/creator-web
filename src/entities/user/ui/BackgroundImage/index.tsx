import React from 'react'
import { Image, Video } from 'lucide-react'

interface BackgroundImageProps {
  cover: string | File
}

const BackgroundImage = ({ cover }: BackgroundImageProps) => {
  return (
    <div>
      <div className="flex justify-center items-center gap-10 mb-10">
        <div className="flex items-center gap-10">
          <Video />
          <span>12</span>
        </div>
        <div className="flex items-center gap-10">
          <Image />
          <span>12</span>
        </div>
      </div>
      {/*<NextImage src={cover as string} alt="cover" className="h-300" />*/}
    </div>
  )
}

export default BackgroundImage
