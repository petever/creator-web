'use client'
import { useEffect, useRef, useState } from 'react'
import { ContentExpandButton } from '@/entities/feeds/ui/FeedContent/ContentExpandButton'
import parse from 'html-react-parser'

interface FeedContentProps {
  contents: string
}

export const FeedContent = ({ contents }: FeedContentProps) => {
  const contentsRef = useRef<HTMLParagraphElement>(null)
  const [isExpandButton, setIsExpandButton] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const handleExpandedChange = () => {
    setIsExpanded(!isExpanded)
  }

  useEffect(() => {
    if (!contentsRef.current) return
    if (contentsRef.current?.clientHeight < 50) return
    console.log('contentsRef.current?.clientHeight', contentsRef.current?.clientHeight)
    setIsExpandButton(true)
  }, [])

  return (
    <div>
      <div className={'flex flex-between items-end'}>
        <div className={'w-full'}>
          <div>
            <div
              className={`max-h-14 text-ellipsis  ${!isExpanded ? `line-clamp-2` : `max-h-fit`}`}
              ref={contentsRef}
            >
              {parse(contents)}
            </div>
            <ContentExpandButton
              isExpandButton={isExpandButton}
              isExpanded={isExpanded}
              onExpandedChange={handleExpandedChange}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
