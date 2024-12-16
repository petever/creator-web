import React from 'react'
import { useFormContext } from 'react-hook-form'

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
      className="block h-[200px] mb-[-50px]"
      style={{ backgroundImage: `url(${src})`, backgroundSize: 'cover' }}
    >
      <input type="file" className="hidden" onChange={handleImageChange} />
    </label>
  )
}

export default ProfileCover
