import { Button, Flex, Popover, Text } from '@mantine/core'
import { IconDotsVertical, IconPencil, IconTrash } from '@tabler/icons-react'
import { useDeleteSubscribePlan } from '@/features/subscribe/hooks/useDeleteSubscribePlan'
import { modals } from '@mantine/modals'
import { SubscribePlan } from '@/entities/subscribe/types'
import { useDisclosure } from '@mantine/hooks'
import SubscribePlanModal from '@/features/subscribe/ui/SubscribePlanModal'
import React from 'react'
import { useEditSubscribePlan } from '@/features/subscribe/hooks/useEditSubscribePlan'
import { AddSubscribePlan, EditSubscribePlan } from '@/features/subscribe/types'

interface SubscribeCardMenuProps {
  isCreator?: boolean
  plan: SubscribePlan
}

const SubscribeCardMenu = ({ plan, isCreator }: SubscribeCardMenuProps) => {
  const [opened, { open, close }] = useDisclosure(false)

  const { deletePlanMutate } = useDeleteSubscribePlan()
  const { editPlanMutate } = useEditSubscribePlan()

  const handleDelete = async () => {
    modals.openConfirmModal({
      title: '구독 플랜 삭제',
      children: (
        <Text size="sm">구독 플랜을 삭제하시겠습니까? 삭제된 플랜은 복구할 수 없습니다.</Text>
      ),
      labels: { confirm: '삭제', cancel: '취소' },
      confirmProps: { color: 'red' },
      onCancel: () => false,
      onConfirm: () => deletePlanMutate(plan.id),
    })
  }

  const handleEdit = (values: AddSubscribePlan) => {
    editPlanMutate({ id: plan.id, ...values })
    close()
  }

  if (!isCreator) return null
  return (
    <>
      <SubscribePlanModal opened={opened} close={close} plan={plan} onClick={handleEdit} />
      <Popover zIndex={10} position="bottom" shadow="md">
        <Popover.Target>
          <IconDotsVertical color="#bbb" />
        </Popover.Target>
        <Popover.Dropdown>
          <Flex direction="column">
            <Button
              type="button"
              size="sm"
              leftSection={<IconPencil />}
              variant="transparent"
              color="dark"
              onClick={open}
            >
              수정
            </Button>
            <Button
              type="button"
              leftSection={<IconTrash />}
              size="sm"
              variant="transparent"
              color="red"
              onClick={handleDelete}
            >
              삭제
            </Button>
          </Flex>
        </Popover.Dropdown>
      </Popover>
    </>
  )
}

export default SubscribeCardMenu
