"use client";

import React from "react";
import Image from "next/image";
// import { StickyScroll } from "@/components/sticky-scroll-reveal";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Copy from "@/components/Copy";
import { StickyScroll } from "@/components/ticky-scroll-reveal";
const guestUsername = "testuser@gmail.com";
const guestPassword = "testuser123";

const content = [
  {
    title: "Knight Domicile",
    description:
      "Knight Domicile is an innovative real estate platform built using cutting-edge technologies such as Next.js, Auth.js, NeonDB, and Drizzle ORM. This platform is designed to deliver a seamless and comprehensive property search experience, enabling users to effortlessly browse through various listings tailored to their needs",
    content: (
      <div className="flex flex-col gap-2 items-center justify-center size-full">
        <Image
          src="/images/knight/home.png"
          width={700}
          height={700}
          className="mx-auto border-2 rounded-md"
          alt="Home page demo"
        />
      </div>
    ),
  },
  {
    title: "Authentication",
    description:
      "Implementing robust and secure authentication protocols through Auth.js, this system empowers users to seamlessly register for an account, sign in securely, and effectively manage their personal profiles with confidence.With a strong emphasis on safety, users are granted controlled access to their saved properties and various other personalized features tailored to enhance their overall experience on the platform.",
    content: (
      <div className="flex flex-col gap-10 items-center justify-center size-full">
        <Image
          src="/images/knight/auth.png"
          width={700}
          height={700}
          className="mx-auto border-2 rounded-md"
          alt="Auth flow"
        />
      </div>
    ),
  },
  {
    title: "Database & Drizzle ORM",
    description:
      "The platform leverages NeonDB in conjunction with Drizzle ORM to facilitate efficient and streamlined data management. This powerful combination allows for rapid data retrieval and optimized querying capabilities, ensuring that users have quick access to the information they need.",
    content: (
      <div className="flex flex-col gap-10 items-center justify-center size-full">
        <Image
          src="/images/knight/database.png"
          width={700}
          height={700}
          className="mx-auto border-2 rounded-md"
          alt="Database and Drizzle ORM details"
        />
      </div>
    ),
  },
  {
    title: "Search and Filtering",
    description:
      "A comprehensive search and filtering system, tailored for real estate, allows users to explore properties based on location, price, and other criteria, refining their search results effectively.",
    content: (
      <div className="flex flex-col gap-10 items-center justify-center xl:size-full">
        <Image
          src="/images/knight/search-filter.png"
          width={700}
          height={700}
          className="mx-auto border-2 rounded-md"
          alt="Search and filter feature"
        />
      </div>
    ),
  },
  {
    title: "Admin Dashboard",
    description:
      "A dedicated management interface for the real estate company to handle property listings and track platform activity, Add new property listings including images, pricing, location, and status details, Edit or update existing property listings as necessary, Remove property listings that are no longer available.",
    content: (
      <div className="flex flex-col gap-10 items-center justify-center xl:size-full">
        <Image
          src="/images/knight/dashboard.png"
          width={700}
          height={700}
          className="mx-auto border-2 rounded-md"
          alt="Conclusion"
        />
      </div>
    ),
  },
  {
    title: "Conclusion",
    description:
      "Knight Domicile demonstrates a robust real estate platform that leverages modern web technologies, providing a secure, user-friendly experience. Integrating Next.js, NeonDB, Auth.js, and Drizzle ORM, this project highlights efficiency in data management and security, tailored search capabilities, and a streamlined interface. The platform showcases a comprehensive, functional solution for property exploration and management.",
    content: (
      <div className="flex flex-col gap-10 items-center justify-center xl:size-full">
        <Image
          src="/images/knight/conclusion.png"
          width={700}
          height={700}
          className="mx-auto border-2 rounded-md"
          alt="Conclusion"
        />
      </div>
    ),
  },
];

const KnightDomicilePage = () => {
  return (
    <div className="p-5 md:p-0 flex flex-col items-center justify-center size-full ">
      {/* <div className="hidden xl:block absolute top-5 font-semibold text-center gap-0 md:gap-3 items-center flex-col md:flex-row text-xs md:text-base">
                <h3 className="w-full hidden md:block">Demo Account:</h3>
                <div className="flex gap-4 w-full">
                    <Copy title="email" value={guestUsername} />
                    <Copy title="Password" value={guestPassword} />
                </div>
            </div> */}
      <div className="xl:hidden">
        <div className="gap-5 items-center mb-2 flex justify-center">
          <Link
            href="https://github.com/igbanibo-Dengi/Knight-Domicile"
            target="_blank"
          >
            <Github className="hover:text-primary" />
          </Link>
          <Link href="https://knight-domicile.vercel.app/" target="_blank">
            <ExternalLink className="hover:text-primary" />
          </Link>
        </div>
        {/* <div className="font-semibold text-center gap-0 md:gap-3 items-center flex-col md:flex-row text-xs md:text-base">
                    <h3 className="w-full text-sm">Demo Account:</h3>
                    <div className="flex gap-4 w-full">
                        <Copy title="email" value={guestUsername} />
                        <Copy title="Password" value={guestPassword} />
                    </div>
                </div> */}
      </div>

      <StickyScroll content={content} />
      <div className="gap-3 items-center absolute top-5 right-10 hidden xl:flex flex-col">
        <Link
          href="https://github.com/igbanibo-Dengi/Knight-Domicile"
          target="_blank"
        >
          <Github className="hover:text-primary" />
        </Link>
        <Link href="https://knight-domicile.vercel.app/" target="_blank">
          <ExternalLink className="hover:text-primary" />
        </Link>
      </div>
      <div className="flex-col xl:flex-row gap-2 lg:gap-4 absolute bottom-2 hidden lg:flex">
        <p className="text-lg xl:font-semibold text-center">Technologies:</p>
        <div className="flex flex-wrap gap-2 items-center justify-center">
          <Badge>React.js</Badge>
          <Badge>Next.js</Badge>
          <Badge>Typescript</Badge>
          <Badge>Auth.js</Badge>
          <Badge>Neon DB</Badge>
          <Badge>Drizzle ORM</Badge>
          <Badge>ShadCN UI</Badge>
        </div>
      </div>
    </div>
  );
};

export default KnightDomicilePage;
