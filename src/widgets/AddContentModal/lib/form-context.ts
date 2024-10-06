import { createFormContext } from '@mantine/form'
import { AddContentData } from '@/widgets/AddContentModal/types'

export const [ContentFormProvider, useContentFormContext, useContentForm] =
  createFormContext<AddContentData>()
