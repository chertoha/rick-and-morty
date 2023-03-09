import CardList from "components/CardList";
import Container from "components/Container";
import Logo from "components/Logo";
import Search from "components/Search";
import { useGetCharactersQuery } from "redux/characters/charactersApi";
import { sortObjectsWithKey } from "utils/sortObjectsWithKey";
import { HomeWrapper } from "./Home.styled";
import { useState } from "react";

const Home = () => {
  const [search, setSearch] = useState("");

  const { data, error, isLoading } = useGetCharactersQuery({
    page: 1,
    name: search,
  });

  const onSearchHandler = (value) => {
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

        <Search onSearch={onSearchHandler} value={search} />

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
