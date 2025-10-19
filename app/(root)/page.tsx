import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className=" py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Planning and Booking Events Has Never Been Easier!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Bring your events to life with precision and style.
            </p>
            <Button
              size="lg"
              asChild
              className="button bg-[mediumpurple] text-white px-4 py-2 rounded w-full  "
            >
              <Link href="#events">See Events</Link>
            </Button>
          </div>
          <Image
            src="/logo.svg"
            alt="image for hero section"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          ></Image>
        </div>
      </section>
      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">Give it a try!</h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">Search</div>
      </section>
    </>
  );
}
