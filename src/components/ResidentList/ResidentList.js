import PropTypes from "prop-types";
import { ROUTES } from "routes";
import { Item, List, StyledLink } from "./ResidentList.styled";

const ResidentList = ({ list, fromLocation }) => {
  const getCharacterIdFromUrl = (url) => {
    return url.split("/").pop();
  };

  return (
    <List>
      {list.map((url) => (
        <Item key={url}>
          <StyledLink
            to={`${ROUTES.CHARACTER}/${getCharacterIdFromUrl(url)}`}
            state={fromLocation}
          >
            {`${getCharacterIdFromUrl(url)}`}
          </StyledLink>
        </Item>
      ))}
    </List>
  );
};

export default ResidentList;

ResidentList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string.isRequired),
  fromLocation: PropTypes.object,
};
