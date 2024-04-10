import NextAuth from "next-auth"
import { PrismaClient } from "@prisma/client"
import { authConfig } from "@/lib/authConfig"

const handler = NextAuth(authConfig)
export { handler as GET, handler as POST }