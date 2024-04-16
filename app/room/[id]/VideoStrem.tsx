"use client";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import { Room } from "@prisma/client";
import {
  Call,
  CallControls,
  CallParticipantsList,
  SpeakerLayout,
  StreamCall,
  StreamTheme,
  StreamVideo,
  StreamVideoClient,
} from "@stream-io/video-react-sdk";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { generateTokenAction } from "@/app/actions/tokengenAction";
import { useRouter } from "next/navigation";
import { deleteRoom } from "@/app/actions/deleteRoom";

const apiKey = process.env.STREAM_KEY as string;

export function PeerStrem({ room, Id }: { room: Room, Id: string}) {
  const session = useSession();
  const [client, setClient] = useState<StreamVideoClient | null>(null);
  const [call, setCall] = useState<Call | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!room) return;
    if (!session.data?.user) {
      return;
    }
    const userId = Id;
    const client = new StreamVideoClient({
      apiKey,
      user: {
        id: userId,
        name: session.data.user.name ?? undefined,
        image: session.data.user.image ?? undefined,
      },
      tokenProvider: () => generateTokenAction(Id),
    });
    const call = client.call("default", room.id);
    call.join({ create: true });
    setClient(client);
    setCall(call);

    return () => {
      call
        .leave()
        .then(() => client.disconnectUser())
        .catch(console.error);
    };
  }, [session, room, Id]);

  return (
    client &&
    call && (
      <StreamVideo client={client}>
        <StreamTheme>
          <StreamCall call={call}>
            <SpeakerLayout />
            <CallControls
              onLeave={async() => {
                if(room.userId === Id) {
                  await deleteRoom({ roomId: room.id})
                }
                router.push("/rooms");
              }}
            />
            <CallParticipantsList onClose={() => undefined} />
          </StreamCall>
        </StreamTheme>
      </StreamVideo>
    )
  );
}