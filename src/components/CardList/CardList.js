import PropTypes from "prop-types";
import Card from "components/Card";
import { Item, List } from "./CardList.styled";

const CardList = ({ list, baseUrl = "" }) => {
  return (
    <List>
      {list &&
        list.map(({ id, image, name, species }) => (
          <Item key={id}>
            <Card
              image={image}
              title={name}
              text={species}
              url={baseUrl ? `${baseUrl}/${id}` : ""}
            />
          </Item>
        ))}
    </List>
  );
};

export default CardList;

CardList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
    })
  ),
  baseUrl: PropTypes.string,
};
