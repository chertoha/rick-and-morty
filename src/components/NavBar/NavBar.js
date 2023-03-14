import { ROUTES } from "routes";
import { StyledLink } from "./NavBar.styled";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <StyledLink to={ROUTES.CHARACTER + `/222`}>Secret link</StyledLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
