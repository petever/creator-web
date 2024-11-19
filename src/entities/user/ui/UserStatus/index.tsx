import { useState } from 'react'
import parse from 'html-react-parser'
import { ArrowDown, ArrowUp } from 'lucide-react'

interface UserStatusProps {
  status: string
}

export const UserStatus = ({ status }: UserStatusProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const handleExpandedChange = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <>
      <div className={`status ${!isExpanded && 'expanded'}`}>{parse(status)}</div>
      <div className="flex justify-end">
        <button className="p-2" onClick={handleExpandedChange}>
          {isExpanded ? (
            <ArrowUp className="w-5 h-5 stroke-1.5" />
          ) : (
            <ArrowDown className="w-5 h-5 stroke-1.5" />
          )}
        </button>
      </div>
    </>
  )
}
