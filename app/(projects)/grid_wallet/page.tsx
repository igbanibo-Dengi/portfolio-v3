"use client";

import React from "react";
import Image from "next/image";
import { StickyScroll } from "@/components/ticky-scroll-reveal";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Copy from "@/components/Copy"
const guestUsername = "testuser@gmail.com";
const guestPassword = "qwertyuiop";




const content = [
    {
        title: "Grid Wallet",
        description:
            "Grid Wallet is a finance project developed using Next.js, Appwrite, Plaid, Dwolla, and Sentry. It provides a platform for users to manage their finances by monitoring bank accounts, viewing transaction histories, transferring funds, and connecting new accounts. The focus is on creating a seamless, user-friendly experience with an emphasis on data security.",
        content: (
            <div className="flex flex-col gap-2 items-center justify-center size-full">
                <Image
                    src='/images/grid/home.png'
                    width={700}
                    height={700}
                    className="mx-auto border-2 rounded-md"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Auth & Database",
        description:
            "The authentication system in Grid Wallet allows easy sign-in and sign-up processes. Appwrite powers the backend, managing databases and collections for banks, transactions, and users. This ensures secure data handling and robust user authentication, providing strong access control mechanisms to protect user data.",
        content: (
            <div className="flex flex-col gap-10 items-center justify-center size-full">
                <Image
                    src='/images/grid/appwrite.png'
                    width={700}
                    height={700}
                    className="mx-auto border-2 rounded-md"
                    alt="Clerk"
                />
            </div>
        ),
    },
    {
        title: "Plaid & Dwolla",
        description:
            "Plaid integration enables users to connect and fetch real-time data from their bank accounts, while Dwolla handles ACH transfers and payment operations. This integration allows users to manage their finances efficiently, providing seamless and user-friendly financial operations.",
        content: (
            <div className="flex flex-col gap-10 items-center justify-center xl:size-full">
                <Image
                    src='/images/grid/plaid.png'
                    width={700}
                    height={700}
                    className="mx-auto border-2 rounded-md"
                    alt="Mongo"
                />
            </div>
        ),
    },
    {
        title: "Sentry",
        description:
            "Sentry is integrated for real-time error tracking and monitoring. It helps identify and diagnose issues within the application, ensuring high reliability. Proactive monitoring and detailed error reports from Sentry maintain the application's stability and enhance the overall user experience.",
        content: (
            <div className="flex flex-col gap-10 items-center justify-center xl:size-full">
                <Image
                    src='/images/grid/sentry.png'
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
            "Grid Wallet showcases a robust financial management application that leverages modern web technologies. The integration of Appwrite, Plaid, Dwolla, and Sentry demonstrates proficiency in both frontend and backend development. The project highlights the ability to create a secure, efficient, and user-friendly financial platform with a strong emphasis on user experience and data security.",
        content: (
            <div className="flex flex-col gap-10 items-center justify-center xl:size-full">
                <Image
                    src='/images/grid/transfer.png'
                    width={700}
                    height={700}
                    className="mx-auto border-2 rounded-md"
                    alt="Mongo"
                />
            </div>
        ),
    },
];


const gridPage = () => {
    return (
        <div className="p-5 md:p-0 flex flex-col items-center justify-center size-full ">
            <div className="flex flex-col gap-5 md:gap-10 items-center justify-center size-fit pb-5 md:pb-10 bg-transparent xl:hidden">
                <Image
                    src='/images/grid/home.png'
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
                < div className="font-semibold text-center gap-0 md:gap-3 items-center flex-col md:flex-row text-xs md:text-base" >
                    <div className="flex gap-4 w-full">
                        <Copy title='email' value={guestUsername} />
                        <Copy title='Password' value={guestPassword} />
                    </div>
                </div >
            </div>
            < div className="hidden xl:block absolute top-5 font-semibold text-center gap-0 md:gap-3 items-center flex-col md:flex-row text-xs md:text-base" >
                <h3 className="w-full hidden md:block">Demo Account:</h3>
                <div className="flex gap-4 w-full">
                    <Copy title='email' value={guestUsername} />
                    <Copy title='Password' value={guestPassword} />
                </div>
            </div >

            <StickyScroll content={content} />
            <div className="gap-3 items-center absolute top-5 right-10 hidden xl:flex flex-col">
                <Link href='https://github.com/igbanibo-Dengi/the-armory' target="_blank">
                    <Github className="hover:text-primary" />
                </Link>
                <Link href='https://the-armory.vercel.app/' target="_blank">
                    <ExternalLink className="hover:text-primary" />
                </Link>
            </div>
            <div className="flex-col xl:flex-row gap-2 lg:gap-4 absolute bottom-2 hidden lg:flex">
                <p className="text-lg xl:font-semibold text-center">Technologies:</p>
                <div className="flex flex-wrap gap-2 items-center justify-center">
                    <Badge>React.js</Badge>
                    <Badge>Next.js</Badge>
                    <Badge>Plaid</Badge>
                    <Badge>Dwolla</Badge>
                    <Badge>Appwrite</Badge>
                    <Badge>Sentry</Badge>
                    <Badge>Typescript</Badge>
                    <Badge>ShadCN UI</Badge>
                </div>

            </div>
        </div>
    );
}

export default gridPage




