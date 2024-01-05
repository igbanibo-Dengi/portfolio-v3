import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContactForm from "@/components/ContactForm";
import { ModeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { Dot, Github, Linkedin, Twitter } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import Link from "next/link";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";

export default function Home() {
  return (
    <main className=" h-screen w-screen sm:p-10 p-2 overflow-hidden  no-scrollbar">
      <div className="border rounded-md border-gray-500 h-full  w-full flex flex-col p-4 sm:p-10 overflow-auto ">
        <Tabs defaultValue="home" className="relative h-full">
          <div className="fixed flex justify-between flex-col w-[100px] h-[85vh] xl:h-[80vh]">
            <div className="flex flex-col gap-10">
              <span>
                <h1 className=" text-xl md:text-4xl pb-2 whitespace-nowrap">
                  Igbanibo Dengi
                </h1>
                <h3 className="whitespace-nowrap">Front End Developer</h3>
              </span>

              <TabsList>
                <TabsTrigger value="home">Home</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="resume">Resume</TabsTrigger>
                <TabsTrigger value="contact-large" className="hidden xl:block">
                  Contact
                </TabsTrigger>
                {/* ==================================DRAWER =======================================*/}
                <div className="xl:hidden">
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

            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className="hover:text-primary w-fit hover:animate-pulse"
              >
                <Linkedin />
              </Link>
              <Link
                href="/"
                className="hover:text-primary w-fit hover:animate-pulse"
              >
                <Twitter />
              </Link>
              <Link
                href="/"
                className="hover:text-primary w-fit hover:animate-pulse"
              >
                <Github />
              </Link>
              <ModeToggle />
            </div>
          </div>
          <div className="w-full h-full">
            <TabsContent value="home">
              <div className="flex flex-col justify-center  items-end h-full">
                <div className="flex justify-end lg:justify-between w-full max-w-[800px]  overflow-hidden">
                  <p className="w-[280px] hidden mx-auto xl:mx-0 h-fit my-auto sm:block text-sm sm:text-base sm:font-semibold ">
                    Hi, I'm a front end focused web developer based in Nigeria.
                    I thrive on the art of creating captivating, scalable, and
                    responsive web designs.My journey is marked by a proven
                    track record, demonstrating my prowess in both solo and
                    collaborative projects. I bring not just technical expertise
                    but also a unique blend of creativity and adaptability to
                    every web development endeavor. Dive into my portfolio, and
                    let's embark on a journey where innovation meets
                    functionality.
                  </p>
                  <p className="w-[200px] sm:hidden text-sm sm:font-semibold pt-20 max-[400px]:pt-0">
                    Hi, I'm a front end focused web developer based in Nigeria.
                    I thrive on the art of creating captivating, scalable, and
                    responsive web designs. I bring not just technical expertise
                    but also a unique blend of creativity and adaptability to
                    every web development endeavor. Dive into my portfolio, and
                    let's embark on a journey where innovation meets
                    functionality.
                  </p>

                  <div className="hidden  sm:flex justify-center gap-2 items-center overflow-hidden">
                    <div className="marquee">
                      <p>HTML</p>

                      <Dot />
                      <p>CSS</p>

                      <Dot />
                      <p>JavaScript</p>

                      <Dot />
                      <p>Typescript</p>

                      <Dot />
                      <p>React</p>

                      <Dot />
                      <p>Next</p>

                      <Dot />
                      <p>Tailwind</p>

                      <Dot />
                      <p>Git</p>

                      <Dot />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="projects" className="pt-24 md:pt-36 xl:pt-0">
              <Projects />
            </TabsContent>
            <TabsContent value="resume">
              <Resume />
            </TabsContent>
            <TabsContent value="contact-large">
              <ContactForm />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </main>
  );
}
