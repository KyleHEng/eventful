"use client";
import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const NavItems = () => {
  const pathname = usePathname();
  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        const isPathActive = pathname === link.path;

        return (
          <li
            key={link.path}
            className={`${
              isPathActive ? "text-purple-500" : null
            } flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={link.path}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};
