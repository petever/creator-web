import React from 'react'

interface ProfilePictureProps {
  imageSrc?: string | File
  alt?: string
}

const ProfilePicture = ({ imageSrc = '', alt = '' }: ProfilePictureProps) => {
  return <div></div>
}

export default ProfilePicture
