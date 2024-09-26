'use client'

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContactForm from "@/components/ContactForm";
import { ModeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { Dot, Github, Linkedin, Twitter } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import Link from "next/link";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import { HoverBorderGradient } from '@/components/hover-border-gradient';
// import Experience from '@/components/Experience';

export default function Home() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('tab') || 'home';
  const [defaultTab, setDefaultTab] = useState(initialTab);

  useEffect(() => {
    const tab = searchParams.get("tab");
    // console.log("Query parameter tab:", tab);
    if (tab) {
      setDefaultTab(tab);
      const url = new URL(window.location.href);
      url.searchParams.delete("tab");
      window.history.replaceState(null, "", url.toString());
    }
  }, [searchParams]);

  // console.log('Default tab state:', defaultTab);

  return (
    <main className="mx-auto h-screen w-screen sm:p-10 p-2 overflow-hidden no-scrollbar bg-cover bg-center">
      {/* <div className="border rounded-md border-gray-500 h-full overflow-y-scroll no-scrollbar w-full flex flex-col p-4 sm:p-10"> */}
      <HoverBorderGradient
        containerClassName="mx-auto h-full w-full rounded-lg border-2 border-gray-500 p-4 sm:p-10"
        // as="button"
        // className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        className="rounded-lg text-left"
        duration={2}
      >
        <Tabs defaultValue={defaultTab} className="relative h-full z-50">
          <div className="fixed flex justify-between flex-col w-[100px] h-[85vh] xl:h-[80vh]">
            <div className="flex flex-col gap-10">
              <span>
                <h1 className="text-xl md:text-4xl pb-2 whitespace-nowrap">
                  Igbanibo Dengi Alex
                </h1>
                <h3 className="whitespace-nowrap">Front End Developer</h3>
              </span>

              <TabsList>
                <TabsTrigger value="home">Home</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="resume">Resume</TabsTrigger>
                {/* <TabsTrigger value="experience">Experience</TabsTrigger> */}
                <TabsTrigger value="contact-large" className="hidden xl:block">
                  Contact
                </TabsTrigger>
                <div className="xl:hidden">
                  <Drawer>
                    <DrawerTrigger className="text-muted-foreground">
                      Contact
                    </DrawerTrigger>
                    <DrawerContent>
                      <div className="py-10 px-5">
                        <ContactForm />
                      </div>
                    </DrawerContent>
                  </Drawer>
                </div>
              </TabsList>
            </div>

            {/* SOCIAL LINKS */}
            <div className="flex flex-col gap-3">
              <Link
                href="https://www.linkedin.com/in/igbaniboalex/"
                target="_blank"
                aria-label="LinkedIn"
                className="hover:text-primary md:mb-2 w-fit hover:animate-bounce"
              >
                <Linkedin />
              </Link>
              <Link
                href="https://twitter.com/IgbaniboD"
                target="_blank"
                aria-label="Twitter"
                className="hover:text-primary md:mb-2 w-fit hover:animate-bounce"
              >
                <Twitter />
              </Link>
              <Link
                href="https://github.com/igbanibo-Dengi"
                target="_blank"
                aria-label="GitHub"
                className="hover:text-primary md:mb-2 w-fit hover:animate-bounce"
              >
                <Github />
              </Link>
              <div className="flex justify-start">
                <ModeToggle />
              </div>
            </div>
          </div>

          {/* TABS CONTENT */}
          <div className="w-full h-full">
            <TabsContent value="home">
              <div className="flex flex-col justify-center items-end h-full">
                <div className="flex justify-end lg:justify-between w-full max-w-[800px] overflow-hidden pl-20">
                  <span className="w-[380px] hidden mx-auto xl:mx-0 h-fit my-auto sm:block text-sm sm:text-base">
                    <p>Hey there! I&apos;m Igbanibo Dengimo-owei Alex, I&apos;m a front-end focused web developer, passionate about crafting beautiful, scalable, and responsive web designs. Whether I&apos;m working solo or as part of a team, I love bringing creative ideas to life on the web.</p>
                    <br />
                    <p className="indent-10">My journey in web development is all about blending creativity with technical know-how. If you&apos;re into innovative and functional web experiences, dive into my portfolio. Let&apos;s make something awesome together!</p>
                  </span>
                  <span className="w-[200px] sm:hidden text-sm sm:font-semibold pt-20 max-[400px]:pt-0">
                    <p>Hey there! I&apos;m Igbanibo Dengimo-owei Alex, I&apos;m a front-end focused web developer, passionate about crafting beautiful, scalable, and responsive web designs. Whether I&apos;m working solo or as part of a team, I love bringing creative ideas to life on the web.</p>
                  </span>

                  <div className="hidden sm:flex justify-center gap-2 items-center overflow-hidden z-50">
                    <div className="marquee">
                      <p>HTML</p>
                      <Dot />
                      <p className="whitespace-nowrap">CSS</p>
                      <Dot />
                      <p className="whitespace-nowrap">JavaScript</p>
                      <Dot />
                      <p className="whitespace-nowrap">Typescript</p>
                      <Dot />
                      <p className="whitespace-nowrap">React.js</p>
                      <Dot />
                      <p className="whitespace-nowrap">Next.js</p>
                      <Dot />
                      <p className="whitespace-nowrap">SASS</p>
                      <Dot />
                      <p className="whitespace-nowrap">Tailwind</p>
                      <Dot />
                      <p className="whitespace-nowrap">Redux</p>
                      <Dot />
                      <p className="whitespace-nowrap">Docker</p>
                      <Dot />
                      <p className="whitespace-nowrap">Git</p>
                      <Dot />
                      <p className="whitespace-nowrap">Prisma</p>
                      <Dot />
                      <p className="whitespace-nowrap">MongoDB</p>
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
            {/* <TabsContent value="experience">
              <Experience />
            </TabsContent> */}
            <TabsContent value="contact-large">
              <ContactForm />
            </TabsContent>
          </div>
        </Tabs>
      </HoverBorderGradient>
      <div className="area">
        <ul className="circles z-0">
          {Array.from({ length: 10 }, (_, i) => (
            <li key={i} className="bg-gray-400 dark:bg-gray-700"></li>
          ))}
        </ul>
      </div>
    </main>
  );
}
