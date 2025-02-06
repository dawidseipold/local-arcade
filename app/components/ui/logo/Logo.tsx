import * as React from "react";
import { type FunctionComponent } from "react";
import { cn } from "../../../utils/cn.ts";

interface LogoProps {
  textVisible?: boolean;
}

const LocalArcadeLogo = React.lazy(() => import("../../icons/LocalArcadeLogo"));

const Logo: FunctionComponent<LogoProps> = ({ textVisible }) => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div
        className={cn("flex items-center", {
          ["gap-x-2"]: textVisible,
        })}
      >
        <LocalArcadeLogo size={40} />
        {/* TODO: Add a class for the logo font */}
        <span
          className={cn("font-extrabold tracking-wide text-3xl text-white")}
        >
          {textVisible && "Local Arcade"}
        </span>
      </div>
    </React.Suspense>
  );
};

export default Logo;
