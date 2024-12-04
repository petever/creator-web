import React from 'react'
import CreatorApplyForm from '@/widgets/creator/ui/CreatorApplyForm'
import { getCreatorApply } from '@/entities/creators/api/getCreatorApply'

const CreatorPage = async () => {
  const result = await getCreatorApply()
  console.log(result)
  return <CreatorApplyForm />
}

export default CreatorPage
