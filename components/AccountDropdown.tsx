"use client";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogInIcon } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function AccountDropdown() {
    const session = useSession();
    if (session.data?.user) {
        return (
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <div className="flex hover:underline">
                        <div className="flex flex-col justify-center px-2">{session.data?.user.name}</div>
                        <div>
  <Image 
    src={session.data?.user.image || '/default-avatar.png'} 
    alt="Profile avatar" 
    className="rounded-full" 
    width={40} 
    height={40}
  />
</div>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => signOut({
                        callbackUrl: "/",
                    })}>
                        <LogInIcon className="pr-1"/> Log out
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        );
    } else {
        return (
            <Button onClick={() => signIn()}>Sign in</Button>
        );
    }
}