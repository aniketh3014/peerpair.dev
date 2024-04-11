import { CreateForm } from "@/components/Create-form";
import { authConfig } from "@/lib/authConfig";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
export default async function() {
    const session = await getServerSession(authConfig);
    if(!session?.user) {
        redirect("/")
    }
    return <div>
        <div className="container mx-auto">
            <h1 className="text-5xl font-bold py-10">Create Room</h1>
            <div className="pb-16">
            <CreateForm />
            </div>
        </div>
    </div>
}