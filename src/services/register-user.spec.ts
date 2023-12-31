import { expect, describe, it } from 'vitest'
import { RegisterUseCase } from './register-user'
import { compare } from 'bcryptjs'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-usres-repository'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'

describe('Register Use Case', () => {
  it('should be able to register', async () => {
    const userRepository = new InMemoryUsersRepository()
    const registerUserCase = new RegisterUseCase(userRepository)

    const { user } = await registerUserCase.handle({
      name: 'Mango Joe',
      email: 'johndoe@example.com',
      password: '123456',
    })

    expect(user.id).toEqual(expect.any(String))
  })

  it('should hash user passwor upon registration', async () => {
    const userRepository = new InMemoryUsersRepository()
    const registerUserCase = new RegisterUseCase(userRepository)

    const { user } = await registerUserCase.handle({
      name: 'Mango Joe',
      email: 'johndoe@example.com',
      password: '123456',
    })

    const isPasswordCorrectlyHashed = await compare(
      '123456',
      user.password_hash,
    )

    expect(isPasswordCorrectlyHashed).toBe(true)
  })

  it('should not be able to register with same email twice', async () => {
    const userRepository = new InMemoryUsersRepository()
    const registerUseCase = new RegisterUseCase(userRepository)

    const email = 'johndoe@example.com'

    await registerUseCase.handle({
      name: 'Mango Joe',
      email,
      password: '123456',
    })

    await expect(() =>
      registerUseCase.handle({
        name: 'Mango Joe',
        email,
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(UserAlreadyExistsError)
  })
})
