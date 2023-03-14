import NavBar from "components/NavBar";
import Profile from "components/Profile";
import { HeaderContainer } from "./Header.styled";

const Header = () => {
  return (
    <HeaderContainer>
      <NavBar />
      <Profile />
    </HeaderContainer>
  );
};

export default Header;
