import { makeGetUserUseCase } from '@/use-cases/factory/make-get-user'
import { type FastifyRequest, type FastifyReply } from 'fastify'

export async function profile(request: FastifyRequest, reply: FastifyReply) {
  const getUserUseCase = makeGetUserUseCase()

  const { user } = await getUserUseCase.execute({
    userId: request.userId ?? '',
  })

  return await reply.status(200).send({
    user: {
      ...user,
      password_digest: undefined,
    },
  })
}
