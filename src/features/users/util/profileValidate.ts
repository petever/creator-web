export const validateDisplayName = (displayName: string) => {
  if (displayName.length < 2 || displayName.length > 25) {
    return '닉네임은 2자 이상, 25자 이하여야 합니다'
  }
  return null
}

export const validateUsername = (username: string) => {
  const regex = /^(?!.*\.\.)(?!.*\.$)[a-zA-Z0-9._]+$/
  if (username.length < 2 || username.length > 25) {
    return '사용자 이름은 3자 이상, 25자 이하여야 합니다'
  }
  if (!regex.test(username)) {
    return '사용자 이름은 영문자, 숫자, 밑줄(_), 마침표(.)만 사용할 수 있으며, 마침표는 처음과 끝에 올 수 없고 연속해서 사용할 수 없습니다'
  }
  return null
}
