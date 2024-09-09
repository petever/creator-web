import { defineMock } from '@alova/mock'

export default defineMock(
  {
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
