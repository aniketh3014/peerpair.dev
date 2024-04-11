"use server"

import prisma from "@/db/db";
import { authConfig } from "@/lib/authConfig";
import { Room } from "@prisma/client";
import { getServerSession } from "next-auth";
export async function CreateRoom(roomData:Room) {
    const session = await getServerSession(authConfig);
    const data = await prisma.user.findFirst({
        where: {
            email: session!.user!.email
        }, select: {
            id: true
        }
    })    
    try {
        if(!session || !session.user) {
            throw new Error("Session or user not found")
        }
        await prisma.room.create({
            data: {
                name: roomData.name,
                description: roomData.description,
                userId: data?.id!,
                language: roomData.language,
                githubRepo: roomData.githubRepo
            }
        })
    } catch (error) {
        console.log(error)
    }
    
}