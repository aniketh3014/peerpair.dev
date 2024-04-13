"use server"

import prisma from "@/db/db";

export async function getUserId(email: any) {
    const user = await prisma.user.findFirst({
        where: {
            email: email,
        },
        select: {
            id: true,
        },
    });
    return user;
}