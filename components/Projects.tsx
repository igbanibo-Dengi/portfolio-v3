"use client";

import { ArrowUpRight, ExternalLink, Github, Info } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React from "react";
import Link from "next/link";
import { data } from "./data";
import Image from "next/image";
import { Badge } from "./ui/badge";

const Projects = () => {
  return (
    <div className="flex flex-col h-full justify-between max-w-[99%] items-end ml-auto">
      <div className="flex flex-col items-end">
        <div className=" sm:max-w-[500px] max-w-[250px] pl-4 h-full ">
          <ul className=" flex flex-col gap-5 no-scrollbar">
            {data?.map((project) => (
              <li
                key={project.id}
                className="hover:text-muted-foreground hover:bg-muted rounded-md p-2"
              >
                <span className="flex items-center justify-between">
                  <p className=" text-base sm:text-2xl">{project.title}.</p>
                  <span className="flex gap-2 items-center">
                    <Dialog>
                      <DialogTrigger>
                        <Info className="hover:text-primary mr-2" />
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>{project.title}.</DialogTitle>
                        </DialogHeader>
                        <div className="flex">
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={800}
                            height={800}
                            className="w-[1000px] h-auto"
                          />
                        </div>
                        <DialogDescription className="rounded-md my-5">
                          {project.details}.
                        </DialogDescription>
                        <div className="block sm:flex justify-between">
                          <div className="flex justify-center gap-3 flex-wrap mb-5">
                            {project.icons.map((icon) => (
                              <Badge className="whitespace-nowrap">
                                {icon}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex gap-3 justify-center">
                            <Link href={project.github} target="_blank">
                              <Github />
                            </Link>
                            <Link href={project.demo} target="_blank">
                              <ExternalLink />
                            </Link>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Link href={project.github} target="_blank">
                      <Github className="hover:text-primary hidden sm:block" />
                    </Link>
                    <Link href={project.demo} target="_blank">
                      <ExternalLink className="hover:text-primary hidden sm:block" />
                    </Link>
                  </span>
                </span>
                <p className="text-xs mt-3 rounded-md">
                  {project.description}.
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex gap-3 w-full rounded-full justify-center items-center whitespace-nowrap overflow-hidden">
        <div className="badges flex gap-3">
          <Badge>HTML</Badge>
          <Badge>CSS</Badge>
          <Badge>JavaScript</Badge>
          <Badge>Typescript</Badge>
          <Badge>React</Badge>
          <Badge>Next</Badge>
          <Badge>Tailwind</Badge>
          <Badge>Git</Badge>
          <Badge>Payload CMS</Badge>
        </div>
      </div>
    </div>
  );
};

export default Projects;
