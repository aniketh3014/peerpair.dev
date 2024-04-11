"use client";

import { ModeToggle } from "../ModeToggle";
import AccountDropdown from "../AccountDropdown";
import Link from "next/link";

export function Header() {
    return (
        <header className="bg-slate-100 dark:bg-slate-800 container mx-auto p-4">
            <div className="flex justify-between">
                <Link href="/" className="flex flex-col justify-center">
                    <div className=" hover:underline">
                        LOGO
                    </div>
                </Link>
            <div className="flex">
                <div className="px-4">
                    <ModeToggle />
                </div>
                <AccountDropdown />
            </div>
        </div>
        </header>
    );
}
