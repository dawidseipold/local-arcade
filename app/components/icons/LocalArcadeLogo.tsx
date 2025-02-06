import type {FunctionComponent} from "react";
import * as React from "react";

interface LocalArcadeLogoProps {
    size?: string | number;
}

const LocalArcadeLogo: FunctionComponent<LocalArcadeLogoProps> = ({size = 24, ...props}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 480 380"
        width={size}
        height={size}
        fill="none"
        {...props}
    >
        <path
            fill="#fff"
            fillRule="evenodd"
            d="M390 60H90c-16.569 0-30 13.431-30 30v200c0 16.569 13.431 30 30 30h300c16.569 0 30-13.431 30-30V90c0-16.569-13.431-30-30-30ZM90 0C40.294 0 0 40.294 0 90v200c0 49.706 40.294 90 90 90h300c49.706 0 90-40.294 90-90V90c0-49.706-40.294-90-90-90H90Z"
            clipRule="evenodd"
        />
        <rect
            width={60}
            height={180}
            x={270}
            y={158}
            fill="#fff"
            rx={28}
            transform="rotate(90 270 158)"
        />
        <rect width={60} height={180} x={150} y={100} fill="#fff" rx={28}/>
        <rect width={60} height={60} x={330} y={216} fill="#fff" rx={28}/>
        <rect width={60} height={60} x={330} y={100} fill="#fff" rx={28}/>
    </svg>
);

export default LocalArcadeLogo;