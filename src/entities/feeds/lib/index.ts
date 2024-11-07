import {FeedContents} from "@/entities/feeds/types";
import {QUERY_KEY} from "@/shared/constants/queryKey";

export const getFeedQueryKey = (username?: string) => {
  if(!username) {
    return [QUERY_KEY.FEEDS]
  }
  return [QUERY_KEY.FEEDS, username]
}

export const getFeedSearchParams = (username ?: string) => {
  if(!username) {
    return {
      size: 10,
    }
  }
  return {
    username,
    size: 10,
  }
}

export const getMoreFeeds = (nextId : string, username ?: string) => {
  if(!username) {
    return  {
      size: 10,
      sort: ['string'],
      nextId
    }
  }
  return {
    size: 10,
    username: username,
    sort: ['string'],
    nextId
  }
}
