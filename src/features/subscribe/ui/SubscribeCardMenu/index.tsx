import { SubscribePlan } from '@/entities/subscribe/types'
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu'
import { EllipsisVertical, Pencil, Trash } from 'lucide-react'
import { useDisclosure } from '@/shared/hooks/useDisclosure'
import EditSubscribePlan from '@/features/subscribe/ui/EditSubscribePlan'
import DeleteSubscribePlan from '@/features/subscribe/ui/DeleteSubscribePlan'

interface SubscribeCardMenuProps {
  isCreator?: boolean
  plan: SubscribePlan
}

const SubscribeCardMenu = ({ plan, isCreator }: SubscribeCardMenuProps) => {
  const { isOpen: isEditOpen, onToggle: onEditToggle, onClose: onEditClose } = useDisclosure()
  const { isOpen: isRemoveOpen, onToggle: onRemoveToggle, onClose: onRemoveClose } = useDisclosure()

  if (!isCreator) return null
  return (
    <>
      <EditSubscribePlan
        plan={plan}
        isOpen={isEditOpen}
        onToggle={onEditToggle}
        onClose={onEditClose}
      />
      <DeleteSubscribePlan plan={plan} isOpen={isRemoveOpen} onClose={onRemoveClose} />
      <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer">
          <EllipsisVertical />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className="cursor-pointer" onClick={onEditToggle}>
            <Pencil />
            수정
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer" onClick={onRemoveToggle}>
            <Trash />
            삭제
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default SubscribeCardMenu
