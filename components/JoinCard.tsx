"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Room } from "@prisma/client";
import { GithubIcon } from "lucide-react";
import { sptliTag } from "./Tags";
import { Badge } from "./ui/badge";

export function JoinCard({ room }: { room: Room }) {
    const tags = sptliTag(room.language);
    
    return (
        <Card>
            <CardHeader>
                <CardTitle>{room.name}</CardTitle>
                <CardDescription>{room.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <div>
                            <Badge key={tag} variant="outline">
                                {tag}
                            </Badge>
                        </div>
                    ))}
                </div>
            </CardContent>
            <CardContent>
                {room.githubRepo && (
                    <Link
                        href={room.githubRepo}
                        className="flex items-center gap-2 text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GithubIcon />
                        Github Project
                    </Link>
                )}
            </CardContent>
            <CardFooter>
                <Button asChild>
                    <Link href={`/room/${room.id}`}>Join Room</Link>
                </Button>
            </CardFooter>
        </Card>
    );
}