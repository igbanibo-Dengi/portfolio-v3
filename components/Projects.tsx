import { ArrowUpRight, Info } from "lucide-react";
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
import { ScrollArea } from "./ui/scroll-area";

const Projects = () => {
  return (
    <div className="flex flex-col">
      <h3 className="hidden sm:block text-2xl font-semibold text-right mb-10">
        Projects
      </h3>
      <div className="flex flex-col items-end">
        <ScrollArea className="h-[500px] sm:max-w-[500px] max-w-[250px] min-[400px]:h-[700px] min-[1000px]:h-[900px] min-[1100px]:h-[500px] p-4">
          <ul className=" flex flex-col gap-5">
            {data?.map((project) => (
              <li
                key={project.id}
                className="hover:text-muted-foreground hover:bg-muted p-2"
              >
                <span className="flex items-center justify-between">
                  <p className="font-semibold text-base sm:text-2xl">
                    {project.title}.
                  </p>
                  <span className="flex gap-2 items-center">
                    <Dialog>
                      <DialogTrigger>
                        <Info className="hover:text-primary" />
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
                          <DialogDescription>
                            {project.description}.
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                    <Link href="">
                      <ArrowUpRight className="hover:text-primary" />
                    </Link>
                  </span>
                </span>
                <p className="text-xs mt-3">{project.description}.</p>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Projects;
