import type {FunctionComponent} from "react";
import Logo from "../../ui/logo/Logo.tsx";

interface HeaderProps {

}

const Header: FunctionComponent<HeaderProps> = () => {
    return (
        <header>
            <nav>
                <Logo />

                <ul>
                    <li>Home</li>
                    <li>Browse</li>
                    <li>Forum</li>
                </ul>

                <div>
                    <ul>
                        <li>C</li>
                        <li>N</li>
                    </ul>

                    {/*<CurrentUser />*/}
                </div>
            </nav>
        </header>
    )
}

export default Header;