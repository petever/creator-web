import {Button} from "@/shared/ui/button";

interface ContentExpandButtonProps {
  isExpanded : boolean
  isExpandButton : boolean
  onExpandedChange : () => void
}
export const ContentExpandButton = ({isExpanded, isExpandButton, onExpandedChange} : ContentExpandButtonProps) => {
  if(!isExpandButton) return null

  return (
    <div className='text-right'>
      <Button size='sm' variant='ghost' className='p-0 hover:bg-transparent' onClick={onExpandedChange}>
        {!isExpanded ? (
          '펼치기'
        ) : (
          '접기'
        )}
      </Button>
    </div>
  )
}
