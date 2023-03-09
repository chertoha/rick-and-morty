import { IconWrapper, Input, SearchWrapper } from "./Search.styled";
import { IoMdSearch } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { setSearchValue } from "redux/search/slice";
import { selectSearch } from "redux/search/selectors";
import debounce from "lodash.debounce";

const Search = ({ onSearch, value }) => {
  // const dispatch = useDispatch();
  // const search = useSelector(selectSearch);

  // const onSearch = (e) => {
  //   dispatch(setSearchValue(e.target.value));
  // };

  const handler = (e) => {
    console.log(e.target);
    onSearch(e.target.value);
  };

  return (
    <SearchWrapper>
      <IconWrapper>
        <IoMdSearch size={18} />
      </IconWrapper>
      <Input
        type="text"
        placeholder="Filter by name..."
        value={value}
        // onChange={debounce(handler, 1000)}
        onChange={handler}
      />
    </SearchWrapper>
  );
};

export default Search;
