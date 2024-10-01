import {Button, Group} from "@mantine/core";
import {useContentFormContext} from "@/widgets/AddContentModal/lib/form-context";

export const AddContentFooter = () => {
  const form = useContentFormContext()
  const { setFieldValue} = form
  const { step } = form.values

  const isImageSection = step === 0
  const isContentSection = step === 1

  const handleNextStep = (status : 'prev' | 'next' ) => {
    if(status === 'prev') {
      return setFieldValue('step', 0)
    }
    setFieldValue('step', 1)
  }

  return (
    <Group>
      { isImageSection && (
        <>
          <Button onClick={() => handleNextStep('prev')}>이전</Button>
          <Button onClick={() => handleNextStep('next')}>다음</Button>
        </>
      )}
      { isContentSection &&
        <>
          <Button onClick={() => handleNextStep('prev')}>이전</Button>
          <Button type="submit">저장</Button>
        </>
      }
    </Group>
  )
}
