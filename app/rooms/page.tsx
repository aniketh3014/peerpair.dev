import { JoinCard } from "@/components/JoinCard";
import { authConfig } from "@/lib/authConfig";
import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation'
import { getRooms } from "../../data-src/dataSrc";
import { Button } from "@/components/ui/button";
import { CreatePageButton } from "@/components/CreatePageButton";

export default async function() {
    const session = await getServerSession(authConfig);
    if(!session) {
        throw new Error("Session not found")
    }
    const rooms = await getRooms();
    return(
        <div className="container mx-auto">
            <div className="flex justify-between px-16 py-10">
                <div>
                    <h1 className="text-5xl font-bold">Rooms</h1>
                </div>
                <div>
                    <CreatePageButton />
                </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-3 gap-1">
            {rooms.map(room => <JoinCard room={room} key={room.id} />)}
            </div>
        </div>
    );
}