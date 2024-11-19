import React from 'react'

interface UserInfoProps {
  displayName: string
  username: string
  status: string
}

const UserInfo = ({ displayName, username, status }: UserInfoProps) => {
  return (
    <div className="wrap">
      <p className="text-lg font-bold mt-10">{displayName}</p>
      <div className="flex">
        <p className="text-sm text-gray-500">@{username}</p>
      </div>
    </div>
  )
}

export default UserInfo
