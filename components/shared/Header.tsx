import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MobileNav } from "./MobileNav";
import { NavItems } from "./NavItems";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/logo.svg"
            alt="Smiley face for logo"
            width={38}
            height={38}
          ></Image>
        </Link>
        <nav className="sm:flex-between  w-full max-w-xs">
          <NavItems></NavItems>
        </nav>
        <SignedOut>
          <SignInButton>
            <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>

        <MobileNav></MobileNav>
      </div>
    </header>
  );
};

export default Header;
