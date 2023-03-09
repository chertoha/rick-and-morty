import CardList from "components/CardList";
import Container from "components/Container";
import Logo from "components/Logo";
import Search from "components/Search";
import { useGetCharactersQuery } from "redux/characters/charactersApi";
import { selectSearch } from "redux/search/selectors";
import { sortObjectsWithKey } from "utils/sortObjectsWithKey";
import { HomeWrapper } from "./Home.styled";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import debounce from "lodash.debounce";

const Home = () => {
  const [search, setSearch] = useState("");

  const { data, error, isLoading } = useGetCharactersQuery({
    page: 1,
    name: search,
  });

  const onSearchHandler = (value) => {
    console.log(value);
    setSearch(value);
  };

  if (!data) {
    return;
  }

  const sortedCharacters = sortObjectsWithKey(data.results, "name");

  return (
    <HomeWrapper>
      <Container>
        <Logo />

        <Search onSearch={debounce(onSearchHandler, 1000)} value={search} />

        <CardList
          list={sortedCharacters}
          baseUrl="/character"
          isLoading={isLoading}
          error={error}
        />
      </Container>
    </HomeWrapper>
  );
};

export default Home;

// debounce()
