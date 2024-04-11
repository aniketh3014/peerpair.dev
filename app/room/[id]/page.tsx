import { getRoom } from "@/data-src/dataSrc";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge"
import { sptliTag } from "@/components/Tags";
import { PeerStrem } from "./VideoStrem";
import prisma from "@/db/db";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/authConfig";

export default async function(props: {params: {id: string}}) {
    const session = await getServerSession(authConfig);
    const user = await prisma.user.findFirst({
        where: {
            email: session!.user?.email
        }, select: {
            id: true
        }
    })
    const roomId = props.params.id;
    const room = await getRoom(roomId);
    if(!user) {
        return <div>User not found</div>
    }
    if(!room) {
        return <div>Room not found</div>
    }
    const tags = sptliTag(room.language)
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-6 min-h-screen gap-2">
                <div className="col-span-4 p-2">
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                      <PeerStrem room={room} Id={user.id} />
                    </div>
                </div>
                
                <div className="col-span-2 p-2">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                    <h1 className="text-lg pb-2">{room.name}</h1>
                    <p className="text-gray-500">{room.description}</p>
                    {room.githubRepo && (
                    <Link
                    href={room.githubRepo}
                    className="flex items-center gap-2 pt-3 text-sm hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <GithubIcon />
                    Github Project
                    </Link>
                    )}
                    <div className="pt-3">Tags:</div>
                    <div className="flex flex-wrap gap-2 pt-2">
                    {tags.map((tag)=> <div>
                    <Badge key={tag} variant="outline">{tag}</Badge>
                    </div>)}
                    </div>
                    
                </div>
                </div>
            </div>
            
        </div>
    )
}