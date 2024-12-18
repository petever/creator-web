import {Avatar, AvatarImage} from "@/shared/ui/avatar";
import {useForm, useFormContext} from "react-hook-form";
import {CurrentChat} from "@/widgets/message/types";
import {Editor} from "@/shared/ui/Editor";
import React from "react";
import {Button} from "@/shared/ui/button";
import {Send} from "lucide-react";

interface chatProps {
  chatData ?: CurrentChat
}

export const Chat = ({chatData} : chatProps) => {
  const form = useForm({
    defaultValues : {
      contents : ''
    }
  })

  if(!chatData?.id) {
    return (
      <div>
        선택된 채팅방이 없습니다.
      </div>
    )
  }

  return (
    <div className='border-l border-gray-200'>
      <div className='flex p-4 gap-2 items-center'>
        <Avatar>
          <AvatarImage src={chatData.owner.picture as string}/>
        </Avatar>
        {chatData.owner.displayName}
      </div>
      <div className='h-[calc(100vh-130px)] bg-gray-200'>
        {/* TODO : 좌측 대화창 */}
        <div className='flex p-6 gap-4'>
          <div className='
            px-4 py-2
            border bg-gray-900 text-white rounded-lg
          '>
            <p>서비스 명을 더 1차원적으로 변경하는게 좋을 거 같다.
              "슈슈슉" 이라는 단어를 보았을 떄 크리에이터 서비스라는 이미지 형상화가 되지 않는다.  스토리를 말하지 않으면 속도감 이미지가 떠올라서 오히려 로켓 배송 이 더 어울리지 않나 ??
              브랜딩, 마케팅하지  쉽지 않을 거같다라고 하셨습니다
            </p>
          </div>
          <Avatar>
            <AvatarImage src={chatData.owner.picture as string}/>
          </Avatar>
        </div>

        {/* TODO : 우측 대화창 */}
        <div className='flex p-6 gap-4'>
          <div className='
            px-4 py-2
            border bg-theme-blue-600 text-white rounded-lg
          '>
            <p>생각해보시죠</p>
          </div>
          <Avatar>
            <AvatarImage src={chatData.owner.picture as string}/>
          </Avatar>
        </div>
      </div>
      <div className='relative'>
        <Editor
          placeholder="채팅해봐요"
        />
        <Button variant='ghost'>
          <Send/>
        </Button>
      </div>
    </div>
  )
}