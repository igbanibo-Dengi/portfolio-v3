"use client";

import { Download, ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Badge } from "./ui/badge";

const Resume = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center h-full w-full">
      <div className="flex gap-2">
        <Link
          href="Igbanibo_Alex _Resume.pdf"
          download="resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary"
        >
          <Download />
        </Link>
        <Link
          href="https://drive.google.com/file/d/1RjW1683ekV_hK-Hc2I-mh62FGobH3feg/view?usp=sharing"
          target="_blank"
        >
          <ExternalLink />
        </Link>
      </div>
      <div>
        <div className="flex justify-center gap-2 items-center flex-wrap max-w-[500px]">
          <Badge>HTML 5</Badge>
          <Badge>CSS 3</Badge>
          <Badge>JavaScript (ES6+)</Badge>
          <Badge>Typescript</Badge>
          <Badge>React.js</Badge>
          <Badge>Next.js</Badge>
          <Badge>SASS</Badge>
          <Badge>Tailwind</Badge>
          <Badge>Redux</Badge>
          <Badge>Docker</Badge>
          <Badge>Git</Badge>
          <Badge>Prisma</Badge>
          <Badge>MongoDB</Badge>
        </div>
      </div>
    </div>
  );
};

export default Resume;
