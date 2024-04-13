import { HeroHighlightDemo } from "@/components/Dot-header";
import { Footer } from "@/components/Footer";
import { MacbookScrollDemo } from "@/components/Mac-animation";
import { authConfig } from "@/lib/authConfig";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession(authConfig);
  if(session?.user) {
    redirect("/rooms");
  }
  return <div>
    <div>
      <div>
      <HeroHighlightDemo />
      </div>
      <MacbookScrollDemo />
      <Footer />
    </div>
  </div>
}