import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-5 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="smiley face logo"
            width={38}
            height={38}
          ></Image>
        </Link>
        <p>2025 EVENTful. All Rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
