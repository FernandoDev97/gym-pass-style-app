import { authenticate } from '@/controllers/authenticate'
import { registerUser } from '@/controllers/register'
import { FastifyInstance } from 'fastify'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', registerUser)
  app.post('/sessions', authenticate)
}
