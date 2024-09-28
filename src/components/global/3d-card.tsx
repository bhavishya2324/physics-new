import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import Image from "next/image";
import Link from "next/link";

export async function NeonGradientCardDemo() {
  return (

<div className="flex items-center flex-col mt-[50px] mb-[20px]  md:mt-[50px]">





<NeonGradientCard className="max-w-sm mt-[-120px]  items-center justify-center text-center ">
   <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-3xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
   <Image
         src="/sir.jpeg"
         height="500"
         width="500"
         className="h-50 w-full object-cover rounded-xl group-hover/card:shadow-xl"
         alt="Demon slayer"
       />
   </span>

 </NeonGradientCard>

  
 <Link
        href="https://www.youtube.com/@Abhisheksahusir/"
        className="relative inline-flex mt-12 h-10 w-60 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffffff_0%,#000000_50%,#18ffdc_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          {true ? 'Subscribe Now' : 'Get Started'}
        </span>
      </Link>
 

 </div> 

  );
}
