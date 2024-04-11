import prisma from "@/db/db";

export default async function Home() {
  const rooms = await prisma.room.findMany()
  return (
    <div>
      {rooms.map((room) => (
        <div key={room.id}>{room.name}</div>
      ))}
    </div>
  );
}
