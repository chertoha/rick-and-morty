import { trimText } from "utils/trimText";
import {
  CardLink,
  Image,
  ImageWrapper,
  Meta,
  Text,
  Title,
} from "./Card.styled";

const Card = ({ image, title, text, url }) => {
  return (
    <CardLink to={url}>
      <ImageWrapper>
        <Image src={image} alt={title} />
      </ImageWrapper>
      <Meta>
        <Title>{trimText(title, 18)}</Title>
        <Text>{text}</Text>
      </Meta>
    </CardLink>
  );
};

export default Card;
