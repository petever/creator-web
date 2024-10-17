'use client'
import React from 'react'
import { Button, Flex, Input, Modal, NumberFormatter, NumberInput } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'
import { useDisclosure } from '@mantine/hooks'
import Editor from '@/widgets/Editor'
import { useForm } from '@mantine/form'
import { useAddSubscribePlan } from '@/features/subscribe/hooks/useAddSubscribePlan'
import { AddSubscribePlan } from '@/features/subscribe/types'

const AddSubscribePlan = () => {
  const { addPlanMutate } = useAddSubscribePlan()
  const [opened, { open, close }] = useDisclosure(false)

  const form = useForm({
    mode: 'controlled',
    initialValues: {
      name: '',
      description: '',
      price: 0,
      duration: 0,
      unit: 'MONTHS',
    },
    validate: {
      name: (value) => (value.length < 1 ? '플랜 제목을 입력해주세요.' : null),
      price: (value) => (value < 0 ? '마이너스 가격은 입력할 수 없습니다.' : null),
    },
  })

  const handleDescriptionChange = (content: string) => {
    form.setFieldValue('description', content)
  }

  const handleSubmit = (values: AddSubscribePlan) => {
    addPlanMutate(values)
    close()
  }

  return (
    <>
      <Modal opened={opened} onClose={close} size="lg" title="구독 플랜 추가">
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <Flex direction="column" gap={14}>
            <Input.Wrapper error={form.errors.name}>
              <Input
                placeholder="플랜 제목"
                key={form.key('name')}
                {...form.getInputProps('name')}
                error={form.errors.name}
              />
            </Input.Wrapper>
            <NumberInput
              placeholder="가격"
              key={form.key('price')}
              {...form.getInputProps('price')}
              hideControls
              prefix="₩"
              min={0}
              thousandSeparator=","
            />
            <Editor placeholder="설명" onChange={handleDescriptionChange} />
            <Button fullWidth type="submit">
              추가
            </Button>
          </Flex>
        </form>
      </Modal>
      <Button
        onClick={open}
        leftSection={<IconPlus size={16} />}
        fullWidth
        size="md"
        variant="light"
        mt={20}
      >
        플랜 추가
      </Button>
    </>
  )
}

export default AddSubscribePlan
