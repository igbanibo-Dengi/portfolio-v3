import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "@/components/ThemeToggle/ThemeToggle";

const SocialLinks = () => {
  return (
    <div className="flex flex-col gap-3 z-50 absolute bottom-20 right-20">
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
  );
};

export default SocialLinks;
