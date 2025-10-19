import styled from "styled-components";
import { Logo } from "./components/logo/Logo.jsx";

const HeaderContainer = ({ className }) => (
    <header className={className}>
        <Logo />
    </header>
);

const Header = styled(HeaderContainer)`
    height: 120px;
`;

export default Header;
