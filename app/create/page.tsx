import { CreateForm } from "@/components/Create-form";

export default function() {
    return <div>
        <div className="container mx-auto">
            <h1 className="text-5xl font-bold py-10">Create Room</h1>
            <div className="pb-16">
            <CreateForm />
            </div>
        </div>
    </div>
}