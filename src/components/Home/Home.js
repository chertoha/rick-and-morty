import CardList from "components/CardList";
import Container from "components/Container";
import Logo from "components/Logo";
import Search from "components/Search";
import { useEffect, useState } from "react";
import { useGetCharactersQuery } from "redux/characters/charactersApi";
import { getCharacters } from "services/api";
import { sortObjectsWithKey } from "utils/sortObjectsWithKey";
import { HomeWrapper } from "./Home.styled";

const Home = () => {
  // const [characters, setCharacters] = useState([]);

  // useEffect(() => {
  //   const fetchCharacters = async () => {
  //     try {
  //       const data = await getCharacters();
  //       const sortedCharacters = sortObjectsWithKey(data.results, "name");
  //       setCharacters(sortedCharacters);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchCharacters();
  // }, []);
  const { data, error, isLoading } = useGetCharactersQuery();
  // console.log(characters);

  if (!data) {
    return;
  }

  const sortedCharacters = sortObjectsWithKey(data.results, "name");

  return (
    <HomeWrapper>
      <Container>
        <Logo />

        <Search />

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

// Sort by name!!!
