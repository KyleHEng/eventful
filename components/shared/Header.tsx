import Image from "next/image";
import Link from "next/link";
import React from "react";

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
        <div className="flex w-32 justify-end gap-3"></div>
      </div>
    </header>
  );
};

export default Header;
