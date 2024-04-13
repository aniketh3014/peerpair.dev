"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useState } from "react";
import { deleteAccount } from "@/app/actions/deleteAccount";
import { getUserId } from "@/app/actions/getUseId";
import { useToast } from "@/components/ui/use-toast";

export default function AccountDropdown() {
    const session = useSession();
    const email = session.data?.user?.email;
    const [open, setOpen] = useState(false);
    const { toast } = useToast();

    if (session.data?.user) {
        return (
            <div>
                <AlertDialog open={open} onOpenChange={setOpen}>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action will permanently remove your account and any data related to this account.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                                onClick={async () => {
                                    const user = await getUserId(email);
                                    if (user) {
                                        await deleteAccount({ id: user.id });
                                        toast({
                                            title: "Account Deleted",
                                            description: "Your account has been deleted successfully",
                                        });
                                        await signOut({
                                            callbackUrl: "/",
                                        });
                                    } else {
                                        toast({
                                            title: "Error",
                                            description: "User not found",
                                        });
                                    }
                                }}
                            >
                                Yes, delete my account
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <div className="flex hover:underline">
                            <div className="flex flex-col justify-center px-2">{session.data?.user.name}</div>
                            <div>
                                <Image
                                    src={session.data?.user.image || "/avatar.png"}
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
                        <DropdownMenuItem
                            onClick={() => {
                                toast({
                                    title: "Signed out",
                                    description: "You have been signed out successfully.",
                                });
                                signOut({
                                    callbackUrl: "/",
                                });
                            }}
                        >
                            Log out
                        </DropdownMenuItem>

                        <DropdownMenuItem onClick={() => setOpen(true)}>
                            <div className="text-red-800">Delete account</div>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        );
    } else {
        return <Button onClick={() => signIn()}>Sign in</Button>;
    }
}
