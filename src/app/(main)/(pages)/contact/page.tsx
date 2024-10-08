import { BackgroundBeams } from "@/components/global/contact-effect";

import Link from "next/link";
import React from "react";

const ContactPage = () => {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto mt-10 p-4">
        <h1 className="relative z-10 text-4xl md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Let’s get in touch
        </h1>
        <p></p>
        <p className="text-neutral-500  max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Contact:- 9575203140 <br /> Email:- noxizfromfuture@gmail.com
        </p>
      </div>

      <BackgroundBeams />

      <Link
        href="https://calendly.com/noxiz/30-minute-meeting"
        className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffffff_0%,#000000_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          {true ? "Book an Appointment" : "Get Started"}
        </span>
      </Link>
    </div>
  );
};

export default ContactPage;
