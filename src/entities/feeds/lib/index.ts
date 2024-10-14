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
