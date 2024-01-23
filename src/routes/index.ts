import { authenticate } from '@/controllers/authenticate'
import { profile } from '@/controllers/profile'
import { registerUser } from '@/controllers/register'
import { FastifyInstance } from 'fastify'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', registerUser)
  app.post('/sessions', authenticate)

  /** Authenticated */
  app.get('/me', profile)
}
