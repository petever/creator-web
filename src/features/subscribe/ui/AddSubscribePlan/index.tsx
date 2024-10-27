'use client'
import React from 'react'
import { Button } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'
import { useDisclosure } from '@mantine/hooks'
import SubscribePlanModal from '@/features/subscribe/ui/SubscribePlanModal'
import { useAddSubscribePlan } from '@/features/subscribe/hooks/useAddSubscribePlan'
import { AddSubscribePlan } from '@/features/subscribe/types'

const AddSubscribePlan = () => {
  const [opened, { open, close }] = useDisclosure(false)
  const { addPlanMutate } = useAddSubscribePlan()

  const handleSubscribePlanAdd = (values: AddSubscribePlan) => {
    addPlanMutate(values)
  }

  return (
    <>
      <SubscribePlanModal opened={opened} close={close} onClick={handleSubscribePlanAdd} />
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
