import Container from "components/Container";
import Logo from "components/Logo";
import Search from "components/Search";
import PaginatedList from "components/PaginatedList";
import { useGetCharactersQuery } from "redux/characters/charactersApi";
import { sortObjectsWithKey } from "utils/sortObjectsWithKey";
import { HomeWrapper } from "./Home.styled";
import { useEffect, useState } from "react";
import { useStorage } from "hooks/useStorage";
import { useLocation } from "react-router";
import { useGoogleAuth } from "hooks/useGoogleAuth";
import { useAuth } from "hooks/useAuth";

const Home = () => {
  const { getFromStorage, updateStorage } = useStorage("query");
  const [search, setSearch] = useState(() => getFromStorage()?.name ?? "");
  const [page, setPage] = useState(() => getFromStorage()?.page ?? 1);
  const location = useLocation();

  const { loginGoogle, logoutGoogle } = useGoogleAuth();

  const { isLoggedIn, profile } = useAuth();

  console.log("PROFILE", isLoggedIn);

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
  const totalCharactersCount = data?.info.count;

  return (
    <HomeWrapper>
      <Container>
        <button onClick={() => loginGoogle()}>GOOGLE LOGIN</button>
        {isLoggedIn && (
          <>
            <button onClick={() => logoutGoogle()}>GOOGLE LOG OUT</button>
            <div>{profile.name}</div>
          </>
        )}

        <Logo />

        <Search
          onSearch={onSearchHandler}
          value={search}
          isLoading={isFetching}
        />

        {error ? (
          <div>Sorry, something goes wrong! Error:</div>
        ) : (
          <PaginatedList
            list={sortedCharacters}
            baseUrl="/character"
            page={page}
            totalItems={totalCharactersCount}
            onPageClick={onPageHandler}
            locationFrom={{ from: location }}
          />
        )}
      </Container>
    </HomeWrapper>
  );
};

export default Home;

//use Selector to selectors
// PERSISTOR
