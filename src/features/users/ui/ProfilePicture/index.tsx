import React from 'react'
import Image from 'next/image'
import { Camera } from 'lucide-react'
import { useFormContext } from 'react-hook-form'

interface ProfilePictureProps {
  imageSrc?: string | File
  alt?: string
}

const ProfilePicture = ({ imageSrc = '', alt = '' }: ProfilePictureProps) => {
  const [src, setSrc] = React.useState(imageSrc)
  const form = useFormContext()
  console.log(form, 'form')
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    setSrc(URL.createObjectURL(file))
    form.setValue('picture', file)
  }

  return (
    <label className="cursor-pointer relative inline-block">
      <Image
        src={src as string}
        alt={alt}
        className="rounded-full w-[60px] h-[60px]"
        width={60}
        height={60}
        style={{ objectFit: 'cover' }}
      />
      <input type="file" className="hidden" onChange={handleImageChange} />
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
      rounded-full flex items-center justify-center cursor-pointer bg-black/20 p-1"
      >
        <Camera className="color-white" />
      </div>
    </label>
  )
}

export default ProfilePicture
