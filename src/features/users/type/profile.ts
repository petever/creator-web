export type UpdateProfile = {
  editUserRequest: {
    displayName: string
    username: string
    status: string
  }
  picture?: FormData | string
  cover?: FormData | string
}
