"use client";

import { ExternalLink, Github, Info } from "lucide-react";

import React from "react";
import Link from "next/link";
import { data } from "./data";
import { Badge } from "./ui/badge";

const Projects = () => {
  return (
    <div className="flex flex-col h-full justify-between max-w-[99%] items-end ml-auto no-scrollbar">
      <div className="flex flex-col items-center gap-5 justify-between xl:justify-around h-full">
        <div className="size-fit hidden lg:flex flex-col mx-auto">
          <h2 className="text-center mb-5 font-semibold text-lg underline">Skills</h2>
          <div className="flex justify-center gap-2 items-center flex-wrap max-w-[400px] xl:max-w-[500px]">
            <Badge>HTML 5</Badge>
            <Badge>CSS 3</Badge>
            <Badge>JavaScript (ES6+)</Badge>
            <Badge>Typescript</Badge>
            <Badge>React.js</Badge>
            <Badge>Next.js</Badge>
            <Badge>SASS</Badge>
            <Badge>Redux</Badge>
            <Badge>Docker</Badge>
            <Badge>Git</Badge>
            <Badge>Prisma</Badge>
            <Badge>Tailwind</Badge>
            <Badge>MongoDB</Badge>
          </div>
        </div>
        <div className=" sm:max-w-[500px] max-w-[250px] pl-4 h-fit my-auto">
          <h2 className="hidden md:block text-center mb-5 font-semibold text-lg underline">Projects</h2>
          <ul className=" flex flex-col gap-5 no-scrollbar pt-6 md:pt-0 ">
            {data?.map((project) => (
              <li
                key={project.id}
                className="hover:text-muted-foreground hover:bg-muted rounded-md p-2"
              >
                <span className="flex items-center justify-between">
                  <p className=" text-base sm:text-2xl">{project.title}.</p>
                  <span className="flex gap-2 items-center">
                    <Link href={project.link}>
                      <Info className="hover:text-primary mr-2" />
                    </Link>
                    <Link href={project.github} target="_blank">
                      <Github className="hover:text-primary hidden sm:block" />
                    </Link>
                    <Link href={project.demo} target="_blank">
                      <ExternalLink className="hover:text-primary hidden sm:block" />
                    </Link>
                  </span>
                </span>
                <p className="text-xs mt-3 rounded-md hidden sm:block">
                  {project.description}.
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
