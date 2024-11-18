import {getDateFormat} from "@/shared/lib";
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {Button} from "@/shared/ui/button";
import {ContentExpandButton} from "@/entities/feeds/ui/FeedContent/ContentExpandButton";

interface FeedContentProps {
  contents : string
  createdAt: Date
}

export const FeedContent = ({contents, createdAt} : FeedContentProps) => {
  const contentsRef = useRef()
  const [isExpandButton, setIsExpandButton] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const handleExpandedChange = () => {
    setIsExpanded(!isExpanded)
  }

  useEffect(() => {
    if (contentsRef.current.clientHeight < 25) return
    setIsExpandButton(true);
  }, []);

  return (
    <div className='px-6 py-4'>
      <div className={'flex flex-between items-end'}>
        <div className={'w-full'}>
          <div>
            <p className={`max-h-14 text-ellipsis  ${!isExpanded ? `line-clamp-2` : `max-h-fit`}`} ref={contentsRef}>{contents}</p>
            <ContentExpandButton isExpandButton={isExpandButton} isExpanded={isExpanded} onExpandedChange={handleExpandedChange}/>
          </div>
          <p className='text-xs text-right'>{getDateFormat(createdAt)} 작성됨</p>
        </div>

      </div>
    </div>
  )
}
