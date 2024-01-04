import { ArrowUpRight, Github, Info } from "lucide-react";
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

const Projects = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-end">
        <div className=" sm:max-w-[500px] max-w-[250px] pl-4 h-full ">
          <ul className=" flex flex-col gap-5 no-scrollbar">
            {data?.map((project) => (
              <li
                key={project.id}
                className="hover:text-muted-foreground hover:bg-muted rounded-md p-2"
              >
                <span className="flex items-center justify-between">
                  <p className="font-semibold text-base sm:text-2xl">
                    {project.title}.
                  </p>
                  <span className="flex gap-2 items-center">
                    <Dialog>
                      <DialogTrigger>
                        <Info className="hover:text-primary mr-2" />
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>{project.title}.</DialogTitle>
                          <div className="flex">
                            <Image
                              src={project.image}
                              alt={project.title}
                              width={700}
                              height={700}
                              className="w-[1000px] h-auto"
                            />
                          </div>
                          <DialogDescription className="rounded-md">
                            {/* {project.description}. */}
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                    <Link href={project.github}>
                      <Github className="hover:text-primary hidden sm:block" />
                    </Link>
                    <Link href={project.demo}>
                      <ArrowUpRight className="hover:text-primary hidden sm:block" />
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
    </div>
  );
};

export default Projects;
