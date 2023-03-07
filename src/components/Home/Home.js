import CardList from "components/CardList";
import Container from "components/Container";
import Logo from "components/Logo";
import Search from "components/Search";
import { HomeWrapper } from "./Home.styled";

const Home = () => {
  return (
    <Container>
      <HomeWrapper>
        <Logo />

        <Search />

        <CardList />
      </HomeWrapper>
    </Container>
  );
};

export default Home;
