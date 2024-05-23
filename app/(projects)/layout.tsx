import BackButton from "@/components/BackButton";
import SocialLinks from "@/components/SocialLinks";
import { ModeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { HoverBorderGradient } from "@/components/hover-border-gradient";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Igbanibo Dengi",
    description: "Projects"
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (

        <main className="mx-auto h-screen w-screen xl:p-10 p-2 overflow-hidden  no-scrollbar bg-cover bg-center relative">
            <BackButton />
            <HoverBorderGradient
                containerClassName="mx-auto h-full w-full rounded-lg border-2 border-gray-500 "
                // as="button"
                // className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                className="rounded-lg"
                duration={2}
            >

                <div className="size-full">
                    {children}
                </div>
            </HoverBorderGradient>
            <div className="area" >
                <ul className="circles z-0">
                    {Array.from({ length: 10 }, (_, i) => (
                        <li key={i} className="bg-gray-400 dark:bg-gray-700"></li>
                    ))}
                </ul>
            </div >
            <div className="absolute bottom-10 xl:bottom-20 left-10 xl:left-[60px] z-50">
                <ModeToggle />
            </div>
        </main>

    );
}
