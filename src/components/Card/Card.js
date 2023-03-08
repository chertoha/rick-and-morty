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
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Meta>
    </CardLink>
  );
};

export default Card;
