import { PrismaClient, Room } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma
export type { Room }

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma