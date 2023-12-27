import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { RegisterUseCase } from '@/services/register-user'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'

export async function registerUser(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { email, name, password } = registerBodySchema.parse(request.body)

  try {
    const prismaUsersRepository = new PrismaUsersRepository()
    const registerUseCase = new RegisterUseCase(prismaUsersRepository)
    await registerUseCase.handle({
      name,
      email,
      password,
    })
  } catch (error) {
    return reply.status(409).send()
  }

  return reply.status(201).send
}
