'use client'
import React, { useEffect } from 'react'
import { Button, Flex, Input, Modal, NumberInput } from '@mantine/core'
import Editor from '@/widgets/Editor'
import { useForm } from '@mantine/form'
import { AddSubscribePlan, EditSubscribePlan } from '@/features/subscribe/types'
import { SubscribePlan } from '@/entities/subscribe/types'

interface SubscribePlanModal {
  opened: boolean
  close: () => void
  onClick: (value: AddSubscribePlan) => void
  plan?: SubscribePlan
}

const SubscribePlanModal = ({ opened, close, onClick, plan }: SubscribePlanModal) => {
  const form = useForm({
    mode: 'controlled',
    initialValues: {
      name: '',
      description: plan?.description || '',
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
    onClick?.(values)
    close()
    form.reset()
  }

  useEffect(() => {
    if (!plan) return
    form.setFieldValue('name', plan.name)
    form.setFieldValue('price', plan.price)
    form.setFieldValue('description', plan.description)
  }, [plan])

  return (
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
          <Editor
            placeholder="설명"
            content={form.values.description}
            onChange={handleDescriptionChange}
          />
          <Button fullWidth type="submit">
            {plan ? '수정' : '추가'}
          </Button>
        </Flex>
      </form>
    </Modal>
  )
}

export default SubscribePlanModal
