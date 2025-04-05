import { type FastifyReply, type FastifyRequest } from 'fastify'
import { verify } from 'jsonwebtoken'
import 'dotenv/config'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { env } from '@/env'

interface IPayload {
  sub: string
}

export async function authentication(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const headerAuthorization = request.headers.authorization
    if (headerAuthorization === undefined) {
      throw new Error()
    }
    const [, token] = headerAuthorization.split(' ')

    const { sub: user_id } = verify(token, env.JWT_SECRET) as IPayload

    const usersRepository = new PrismaUsersRepository()

    const user = await usersRepository.findById(user_id)

    if (user === null) {
      throw new Error()
    }

    request.userId = user.id
  } catch (error) {
    return await reply.status(401).send({ message: 'Token JWT inválido' })
  }
}
