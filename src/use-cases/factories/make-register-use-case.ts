import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { RegisterUsersUseCase } from '../register-user'

export function makeRegisterUseCase() {
  const prismaUsersRepository = new PrismaUsersRepository()
  const registerUseCase = new RegisterUsersUseCase(prismaUsersRepository)

  return registerUseCase
}
