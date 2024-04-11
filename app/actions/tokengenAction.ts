"use server";

import { StreamChat } from "stream-chat";

export async function generateTokenAction(Id: string) {

  const api_key = process.env.STREAM_KEY!;
  const api_secret = process.env.GET_STREAM_SECRET_KEY!;
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  const token = serverClient.createToken(Id);
  console.log("token", token);
  return token;
}