import CardList from "components/CardList";
import Container from "components/Container";
import Logo from "components/Logo";
import Search from "components/Search";
import { useGetCharactersQuery } from "redux/characters/charactersApi";
import { sortObjectsWithKey } from "utils/sortObjectsWithKey";
import { HomeWrapper } from "./Home.styled";
import { useState } from "react";
import { useStorage } from "hooks/useStorage";
import Paginator from "components/Paginator";

const Home = () => {
  const { getFromStorage, updateStorage } = useStorage("query");

  const [search, setSearch] = useState(() => getFromStorage()?.name ?? "");
  const [page, setPage] = useState(1);

  const query = { page: page, name: search };
  updateStorage(query);

  const { data, error, isFetching } = useGetCharactersQuery(query);

  const onSearchHandler = (value) => {
    setSearch(value);
    setPage(1);
  };

  const sortedCharacters = sortObjectsWithKey(data?.results, "name");

  console.log(data);

  return (
    <HomeWrapper>
      <Container>
        <Logo />

        <Search
          onSearch={onSearchHandler}
          value={search}
          isLoading={isFetching}
        />

        {error ? (
          <div>Sorry, something goes wrong! Error:</div>
        ) : (
          <CardList
            list={sortedCharacters}
            baseUrl="/character"
            isLoading={isFetching}
            error={error}
          />
        )}

        <Paginator />
      </Container>
    </HomeWrapper>
  );
};

export default Home;
