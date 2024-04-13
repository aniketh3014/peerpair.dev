"use server"

import prisma from "@/db/db"

export async function deleteAccount({id}: {id: string}) {
    await prisma.user.delete({
        where:{
            id: id
        }
    })
}