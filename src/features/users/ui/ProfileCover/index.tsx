import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Image } from 'lucide-react'

interface ProfileCoverProps {
  imageSrc: string | File
}

const ProfileCover = ({ imageSrc = '' }: ProfileCoverProps) => {
  const [src, setSrc] = React.useState(imageSrc)
  const form = useFormContext()
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    setSrc(URL.createObjectURL(file))
    form.setValue('cover', file, { shouldDirty: true })
  }

  return (
    <label
      className="flex justify-center items-center h-[200px] mb-[-50px] bg-cover bg-gray-200"
      style={{ backgroundImage: `url(${src})` }}
    >
      <div className="flex flex-col justify-center items-center gap-2">
        <Image size={60} />
        <p>이미지를 등록해주세요.</p>
      </div>
      <input type="file" className="hidden" onChange={handleImageChange} />
    </label>
  )
}

export default ProfileCover
