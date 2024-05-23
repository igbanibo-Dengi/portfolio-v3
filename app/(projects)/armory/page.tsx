
"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "@/components/ticky-scroll-reveal";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

const content = [
    {
        title: "Collaborative Editing",
        description:
            "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
        content: (
            <div className="flex flex-col gap-10 items-center justify-center size-full">
                <Image
                    src='/images/armory.png'
                    width={700}
                    height={700}
                    // className="mx-auto"
                    alt="linear board demo"
                />
                {/* <div className="flex gap-5 items-center">
                    <Link href='/' target="_blank">
                        <Github className="hover:text-primary hidden sm:block" />
                    </Link>
                    <Link href='/' target="_blank">
                        <ExternalLink className="hover:text-primary hidden sm:block" />
                    </Link>
                </div> */}
            </div>
        ),
    },
    {
        title: "Real time changes",
        description:
            "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
        content: (
            <div className="flex flex-col gap-10 items-center justify-center size-full">
                <Image
                    src='/images/ticketlee.png'
                    width={700}
                    height={700}
                    className="mx-auto border-2 rounded-md"
                    alt="linear board demo"
                />
                {/* <div className="flex gap-5 items-center">
                    <Link href='/' target="_blank">
                        <Github className="hover:text-primary hidden sm:block" />
                    </Link>
                    <Link href='/' target="_blank">
                        <ExternalLink className="hover:text-primary hidden sm:block" />
                    </Link>
                </div> */}
            </div>
        ),
    },
    {
        title: "Version control",
        description:
            "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
            <div className="flex flex-col gap-10 items-center justify-center xl:size-full">
                <Image
                    src="/images/get-linked.png"
                    width={700}
                    height={700}
                    className="mx-auto border-2 rounded-md"
                    alt="linear board demo"
                />
                {/* <div className="flex gap-5 items-center">
                    <Link href='/' target="_blank">
                        <Github className="hover:text-primary hidden sm:block" />
                    </Link>
                    <Link href='/' target="_blank">
                        <ExternalLink className="hover:text-primary hidden sm:block" />
                    </Link>
                </div> */}
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
            <StickyScroll content={content} />
        </div>
    );
}