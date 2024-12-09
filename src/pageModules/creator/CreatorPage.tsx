import React from 'react'
import CreatorApplyForm from '@/widgets/creator/ui/CreatorApplyForm'
import { getCreatorApply } from '@/entities/creators/api/getCreatorApply'

const CreatorPage = async () => {
  const initialData = await getCreatorApply()
  return <CreatorApplyForm initialData={initialData} />
}

export default CreatorPage
