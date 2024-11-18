import { useFormContext } from 'react-hook-form'
import { Button } from '@/shared/ui/button'

export const AddContentFooter = () => {
  const method = useFormContext()
  const { getValues, setValue } = method
  const { step, files, title, contents } = getValues()

  const isImageSection = step === 0
  const isContentSection = step === 1

  const handleNextStep = (status: 'prev' | 'next') => {
    if (status === 'prev') {
      return setValue('step', 0)
    }
    setValue('step', 1)
  }

  const isDisabledNextButton = files.length === 0
  const isDisabledSaveButton = !title || !contents

  return (
    <div className="mt-20">
      <div className={'flex gap-20'}>
        {isImageSection && (
          <>
            <Button disabled={isDisabledNextButton} onClick={() => handleNextStep('next')}>
              다음
            </Button>
          </>
        )}
        {isContentSection && (
          <>
            <Button onClick={() => handleNextStep('prev')}>이전</Button>
            <Button type="submit" disabled={isDisabledSaveButton}>
              저장
            </Button>
          </>
        )}
      </div>
    </div>
  )
}
