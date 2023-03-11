import PropTypes from "prop-types";
import { Item, Key, List, Value } from "./InfoList.styled";

const InfoList = ({ list }) => {
  return (
    <List>
      {list &&
        list.map(({ key, value }) => (
          <Item key={key}>
            <Key>{key}</Key>
            <Value>{value && value}</Value>
          </Item>
        ))}
    </List>
  );
};

export default InfoList;

InfoList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired
  ),
};
