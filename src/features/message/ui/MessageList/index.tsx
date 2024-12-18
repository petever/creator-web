import {Avatar, AvatarImage} from "@/shared/ui/avatar";
import React from "react";
import parse from "html-react-parser";
import {Button} from "@/shared/ui/button";
import {CurrentChat} from "@/widgets/message/types";

const DUMMY_DATAS = [
  {
    id : 'chat_1',
    owner : {
      "id": "7f000001-93a0-1505-8193-a554bb030003",
      "username": "test123",
      "displayName": "김승훈2",
      "status": "NORMAL",
      "description": "<p>ewqewqe</p>",
      "picture": "https://lh3.googleusercontent.com/a/ACg8ocJ50wZ_fWTdWqBvxMRlAOYEgo2EOocZxmWu5KBA9u_SBnXOeQ=s96-c",
      "cover": "https://api.shshsk.com/files/user/7f000001-93a0-1505-8193-a554bb030003/0b5ee811-fed1-476e-980c-617bc8f803a9.jpeg",
      "role": "ROLE_USER"
    },
    contents:"<p>22</p>",
    createAt : "2024-12-17T15:21:01",
    updatedAt : "2024-12-17T15:21:01"
  },
  {
    id : 'chat_2',
    owner : {
      "id": "7f000001-93a0-1505-8193-a554bb030003",
      "username": "test123",
      "displayName": "김승훈2",
      "status": "NORMAL",
      "description": "<p>ewqewqe</p>",
      "picture": "https://lh3.googleusercontent.com/a/ACg8ocJ50wZ_fWTdWqBvxMRlAOYEgo2EOocZxmWu5KBA9u_SBnXOeQ=s96-c",
      "cover": "https://api.shshsk.com/files/user/7f000001-93a0-1505-8193-a554bb030003/0b5ee811-fed1-476e-980c-617bc8f803a9.jpeg",
      "role": "ROLE_USER"
    },
    contents:"<p>22</p>",
    createAt : "2024-12-17T15:21:01",
    updatedAt : "2024-12-17T15:21:01"
  },
  {
    id : 'chat_3',
    owner : {
      "id": "7f000001-93a0-1505-8193-a554bb030003",
      "username": "test123",
      "displayName": "김승훈2",
      "status": "NORMAL",
      "description": "<p>ewqewqe</p>",
      "picture": "https://lh3.googleusercontent.com/a/ACg8ocJ50wZ_fWTdWqBvxMRlAOYEgo2EOocZxmWu5KBA9u_SBnXOeQ=s96-c",
      "cover": "https://api.shshsk.com/files/user/7f000001-93a0-1505-8193-a554bb030003/0b5ee811-fed1-476e-980c-617bc8f803a9.jpeg",
      "role": "ROLE_USER"
    },
    contents:"<p>22</p>",
    createAt : "2024-12-17T15:21:01",
    updatedAt : "2024-12-17T15:21:01"
  },
  {
    id : 'chat_4',
    owner : {
      "id": "7f000001-93a0-1505-8193-a554bb030003",
      "username": "test123",
      "displayName": "김승훈2",
      "status": "NORMAL",
      "description": "<p>ewqewqe</p>",
      "picture": "https://lh3.googleusercontent.com/a/ACg8ocJ50wZ_fWTdWqBvxMRlAOYEgo2EOocZxmWu5KBA9u_SBnXOeQ=s96-c",
      "cover": "https://api.shshsk.com/files/user/7f000001-93a0-1505-8193-a554bb030003/0b5ee811-fed1-476e-980c-617bc8f803a9.jpeg",
      "role": "ROLE_USER"
    },
    contents:"<p>22</p>",
    createAt : "2024-12-17T15:21:01",
    updatedAt : "2024-12-17T15:21:01"
  }
]

interface MessageListProps {
  onChangeChat : (data : CurrentChat) => void
}

export const MessageList = ({onChangeChat} : MessageListProps) => {
  const handleChangeCurrentChat = (item : any) => {
    // item Type정의해야 함.
    const payload = {
      id : item.id,
      owner : item.owner
    }
    onChangeChat(payload)
  }

  return (
    <ul className='flex flex-col gap-4 py-4'>
      {DUMMY_DATAS.map((item) => {
        return (
          <li className='flex gap-2' key={item.id}>
            <Button variant='ghost' className='w-full h-14 justify-start text-left' onClick={() => handleChangeCurrentChat(item)}>
              <Avatar>
                <AvatarImage src={item.owner.picture as string}/>
              </Avatar>
              <div>
                <p className="font-bold">{item.owner.displayName}</p>
                <div className="text-sm text-gray-500">{parse(item.contents)}</div>
              </div>
            </Button>
          </li>
        )
      })}
    </ul>

  )
}