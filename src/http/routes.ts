import { type FastifyInstance } from 'fastify'
import { register } from './controllers/register'
import { authenticate } from './controllers/authenticate'
import { authentication } from '@/middlewares/authentication'
import { profile } from './controllers/profile'

export async function routes(app: FastifyInstance) {
  app.post('/users', register)

  app.post('/sessions', authenticate)

  app.get('/profile', { preHandler: [authentication] }, profile)
}
