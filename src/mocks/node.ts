import { setupServer } from 'msw/node'
import { handlers } from './handlers'
import worker from './browser'

const server = setupServer(...handlers)

export default server
