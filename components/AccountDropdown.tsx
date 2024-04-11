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

export default function AccountDropdown() {
    const session = useSession();
    if (session.data?.user) {
        return (
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <div className="flex hover:underline">
                        <div className="flex flex-col justify-center px-2">{session.data?.user.name}</div>
                        <div>
                          <img src={session.data?.user.image!} alt="profile avatar" className="h-10 w-10 rounded-full"/>
                        </div>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => signOut()}>
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