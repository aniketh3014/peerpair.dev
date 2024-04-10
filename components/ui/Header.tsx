"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./button";
import { ModeToggle } from "../ModeToggle";

export function Header() {
    const session = useSession();
    return (
        <header>
            <div>
                <div>
                    {session.data? (<Button onClick={() => signOut()}>Sign out</Button>): (<Button onClick={() => {signIn()}}>Sign in</Button>)}
                </div>
                <div>
                    <ModeToggle/>
                </div>
            </div>
            
        </header>

    );
}