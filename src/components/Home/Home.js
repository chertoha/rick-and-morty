import CardList from "components/CardList";
import Container from "components/Container";
import Logo from "components/Logo";
import Search from "components/Search";
import { useEffect, useState } from "react";
import { getCharacters } from "services/api";
import { sortObjectsWithKey } from "utils/sortObjectsWithKey";
import { HomeWrapper } from "./Home.styled";

const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const data = await getCharacters();
        const sortedCharacters = sortObjectsWithKey(data.results, "name");
        setCharacters(sortedCharacters);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCharacters();
  }, []);

  return (
    <HomeWrapper>
      <Container>
        <Logo />

        <Search />

        <CardList list={characters} baseUrl="/character" />
      </Container>
    </HomeWrapper>
  );
};

export default Home;

// Sort by name!!!
