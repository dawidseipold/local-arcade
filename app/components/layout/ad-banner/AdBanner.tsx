import { cn } from "@/utils/cn";
import type { FunctionComponent } from "react";

interface BannerArrowProps {
  direction: "left" | "right";
}

const BannerArrow: FunctionComponent<BannerArrowProps> = ({ direction }) => {
  return (
    <div className={cn("text-gray-300")}>
      {direction === "left" ? "<" : ">"}
    </div>
  );
};

const AdBanner = () => {
  return (
    <div className={cn("w-full flex gap-x-4 items-center justify-between")}>
      <BannerArrow direction="left" />
      <div
        className={cn(
          "relative flex-1 bg-gray-950 h-24 rounded-4xl overflow-hidden border-[1px] border-gray-200",
        )}
      >
        <div className={cn("absolute z-20 top-4 left-8 leading-6")}>
          <h3 className={cn("text-white font-extrabold text-2xl antialiased")}>
            Get your $50 gift card!
          </h3>
          <span className={cn("text-gray-300")}>
            Invite a friend who spends at least $100 and you will get $50 gift
            card for free.
          </span>
        </div>

        <div className="absolute inset-0 flex justify-end">
          <img
            src={"public/images/banner-1.jpg"}
            alt={"banner 1"}
            className={cn(
              "object-cover h-full w-1/2 brightness-50 banner-mask-gradient",
            )}
          />
        </div>
      </div>

      <BannerArrow direction="right" />
    </div>
  );
};

export default AdBanner;
