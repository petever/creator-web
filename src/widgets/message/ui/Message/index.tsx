'use client'
import {Separator} from "@/shared/ui/separator";
import {RecommendList} from "@/shared/RecommentList/ui/RecommendList";
import {UserProfile} from "@/entities/user/types";
import {Chat, MessageList} from "@/features";
import {useState} from "react";
import {Owner} from "@/shared/types";
import {CurrentChat} from "@/widgets/message/types";


interface MessageProps {
  recommends: UserProfile[]
}


export const Message = ({recommends} : MessageProps) => {
  const [currentChat, setCurrentChat] = useState<CurrentChat | undefined>()

  const handleChangeChat = (data : CurrentChat) => {
    setCurrentChat(data)
  }

  return (
    <div
      className='grid grid-cols-2'
    >
      <div>
        <h3
          className='py-2 font-bold text-lg border-b border-gray-200 '
        >메시지</h3>
        <MessageList onChangeChat={handleChangeChat}/>
        <Separator className="py-1 bg-gray-200"/>
        <RecommendList recommends={recommends}/>
      </div>
      <Chat chatData={currentChat}/>
    </div>
  )

}