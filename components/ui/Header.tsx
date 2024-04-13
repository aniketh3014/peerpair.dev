"use client";

import { ModeToggle } from "../ModeToggle";
import AccountDropdown from "../AccountDropdown";
import Link from "next/link";
import Image from "next/image";

export function Header() {
    return (
        <header className="bg-slate-100/80 dark:bg-gray-900/90 p-4 lg:px-10">
            <div className="container mx-auto">
            <div className="flex justify-between">
                <Link href="/" className="flex flex-col justify-center">
                    <div className="flex">
                        <Image src="/logo.png" alt="logo" width={55} height={55} />
                        <div className="flex flex-col justify-center font-bold text-teal-400">
                            PeerPair.dev
                        </div>
                    </div>
                </Link>
            <div className="flex">
                <div className="px-4">
                    <ModeToggle />
                </div>
                <AccountDropdown />
            </div>
        </div>
        </div>
        </header>
    );
}
