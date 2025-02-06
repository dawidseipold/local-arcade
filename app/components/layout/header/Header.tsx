import type { FunctionComponent } from "react";
import Logo from "../../ui/logo/Logo.tsx";
import { cn } from "../../../utils/cn.ts";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <header
      className={cn("flex justify-center px-4 md:px-8 h-16 w-dvw bg-gray-950")}
    >
      <nav
        className={cn(
          "relative flex justify-between items-center w-full container",
        )}
      >
        <Logo textVisible />

        <ul
          className={cn(
            "absolute left-1/2 -translate-x-1/2 flex gap-x-8 text-white",
          )}
        >
          <li>Home</li>
          <li>Browse</li>
          <li>Forum</li>
        </ul>

        <div className={cn("flex gap-x-4 items-center")}>
          <ul className={cn("flex gap-x-2")}>
            <li
              className={cn(
                "flex items-center justify-center rounded-xl bg-gray-700 w-8 aspect-square text-white",
              )}
            >
              C
            </li>
            <li
              className={cn(
                "flex items-center justify-center rounded-xl bg-gray-700 w-8 aspect-square text-white",
              )}
            >
              N
            </li>
          </ul>

          {/*<CurrentUser />*/}
          <div
            className={cn(
              "flex items-center justify-center rounded-xl bg-blue-700 w-10 aspect-square text-white",
            )}
          >
            U
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
