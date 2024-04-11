"use server"

import prisma from "@/db/db";

export async function deleteRoom({roomId}: {roomId: string}) {
    await prisma.room.delete({
        where: {
            id: roomId
        }
    })
}