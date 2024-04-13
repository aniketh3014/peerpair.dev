"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight"
import { ShimmerButton } from "./ShimmerButton";
 
export function HeroHighlightDemo() {
  return (
    <div className="relative">
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-4xl px-4 md:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Code smarter, together. Experience the power of
        <br/>
        {" "}
        <Highlight className="text-black dark:text-white mt-2">
        pair programming
        </Highlight>
      </motion.h1>
      <p className="container mx-auto pt-6 lg:pr-10 text-sm lg:pl-10 lg:text-xl text-neutral-700 dark:text-neutral-300 max-w-4xl leading-relaxed lg:leading-snug text-center  ">
        Struggling to find a coding buddy? We connect you with developers of all skill levels for instant pair programming sessions. Share screens, brainstorm ideas, and write better code together.
        </p>
        <div className="flex justify-center pt-6">
          <ShimmerButton/>
        </div>
    </HeroHighlight>
    
    </div>
  );
}