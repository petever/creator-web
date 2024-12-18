import {getServerFeedDetail} from "@/entities/feeds/api/getServerFeedDetail";
import FeedDetail from "@/pageModules/feeds/FeedPage";

export default async function FeedDetailPage({params} : { params : Promise<{id : string}> } ) {
  if(!params) return

  const id = (await params).id as string

  const initialFeed = await getServerFeedDetail(id)
  return <FeedDetail initialFeed={initialFeed}/>
}
