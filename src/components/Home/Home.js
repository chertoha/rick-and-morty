import CardList from "components/CardList";
import Container from "components/Container";
import Logo from "components/Logo";
import Search from "components/Search";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getCharacters } from "services/api";
import { HomeWrapper } from "./Home.styled";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  // const location = useLocation();
  // console.log(location);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const data = await getCharacters();
        setCharacters(data.results);
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
