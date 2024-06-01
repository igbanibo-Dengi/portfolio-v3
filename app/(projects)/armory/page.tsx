
"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "@/components/ticky-scroll-reveal";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Copy from "@/components/Copy"
const guestUsername = "demoUser";
const guestPassword = "theArmory";


const content = [
    {
        title: "The Armory",
        description:
            "The Armory is a comprehensive full-stack web application designed for Call of Duty Mobile players. It allows users to create, customize, and share gunsmith builds and loadouts with the community. Built with a robust tech stack including React, Next.js, Clerk, and MongoDB, The Armory offers a seamless and engaging user experience.",
        content: (
            <div className="flex flex-col gap-2 items-center justify-center size-full">
                <Image
                    src='/images/armory/armory.png'
                    width={700}
                    height={700}
                    className="mx-auto border-2 rounded-md"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Auth with Clerk",
        description:
            "Clerk is an authentication and user management service that simplifies the process of adding secure and reliable authentication to web applications. It provides a suite of tools and APIs for handling user registration, login, and profile management, along with advanced security features.",
        content: (
            <div className="flex flex-col gap-10 items-center justify-center size-full">
                <Image
                    src='/images/armory/clerk.png'
                    width={700}
                    height={700}
                    className="mx-auto border-2 rounded-md"
                    alt="Clerk"
                />
            </div>
        ),
    },
    {
        title: "Backend",
        description:
            "The Armory's backend, powered by Next.js server actions and MongoDB, orchestrates seamless communication between the frontend and database. MongoDB efficiently stores user data and loadout information, while custom queries enable CRUD operations for loadout management. This robust backend infrastructure ensures a smooth and scalable user experience.",
        content: (
            <div className="flex flex-col gap-10 items-center justify-center xl:size-full">
                <Image
                    src="/images/armory/mongo.png"
                    width={700}
                    height={700}
                    className="mx-auto border-2 rounded-md"
                    alt="Mongo"
                />
            </div>
        ),
    },
    {
        title: "Conclusion",
        description:
            "The platform facilitates easy loadout management, allowing users to create new loadouts, edit existing ones, and bookmark loadouts created by other players for quick reference. Additionally, advanced search and filter functionalities empower users to discover specific loadouts tailored to their preferences. Whether it's fine-tuning weapon attachments or exploring innovative loadout strategies, The Armory provides a comprehensive toolkit to optimize gameplay and elevate the gaming experience.",
        content: (
            <div className="flex flex-col gap-10 items-center justify-center xl:size-full">
                <Image
                    src="/images/armory/crud.png"
                    width={700}
                    height={700}
                    className="mx-auto border-2 rounded-md"
                    alt="Mongo"
                />
            </div>
        ),
    },


];
export default function StickyScrollRevealDemo() {
    return (
        <div className="p-5 md:p-0 flex flex-col items-center justify-center size-full ">
            <div className="flex flex-col gap-5 md:gap-10 items-center justify-center size-fit pb-5 md:pb-10 bg-transparent xl:hidden">
                <Image
                    src='/images/armory.png'
                    width={700}
                    height={700}
                    className="mx-auto"
                    alt="linear board demo"
                />
                <div className="flex gap-5 items-center">
                    <Link href='/' target="_blank">
                        <Github className="hover:text-primary" />
                    </Link>
                    <Link href='/' target="_blank">
                        <ExternalLink className="hover:text-primary" />
                    </Link>
                </div>
            </div>

            <div className="absolute top-5 font-semibold text-center flex gap-0 md:gap-3 items-center flex-col md:flex-row text-xs md:text-base">
                <h3 className="w-full hidden md:block">Demo Account:</h3>
                <div className="flex gap-4 w-full">
                    <Copy title='Userrname' value={guestUsername} />
                    <Copy title='Password' value={guestPassword} />
                </div>
            </div>

            <StickyScroll content={content} />
            <div className="gap-3 items-center absolute top-5 right-10 hidden xl:flex flex-col">
                <Link href='https://github.com/igbanibo-Dengi/the-armory' target="_blank">
                    <Github className="hover:text-primary" />
                </Link>
                <Link href='https://the-armory.vercel.app/' target="_blank">
                    <ExternalLink className="hover:text-primary" />
                </Link>
            </div>
            <div className="flex-col lg:flex-row gap-2 lg:gap-4 absolute bottom-2 hidden lg:flex">
                <p className="text-lg xl:font-semibold text-center">Technologies:</p>
                <div className="flex flex-wrap gap-2 items-center justify-center">
                    <Badge>React.js</Badge>
                    <Badge>Next.js</Badge>
                    <Badge>MongoDB</Badge>
                    <Badge>Clerk</Badge>
                    <Badge>Typescript</Badge>
                    <Badge>TailwinCSS</Badge>
                    <Badge>ShadCN UI</Badge>
                </div>

            </div>
        </div>
    );
}