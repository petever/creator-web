import { defineMock } from '@alova/mock'

export default defineMock(
  {
    '[GET]/feeds': () => {
      return {
        status: '200',
      }
    },
    '[POST]/feed/favorite/{id}': ({ params }) => {
      const id = params.id
      // ...
      return {
        status: '200',
      }
    },
  },
  true,
)
