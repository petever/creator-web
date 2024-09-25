import { apiService } from '@/shared/core/apiService'
import { API_URL } from '@/shared/constants/apiURL'
import { getSession } from 'next-auth/react'

export const getProfile = async () => {
  return apiService.get(API_URL.USERS_PROFILE).json()
}

export const testGetProfile = async () => {
  const session = await getSession()
  return fetch(`http://182.227.155.8:9090/users/profile`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.accessToken}`,
    },
  })
}
