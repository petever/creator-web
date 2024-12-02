import { useFormContext } from 'react-hook-form'
import { Button } from '@/shared/ui/button'

export const AddContentFooter = () => {
  const method = useFormContext()
  const { getValues } = method
  const { title, contents } = getValues()

  const isDisabledSaveButton = !title || !contents

  return (
    <Button type="submit" disabled={isDisabledSaveButton} className='w-full mt-4'>
      저장
    </Button>
  )
}
