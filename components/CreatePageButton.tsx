"use client"
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export function CreatePageButton() {
    const router = useRouter();
    return <div>
        <Button onClick={() => router.push("/create")}>Create Room</Button>
    </div>
}