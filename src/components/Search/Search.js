import PropTypes from "prop-types";
import {
  IconWrapper,
  Input,
  SearchWrapper,
  LoaderWrapper,
} from "./Search.styled";
import { IoMdSearch } from "react-icons/io";
import { MoonLoader } from "react-spinners";

const Search = ({ onSearch, value = "", isLoading = false }) => {
  return (
    <SearchWrapper>
      <IconWrapper>
        <IoMdSearch size={18} />
      </IconWrapper>
      <Input
        type="text"
        placeholder="Filter by name..."
        value={value}
        onChange={(e) => {
          onSearch(e.target.value);
        }}
      />
      {isLoading && (
        <LoaderWrapper>
          <MoonLoader
            color="hsla(168, 0%, 41%, 1)"
            speedMultiplier={1}
            size={25}
          />
        </LoaderWrapper>
      )}
    </SearchWrapper>
  );
};

export default Search;

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  value: PropTypes.string,
  isLoading: PropTypes.bool,
};
