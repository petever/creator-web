import React from 'react'
import CreatorApplyForm from '@/widgets/creator/ui/CreatorApplyForm'
import { getServerCreatorApply } from '@/entities/creators/api/getServerCreatorApply'

const CreatorPage = async () => {
  const result = await getServerCreatorApply()
  console.log(result)
  return <CreatorApplyForm />
}

export default CreatorPage
