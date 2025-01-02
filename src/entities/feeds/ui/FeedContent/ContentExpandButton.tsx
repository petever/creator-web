import { Button } from '@/shared/ui/button'

interface ContentExpandButtonProps {
  isExpanded: boolean
  isExpandButton: boolean
  onExpandedChange: () => void
}

export const ContentExpandButton = ({
  isExpanded,
  isExpandButton,
  onExpandedChange,
}: ContentExpandButtonProps) => {
  if (!isExpandButton) return null

  return (
    <div className="px-3">
      <Button
        variant="ghost"
        className="p-0 hover:bg-transparent text-gray-400"
        onClick={onExpandedChange}
      >
        {!isExpanded ? '...더보기' : '접기'}
      </Button>
    </div>
  )
}
