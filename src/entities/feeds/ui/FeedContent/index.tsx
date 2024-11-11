import {getDateFormat} from "@/shared/lib";
import {IconCircleArrowDownFilled, IconCircleArrowUpFilled} from "@tabler/icons-react";
import {useState} from "react";
import {Button} from "@/shared/ui/button";

interface FeedContentProps {
  contents : string
  createdAt: Date
}

export const FeedContent = ({contents, createdAt} : FeedContentProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const handleExpandedChange = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className='p-1'>
      <div className={'flex flex-between items-end'}>
        <div className={'flex flex-col'}>
          <p className={`break-keep h-3/6 ${!isExpanded && `h-fit`}`}>{contents}</p>
          <p>{getDateFormat(createdAt)} 작성됨</p>
        </div>
        <Button variant='ghost' onClick={handleExpandedChange}>
          {isExpanded ? (
            <IconCircleArrowUpFilled stroke={1.5} />
          ) : (
            <IconCircleArrowDownFilled stroke={1.5} />
          )}
        </Button>
      </div>
    </div>
  )
}
