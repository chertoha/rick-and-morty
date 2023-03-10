import CardList from "components/CardList";
import Container from "components/Container";
import Logo from "components/Logo";
import Search from "components/Search";
import { useGetCharactersQuery } from "redux/characters/charactersApi";
import { sortObjectsWithKey } from "utils/sortObjectsWithKey";
import { HomeWrapper, PagWrapper } from "./Home.styled";
import { useEffect, useState } from "react";
import { useStorage } from "hooks/useStorage";
import Paginator from "components/Paginator";

const Home = () => {
  const { getFromStorage, updateStorage } = useStorage("query");

  const [search, setSearch] = useState(() => getFromStorage()?.name ?? "");
  const [page, setPage] = useState(() => getFromStorage()?.page ?? 1);

  // const query = { page: page, name: search };

  useEffect(() => {
    updateStorage({ page: page, name: search });
  }, [search, page, updateStorage]);

  const { data, error, isFetching } = useGetCharactersQuery({
    page: page,
    name: search,
  });

  const onSearchHandler = (value) => {
    setSearch(value);
    setPage(1);
  };

  const onPageHandler = (page) => {
    setPage(page);
  };

  const sortedCharacters = sortObjectsWithKey(data?.results, "name");
  const totalCharacters = data?.info.count;

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
          <>
            <CardList
              list={sortedCharacters}
              baseUrl="/character"
              isLoading={isFetching}
              error={error}
            />
            <PagWrapper>
              <Paginator
                currentPage={page}
                totalItems={totalCharacters}
                onPageClick={onPageHandler}
              />
            </PagWrapper>
          </>
        )}
      </Container>
    </HomeWrapper>
  );
};

export default Home;
