import type { Metadata } from "next";
// import { Courier_Prime } from "next/font/google";
import { DM_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider/Theme-Provider";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const dM_Mono = DM_Mono({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Igbanibo Dengi",
  description: "Web developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="no-scrollbar">
      <body className={dM_Mono.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>
            {children}
            <Toaster />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
