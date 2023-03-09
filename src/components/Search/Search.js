import { IconWrapper, Input, SearchWrapper } from "./Search.styled";
import { IoMdSearch } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { setSearchValue } from "redux/search/slice";
import { selectSearch } from "redux/search/selectors";

const Search = ({ onSearch, value }) => {
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
    </SearchWrapper>
  );
};

export default Search;
