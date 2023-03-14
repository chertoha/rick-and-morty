import logo from "assets/images/logoRickMorty.png";
import { ImageWrapper, Image } from "./Logo.styled";
import { ROUTES } from "routes";

const Logo = () => {
  return (
    <ImageWrapper to={ROUTES.MAIN}>
      <Image src={logo} alt="Rick and Morty logo" />
    </ImageWrapper>
  );
};

export default Logo;
