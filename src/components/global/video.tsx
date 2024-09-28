import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export function HeroVideoDialogDemo() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/l2N2bZzv5yU?si=MIEE70hALKlZCEp4"
        thumbnailSrc="./thumb.jpg"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/l2N2bZzv5yU?si=MIEE70hALKlZCEp4"
        thumbnailSrc="./thumb.jpg"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
