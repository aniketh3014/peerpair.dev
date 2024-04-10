import { CreateForm } from "@/components/Create-form";

export default function() {
    return <div>
        <div className="container mx-auto">
            <h1 className="text-5xl font-bold">Create Room</h1>
            <div className="pt-16 pb-16">
            <CreateForm />
            </div>
        </div>
    </div>
}