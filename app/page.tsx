import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContactForm from "@/components/ContactForm";
import { ModeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen w-screen p-5">
      <div className="border border-gray-500 h-full w-full flex p-10">
        <Tabs defaultValue="home" className="flex w-full">
          <div className="basis-1/3 mt-10 h-full flex flex-col gap-5">
            <span>
              <h1 className=" text-4xl pb-2">Igbanibo Dengi</h1>
              <h3>Front End Developer</h3>
            </span>

            <TabsList>
              <TabsTrigger value="home">Home</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="resume">Resume</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
            </TabsList>
          </div>
          <div className="basis-2/3 h-full">
            <TabsContent value="home">
              <div className="flex items-center justify-center h-full w-full">
                <p className="w-[300px] font-semibold">
                  Hi, I'm a front end focused web developer based in Nigeria. I
                  thrive on the art of creating captivating, scalable, and
                  responsive web designs.My journey is marked by a proven track
                  record, demonstrating my prowess in both solo and
                  collaborative projects. I bring not just technical expertise
                  but also a unique blend of creativity and adaptability to
                  every web development endeavor. Dive into my portfolio, and
                  let's embark on a journey where innovation meets functionality
                </p>
              </div>
            </TabsContent>
            <TabsContent value="projects">Projects.</TabsContent>
            <TabsContent value="resume">Resume.</TabsContent>
            <TabsContent value="contact">
              <ContactForm />
            </TabsContent>
          </div>
        </Tabs>
        <div className="flex flex-col gap-3">
          <Linkedin />
          <Twitter />
          <Github />
        </div>
      </div>
      {/* <ModeToggle /> */}
    </main>
  );
}
