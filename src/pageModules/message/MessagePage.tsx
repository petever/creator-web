import {getFeedRecommendUsers} from "@/shared/RecommentList/api/getFeedRecommendUsers";
import {Message} from "@/widgets/message/ui/Message";

const MessagePage = async () => {
  const recommends = await getFeedRecommendUsers()

  return (
    <Message recommends={recommends}/>
  )
}

export default MessagePage
