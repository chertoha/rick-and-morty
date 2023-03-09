import { ImageWrapper, Image } from "./Logo.styled";
import logo from "assets/images/logoRickMorty.png";

const Logo = () => {
  return (
    <ImageWrapper>
      <Image src={logo} alt="Rick and Morty logo" />
    </ImageWrapper>
  );
};

export default Logo;
