import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "../ui/separator";
export const MobileNav = () => {
  return (
    <nav>
      <Sheet>
        <SheetTrigger>
          <Image src="/menu.svg" alt="menu bar" width={38} height={38}></Image>
        </SheetTrigger>

        <SheetContent className="flex flex-col gap-6 bg-white">
          <Image
            src="/logo.svg"
            alt="smiley face logo"
            width={50}
            height={50}
          ></Image>
          <Separator className="border border-gray-100"></Separator>
        </SheetContent>
      </Sheet>
    </nav>
  );
};
