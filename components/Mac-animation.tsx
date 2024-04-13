import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { GetStartedButton } from "./getStartedButton";


export function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-auto">
      <MacbookScroll
        title={
          <span className="text-neutral-700 dark:text-neutral-400 lg:text-2xl">
            Real-Time Collaboration: Share screens, video chat, and <br/> code together seamlessly with <p className="text-blue-500">PeerPair.dev</p>
          </span>
        }
        src={`/linear.webp`}
        showGradient={false}
      />
      <div className="flex justify-center">
        <GetStartedButton/>
      </div>
    </div>
  );
}