import { useState } from 'react'

export function useDisclosure(initialState: boolean = false) {
  const [isOpen, setIsOpen] = useState(initialState)

  const onToggle = () => {
    setIsOpen((prev) => !prev) // 상태를 토글합니다.
  }

  const onOpen = () => {
    setIsOpen(true) // 상태를 true로 설정합니다.
  }

  const onClose = () => {
    setIsOpen(false) // 상태를 false로 설정합니다.
  }

  return {
    isOpen,
    onToggle,
    onOpen,
    onClose,
  }
}
