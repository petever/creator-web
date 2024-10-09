import { Button, Flex, Group } from '@mantine/core'
import { useContentFormContext } from '@/widgets/AddContentModal/lib/form-context'
import classes from './styles.module.css'

export const AddContentFooter = () => {
  const form = useContentFormContext()
  const { setFieldValue } = form
  const { step, files, title, contents } = form.values

  const isImageSection = step === 0
  const isContentSection = step === 1

  const handleNextStep = (status: 'prev' | 'next') => {
    if (status === 'prev') {
      return setFieldValue('step', 0)
    }
    setFieldValue('step', 1)
  }

  const isDisabledNextButton = files.length === 0
  const isDisabledSaveButton = !title || !contents

  return (
    <div className={classes.footerWrapper}>
      <Flex justify={'flex-end'} gap={20}>
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
      </Flex>
    </div>
  )
}
