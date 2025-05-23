"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <motion.div
      // animate={{
      //     backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      // }}
      className="h-[30rem]  p-3 xl:h-[30rem ] overflow-y-auto flex xl:gap-10 no-scrollbar justify-center relative rounded-md"
      ref={ref}
    >
      <div className="div relative flex items-start size-fit xl:w-1/3">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.2,
                }}
                className="text-2xl font-bold text-center"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.2,
                }}
                className="text-sm  max-w-sm mt-10 text-center"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-0 xl:h-0" />
        </div>
      </div>
      <motion.div
        // animate={{
        //     background: linearGradients[activeCard % linearGradients.length],
        // }}
        className={cn(
          "xl:w-2/3 h-full my-auto rounded-md hidden xl:block xl:sticky xl:top-0 overflow-hidden",
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  );
};
