import { defineMock } from '@alova/mock'

export default defineMock(
  {
    '[POST]/login': ({ query, data }) => {
      console.log('query', query)
      return {
        id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        username: 'string',
        picture: 'string',
        accessToken: 'string',
      }
    },
  },
  true,
)
