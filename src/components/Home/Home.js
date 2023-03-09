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

const Home = () => {
  // const [searchValue, setSearchValue] = useState(search);
  const [search, setSearch] = useState("rick");

  // const { data, error, isLoading } = useGetCharactersQuery(1, search);

  // useEffect(() => {
  //   // const { status, data, error, refetch } = dispatch(
  //   //   pokemonApi.endpoints.getPokemon.initiate("bulbasaur")
  //   // );
  // }, [search]);

  const onSearchHandler = (value) => {
    setSearch(value);
  };

  // if (!data) {
  //   return;
  // }

  // const sortedCharacters = sortObjectsWithKey(data.results, "name");

  return (
    <HomeWrapper>
      <Container>
        <Logo />

        <Search onSearch={onSearchHandler} value={search} />

        <CardList
          // list={sortedCharacters}
          baseUrl="/character"
          search={search}
          // isLoading={isLoading}
          // error={error}
        />
      </Container>
    </HomeWrapper>
  );
};

export default Home;

// Sort by name!!!
