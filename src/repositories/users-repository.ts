import { type Prisma, type User } from '@prisma/client'

export interface UsersRepository {
  create: (data: Prisma.UserCreateInput) => Promise<User>
  findByEmail: (email: string) => Promise<User | null>
  findById: (id: string) => Promise<User | null>
  delete: (id: string) => Promise<User>
  patchPassword: (id: string, password: string) => Promise<User>
}
