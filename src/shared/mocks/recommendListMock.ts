import { defineMock } from '@alova/mock'

export default defineMock(
  {
    '[GET]/recommend': ({ params }) => {
      // ...
      return [
        {
          name : '김승훈',
          id : 'ksh',
          tag : '@ksh',
          url : '',
          description : '가나다라마바사'
        }
      ]
    },
  },
  true,
)
