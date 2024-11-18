"use client";

import Image from "next/image";
import logo from "../public/next.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between p-4 mb-2 shadow-md shadow-primary-500 bg-green-100">
      <Image
        src={logo}
        alt="logo"
        className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32"
      />
      <nav className="font-bold space-x-4 sm:space-x-2 md:space-x-8 lg:space-x-28 text-sm sm:text-base py-4 sm:py-0">
        <Link
          href="/"
          className={`${
            pathname === "/" ? "text-primary-500" : "text-primary-400"
          } uppercase hover:text-primary-500`}
        >
          Home
        </Link>
        <Link
          href="/questions"
          className={`${
            pathname === "/questions" ? "text-primary-500" : "text-primary-400"
          } uppercase hover:text-primary-500`}
        >
          Questions
        </Link>
        <Link
          href="/my-answers"
          className={`${
            pathname === "/my-answers" ? "text-primary-500" : "text-primary-400"
          } uppercase hover:text-primary-500`}
        >
          My Answers
        </Link>
      </nav>
      <p className="text-primary-500 text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl sm:mr-10 cursor-default">
        Work<span className="text-primary-400">Sheet</span>
      </p>
    </header>
  );
};
