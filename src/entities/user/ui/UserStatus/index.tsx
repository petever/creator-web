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
          {/* TODO : 유저 상세 내용 접기 펼치기 */}
          {/*{isExpanded ? (*/}
          {/*  <ArrowUp className="w-5 h-5 stroke-1.5" />*/}
          {/*) : (*/}
          {/*  <ArrowDown className="w-5 h-5 stroke-1.5" />*/}
          {/*)}*/}
        </button>
      </div>
    </>
  )
}
