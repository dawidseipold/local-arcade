import  {type FunctionComponent} from "react";
import * as React from "react";

interface LogoProps {}

const LocalArcadeLogo = React.lazy(() => import('../../icons/LocalArcadeLogo'))

const Logo: FunctionComponent<LogoProps> = () =>  {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <LocalArcadeLogo/>
        </React.Suspense>
    )
}

export default Logo;