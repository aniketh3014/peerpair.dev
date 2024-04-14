import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { GetStartedButton } from "./getStartedButton";


export function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-auto">
      <MacbookScroll
        title={
          <span className="text-neutral-700 dark:text-neutral-400 lg:text-2xl">
            Start collaborating with your peers seamlessly <br/>with<p className="text-blue-500 inline"> PeerPair.dev</p>
          </span>
        }
        src={`/demo.png`}
        showGradient={false}
      />
      <div className="flex justify-center">
        <GetStartedButton/>
      </div>
    </div>
  );
}