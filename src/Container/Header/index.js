import { StyledHeader, HeaderButton } from "./styled";
import { ReactComponent as StyledLogo } from "./images/Logo.svg";

const Header = () => (
  <StyledHeader>
    <StyledLogo />
    <HeaderButton>PRE-ORDER NOW</HeaderButton>
  </StyledHeader>
);

export default Header;
