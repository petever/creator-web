export interface Pagination {
  paged: boolean
  pageNumber: number
  pageSize: number
  offSet: number
  sort: Sort
  unpaged: boolean
}

export interface Sort {
  sorted: boolean
  empty: boolean
  unsorted: boolean
}

export interface Owner {
  id: string
  username: string
  displayName: string
  status: string
  picture: string
  cover: string
  role: string
}
