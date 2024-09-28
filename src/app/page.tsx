import { NeonGradientCardDemo } from "@/components/global/3d-card";
import { ConfettiDemo } from "@/components/global/congrats-mid";
import { ThreeDCardDemo } from "@/components/global/course-card";
import { GlobeDemo } from "@/components/global/globe-world";
import { AnimatedGradientTextDemo } from "@/components/global/hero-shine";
import BlurInDemo from "@/components/global/heromain";

import { ImagesSliderDemo } from "@/components/global/slider";

import { HeroVideoDialogDemo } from "@/components/global/video";

import { BackgroundLines } from "@/components/ui/background-lines";

export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}

      <BackgroundLines>
        <AnimatedGradientTextDemo />
        <section className="mt-[-34px]">
          <BlurInDemo />
          <HeroVideoDialogDemo />
        </section>

        <section className="mt-20">
          <ConfettiDemo />

          <NeonGradientCardDemo />
        </section>

        <div className="flex items-center flex-col mt-[50px] mb-[20px]  md:mt-[50px]">
          <ThreeDCardDemo />
        </div>


<GlobeDemo />

        <ImagesSliderDemo />

        {/* <TabsDemo /> */}
      </BackgroundLines>
    </main>
  );
}
