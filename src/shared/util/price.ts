export const formatPrice = (value: string | number) => {
  if (typeof value === 'string') {
    const numericValue = value.replace(/[^0-9]/g, '') // 숫자 이외의 값 제거
    return `₩${parseInt(numericValue || '0', 10).toLocaleString()}`
  }
  return `₩${value.toLocaleString()}`
}
export const formattedPriceToNumber = (value: string) => {
  const numericValue = value.replace(/[^0-9]/g, '')
  return parseInt(numericValue, 10) || 0
}
