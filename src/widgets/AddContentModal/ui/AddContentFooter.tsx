import { useFormContext } from 'react-hook-form'
import { Button } from '@/shared/ui/button'
import {SubscribePlan} from "@/entities/subscribe/types";

interface AddContentFooterProps {
  plans ?: SubscribePlan[]
}


export const AddContentFooter = ({plans} : AddContentFooterProps) => {
  const method = useFormContext()
  const { getValues } = method
  const { contents } = getValues()

  const isDisabledSaveButton = !contents

  if(!plans || plans.length === 0) return null

  return (
    <Button type="submit" disabled={isDisabledSaveButton} className='w-full mt-4'>
      저장
    </Button>
  )
}
