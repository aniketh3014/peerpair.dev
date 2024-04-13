"use client"

import { signIn } from "next-auth/react";

export function GetStartedButton() {
    return (
        <button onClick={()=> signIn()} className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg cursor-pointer" />
            <div className="px-8 py-3 flex font-bold rounded-[6px]  relative group transition duration-200 text-white ">
                Get Started
            </div>
        </button>
    );
}
