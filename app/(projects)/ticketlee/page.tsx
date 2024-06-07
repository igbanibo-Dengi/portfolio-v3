"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "@/components/ticky-scroll-reveal";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Copy from "@/components/Copy";

const content = [
    {
        title: "Teeketlee",
        description:
            "Ticketlee is a full-stack application for creating, managing, and selling event tickets. Built with Next.js, MongoDB, Clerk for authenticationm and stripe for payment, it offers a seamless experience for event organizers and attendees. Key features include user authentication, event creation, ticket management, secure payment processing, and detailed event listings, ensuring high performance, scalability, and security.",
        content: (
            <div className="flex flex-col gap-10 items-center justify-center size-full">
                <Image
                    src='/images/teeketly/home.png'
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
            "Ticketlee uses Clerk for secure and seamless user authentication. Clerk handles sign-up, login, password recovery, and email verification, ensuring robust security and simplified user management. This allows developers to focus on core features while maintaining efficient and secure authentication flows.",
        content: (
            <div className="flex flex-col gap-10 items-center justify-center size-full">
                <Image
                    src='/images/teeketly/auth.png'
                    width={700}
                    height={700}
                    className="mx-auto border-2 rounded-md"
                    alt="Clerk"
                />
            </div>
        ),
    },
    {
        title: "Find Events",
        description:
            "Ticketlee makes it easy to find events created by users through an intuitive search and filter system. Users can browse events by category. the platform offers personalized event suggestions based on the categories of events users have shown interest in, enhancing the discovery experience and helping attendees find events that match their preferences.",
        content: (
            <div className="flex flex-col gap-10 items-center justify-center size-full">
                <Image
                    src='/images/teeketly/events.png'
                    width={700}
                    height={700}
                    className="mx-auto border-2 rounded-md"
                    alt="Clerk"
                />
            </div>
        ),
    }, {
        title: "Create Events",
        description:
            "Ticketlee's event creation form leverages React Hook Form and Zod for efficient and robust frontend validation. React Hook Form simplifies form handling and state management, while Zod ensures that all input data meets the specified validation criteria. This combination provides a smooth and reliable experience for event organizers, making it easy to create and manage events with accurate and validated information.",
        content: (
            <div className="flex flex-col gap-10 items-center justify-center size-full">
                <Image
                    src='/images/teeketly/form.png'
                    width={700}
                    height={700}
                    className="mx-auto border-2 rounded-md"
                    alt="Clerk"
                />
            </div>
        ),
    },
    {
        title: "UploadThing",
        description:
            "Ticketlee uses Uploadthing for easy image uploads, streamlining the process for event organizers. This integration enhances event pages visually and improves the overall user experience by simplifying image management. Uploadthing ensures reliable and secure file uploads.",
        content: (
            <div className="flex flex-col gap-10 items-center justify-center size-full">
                <Image
                    src='/images/teeketly/upload.png'
                    width={700}
                    height={700}
                    className="mx-auto border-2 rounded-md"
                    alt="Clerk"
                />
            </div>
        ),
    },
    {
        title: "Payment with Stripe",
        description:
            "Ticketlee seamlessly integrates Stripe for secure payment processing. Users can purchase event tickets confidently, knowing their transactions are protected. Stripe handles all payment complexities, ensuring fast and reliable transactions, supporting various payment methods for user convenience.",
        content: (
            <div className="flex flex-col gap-10 items-center justify-center size-full">
                <Image
                    src='/images/teeketly/stripe.png'
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
            "Ticketlee's backend, powered by Next.js server actions and MongoDB, orchestrates seamless communication between the frontend and database. MongoDB efficiently stores user data and event information, while custom queries enable CRUD operations for event management. This robust backend infrastructure ensures a smooth and scalable user experience.",
        content: (
            <div className="flex flex-col gap-10 items-center justify-center xl:size-full">
                <Image
                    src="/images/teeketly/mongo.png"
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
            "Ticketlee is a comprehensive event management solution, offering seamless event creation, secure authentication, and efficient payment processing. With integrations like Clerk, Stripe, and Uploadthing, Ticketlee streamlines operations for organizers and enhances the experience for attendees, making it the ideal platform for events of any scale.",
        content: (
            <div className="flex flex-col gap-10 items-center justify-center xl:size-full">
                <Image
                    src="/images/teeketly/conclusion.png"
                    width={700}
                    height={700}
                    className="mx-auto border-2 rounded-md"
                    alt="Mongo"
                />
            </div>
        ),
    },


];
const TicketleePage = () => {

    const guestUsername = "guest";
    const guestPassword = "teeketly";


    return (
        <div className="p-5 md:p-0 flex flex-col items-center justify-center size-full ">
            <div className="flex flex-col gap-5 md:gap-10 items-center justify-center size-fit md:pb-10 bg-transparent xl:hidden">
                <Image
                    src='/images/teeketly/home.png'
                    width={700}
                    height={700}
                    className="mx-auto"
                    alt="linear board demo"
                />
                <div className="flex gap-5 items-center">
                    <Link href='https://github.com/igbanibo-Dengi/events_app' target="_blank">
                        <Github className="hover:text-primary" />
                    </Link>
                    <Link href='https://ticketlee.vercel.app/' target="_blank">
                        <ExternalLink className="hover:text-primary" />
                    </Link>
                </div>
                <div className="font-semibold text-center gap-0 md:gap-3 items-center flex-col md:flex-row text-xs md:text-base mt-3">
                    <div className="flex gap-4 w-full">
                        <Copy title='Userrname' value={guestUsername} />
                        <Copy title='Password' value={guestPassword} />
                    </div>
                </div>
                <div className="hidden xl:block absolute top-5 font-semibold text-center gap-0 md:gap-3 items-center flex-col md:flex-row text-xs md:text-base mt-3">
                    <h3 className="w-full hidden md:block">Demo Account:</h3>
                    <div className="flex gap-4 w-full">
                        <Copy title='Userrname' value={guestUsername} />
                        <Copy title='Password' value={guestPassword} />
                    </div>
                </div>
            </div>
            <div className="hidden xl:block absolute top-5 font-semibold text-center gap-0 md:gap-3 items-center flex-col md:flex-row text-xs md:text-base mt-3">
                <h3 className="w-full hidden md:block">Demo Account:</h3>
                <div className="flex gap-4 w-full">
                    <Copy title='Userrname' value={guestUsername} />
                    <Copy title='Password' value={guestPassword} />
                </div>
            </div>
            <StickyScroll content={content} />
            <div className="gap-3 items-center absolute top-10 right-10 hidden xl:flex flex-col">
                <Link href='https://github.com/igbanibo-Dengi/events_app' target="_blank">
                    <Github className="hover:text-primary" />
                </Link>
                <Link href='https://ticketlee.vercel.app/' target="_blank">
                    <ExternalLink className="hover:text-primary" />
                </Link>
            </div>
            <div className="flex-col xl:flex-row gap-2 lg:gap-4 absolute bottom-2 hidden lg:flex">
                <p className="text-lg xl:font-semibold text-center">Technologies:</p>
                <div className="flex flex-wrap gap-2 items-center justify-center">
                    <Badge>React.js</Badge>
                    <Badge>Next.js</Badge>
                    <Badge>MongoDB</Badge>
                    <Badge>Clerk</Badge>
                    <Badge>Stripe</Badge>
                    <Badge>Uploadthing</Badge>
                    <Badge>Typescript</Badge>
                    <Badge>TailwinCSS</Badge>
                    <Badge>ShadCN UI</Badge>
                </div>

            </div>
        </div>
    )
}

export default TicketleePage