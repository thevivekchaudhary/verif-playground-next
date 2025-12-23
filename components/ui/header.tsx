"use client";

import Link from "next/link";
import Logo from "./logo";
import { FaUser } from "react-icons/fa";

export default function Header() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ];

  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 
          before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent 
          before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] 
          before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] 
          after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">

          {/* Site branding */}
          <div className="flex items-center gap-4">
            <Logo />
          </div>

          {/* Navigation menu centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop sign in links */}
          <ul className="flex items-center justify-end gap-3 ml-auto">
            <li>
              <a
                href="https://login.verifplay.com"
                className="btn-sm relative bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-2 px-2 text-gray-300 
                  before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:border before:border-transparent 
                  before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] 
                  before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] 
                  hover:bg-[length:100%_150%] flex items-center justify-center rounded-full w-10 h-10"
              >
                <FaUser className="w-5 h-5" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
