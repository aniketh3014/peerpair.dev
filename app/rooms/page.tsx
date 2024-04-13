import { JoinCard } from "@/components/JoinCard";
import { authConfig } from "@/lib/authConfig";
import { getServerSession } from "next-auth";
import { getRooms } from "../../data-src/dataSrc";
import { CreatePageButton } from "@/components/CreatePageButton";
import { redirect } from "next/navigation";
import { unstable_noStore } from "next/cache";

export default async function RoomsPage() {

    const session = await getServerSession(authConfig);
    if(!session?.user) {
        redirect("/")
    }
    const rooms = await getRooms();
    return(
        <div className="container mx-auto pt-28">
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