"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo() {
  return (

<div className="max-w-6xl flex text-xl text-sm font-sans items-center  mt-[20px] flex-col mx-auto px-2">



<div className="flex flex-wrap items-center justify-center flex-col  md:flex-row gap-4 ">

    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Want to Score 95+ in Physics
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
           Then good practice is needed.You can practice physics through my book
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/book.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://amzn.to/4bH2JH7"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={10}
            as={Link}
             href="https://amzn.to/4bH2JH7"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Buy Now
          </CardItem>
        </div>
      </CardBody>
      </CardContainer>




      <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 mt-[-40px] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Join Winners Batch Tension Jao Bhool 😉
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
        Notice Visible Improvement in Physics in just 2 weeks
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/book4.jpg"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://play.google.com/store/apps/details?id=com.irurdp.wtmzsn"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={10}
            as={Link}
            href="https://play.google.com/store/apps/details?id=com.irurdp.wtmzsn"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Join Now
          </CardItem>
        </div>
      </CardBody>

      
    </CardContainer>



    </div>
    </div>


  );
}
