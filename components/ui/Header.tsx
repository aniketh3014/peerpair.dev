"use client"
import { useSession } from "next-auth/react";
import { Button } from "./button";
import { ModeToggle } from "../ModeToggle";
import AccountDropdown from "../AccountDropdown";

export function Header() {
    const session = useSession();
    return (
        <header className="bg-slate-100 dark:bg-slate-800 container mx-auto p-4">
            <div className="flex justify-between">
                <div className="flex flex-col justify-center">
                    LOGO
                </div>
            <div className="flex justify-center">
                <div className="px-4">
                    <ModeToggle/>
                </div>
                <AccountDropdown />
                {/* <div>
                    {session.data? (<Button >Log out</Button>): (<Button >Sign in</Button>)}
                </div> */}
            </div>
            </div>
            
            
        </header>

    );
}