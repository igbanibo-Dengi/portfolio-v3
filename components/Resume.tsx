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
          href="resume.pdf"
          download="Example-PDF-document"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary"
        >
          <Download />
        </Link>
        <Link
          href="https://www.canva.com/design/DAFQd5_hAxA/titdLeytVHqWMQmJWRWgGw/view?utm_content=DAFQd5_hAxA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
          target="_blank"
        >
          <ExternalLink />
        </Link>
      </div>
      <div>
        <div className="flex justify-center gap-2 items-center flex-wrap">
          <Badge>HTML</Badge>
          <Badge>CSS</Badge>
          <Badge>JavaScript</Badge>
          <Badge>Typescript</Badge>
          <Badge>React</Badge>
          <Badge>Next</Badge>
          <Badge>Tailwind</Badge>
          <Badge>Redux</Badge>
          <Badge>Git</Badge>
          <Badge>Payload CMS</Badge>
        </div>
      </div>
    </div>
  );
};

export default Resume;
