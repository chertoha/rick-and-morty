import PropTypes from "prop-types";
import { trimText } from "utils/trimText";
import {
  CardLink,
  Image,
  ImageWrapper,
  Meta,
  Text,
  Title,
} from "./Card.styled";

const Card = ({ image, title, text, url, locationFrom }) => {
  return (
    <CardLink to={url} state={locationFrom}>
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

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  locationFrom: PropTypes.object,
};
