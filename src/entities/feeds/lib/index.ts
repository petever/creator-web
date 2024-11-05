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
      page: 0,
      size: 10,
    }
  }
  return {
    username,
    page: 0,
    size: 10,
  }
}

export const getMoreFeeds = (allFeeds : FeedContents[], username ?: string) => {
  if(!username) {
    return  {
      size: 10,
      page: allFeeds.length + 10,
      sort: ['string'],
    }
  }
  return {
    size: 10,
    page: allFeeds.length + 10,
    username: username,
    sort: ['string'],
  }
}
