import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContactForm from "@/components/ContactForm";
import { ModeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen w-screen sm:p-10 p-2">
      <div className="border border-gray-500 h-full  w-full flex flex-col p-4">
        <span className=" sm:hidden mb-6">
          <h1 className=" text-2xl pb-2">Igbanibo Dengi</h1>
          <h3>Front End Developer</h3>
        </span>
        <Tabs defaultValue="home" className="flex h-full w-full">
          <div className="w-[20%] mt-10 h-full flex justify-between flex-col gap-5">
            <div>
              <span className="hidden sm:block mb-5">
                <h1 className=" text-4xl pb-2">Igbanibo Dengi</h1>
                <h3>Front End Developer</h3>
              </span>

              <TabsList>
                <TabsTrigger value="home">Home</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="resume">Resume</TabsTrigger>
                <TabsTrigger value="contact-large" className="hidden lg:block">
                  Contact
                </TabsTrigger>
                {/* ==================================DRAWER =====================================================================*/}
                <div className="lg:hidden">
                  <Drawer>
                    <DrawerTrigger className="text-muted-foreground">
                      Contact
                    </DrawerTrigger>
                    <DrawerContent>
                      <div className=" py-10 px-5">
                        <ContactForm />
                      </div>
                    </DrawerContent>
                  </Drawer>
                </div>
              </TabsList>
            </div>

            <div className="flex flex-col gap-3 mb-10">
              <Link href="/">
                <Linkedin />
              </Link>
              <Link href="/">
                <Twitter />
              </Link>
              <Link href="/">
                <Github />
              </Link>
              <ModeToggle />
            </div>
          </div>
          <div className="w-[80%] h-full mt-10">
            <TabsContent value="home">
              <div className="flex flex-col gap-8 items-end sm:items-center sm:justify-center h-full w-full">
                <p className="w-[280px] hidden sm:block text-sm sm:font-semibold">
                  Hi, I'm a front end focused web developer based in Nigeria. I
                  thrive on the art of creating captivating, scalable, and
                  responsive web designs.My journey is marked by a proven track
                  record, demonstrating my prowess in both solo and
                  collaborative projects. I bring not just technical expertise
                  but also a unique blend of creativity and adaptability to
                  every web development endeavor. Dive into my portfolio, and
                  let's embark on a journey where innovation meets functionality
                </p>
                <p className="w-[200px] sm:hidden text-sm sm:font-semibold">
                  Hi, I'm a front end focused web developer based in Nigeria. I
                  thrive on the art of creating captivating, scalable, and
                  responsive web designs. I bring not just technical expertise
                  but also a unique blend of creativity and adaptability to
                  every web development endeavor. Dive into my portfolio, and
                  let's embark on a journey where innovation meets functionality
                </p>
                <div className="flex flex-wrap gap-2 w-full justify-center items-center">
                  <Badge>HTML</Badge>
                  <Badge>CSS</Badge>
                  <Badge>JavaScript</Badge>
                  <Badge>Typescript</Badge>
                  <Badge>React</Badge>
                  <Badge>Next</Badge>
                  <Badge>Tailwind</Badge>
                  <Badge>Git</Badge>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="projects">Projects.</TabsContent>
            <TabsContent value="resume">Resume.</TabsContent>
            <TabsContent value="contact-large">
              <ContactForm />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </main>
  );
}
