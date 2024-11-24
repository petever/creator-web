import React from 'react'
import Image from 'next/image'
import { Image as ImageIcon, Video as VideoIcon} from 'lucide-react'

interface BackgroundImageProps {
  cover: string
}

const BackgroundImage = ({ cover }: BackgroundImageProps) => {
  return (
    <div>
      <div className="flex justify-center items-center gap-10 mb-10">
        <div className="flex items-center gap-10">
          <VideoIcon />
          <span>12</span>
        </div>
        <div className="flex items-center gap-10">
          <ImageIcon />
          <span>12</span>
        </div>
      </div>
			{!cover && <div className='absolute top-0 left-0 w-full h-full bg-gray-200 z-[-1]'></div>}
			{cover &&
				<Image src={cover} alt="" fill />
			}
    </div>
  )
}

export default BackgroundImage
