import { IconWrapper, Input, SearchWrapper } from "./Search.styled";
import { IoMdSearch } from "react-icons/io";

const Search = () => {
  return (
    <SearchWrapper>
      <IconWrapper>
        <IoMdSearch size={18} />
      </IconWrapper>
      <Input type="text" placeholder="Filter by name..." />
    </SearchWrapper>
  );
};

export default Search;
