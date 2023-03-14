import { useLocation, useParams } from "react-router-dom";
import { useGetOneCharacterQuery } from "redux/rickAndMortyApi/rickAndMortyApi";
import { BiArrowBack } from "react-icons/bi";
import {
  CharacterDetails,
  DetailsContainer,
  Image,
  ImageWrapper,
  ListWrapper,
  Name,
  StyledLink,
  Title,
  ToolBar,
} from "./Character.styled";
import InfoList from "components/InfoList";
import defaultAvatar from "assets/images/default-avatar.jpg";
import ErrorComponent from "components/ErrorComponent";
import { ROUTES } from "routes";

const NO_INFO = "No info";

const Character = () => {
  const params = useParams();
  const location = useLocation();
  const { data: character, error } = useGetOneCharacterQuery(params.id);

  if (error) {
    return <ErrorComponent title="Something went wrong!!!" timeout={3000} />;
  }

  if (!character) {
    return;
  }

  const infoList = [
    { key: "Gender", value: character.gender || NO_INFO },
    { key: "Status", value: character.status || NO_INFO },
    { key: "Specie", value: character.species || NO_INFO },
    { key: "Origin", value: character.origin?.name || NO_INFO },
    { key: "Type", value: character.type || NO_INFO },
  ];

  return (
    <CharacterDetails>
      <ToolBar>
        <StyledLink to={location.state?.from ?? ROUTES.MAIN}>
          <BiArrowBack /> go back
        </StyledLink>
      </ToolBar>

      <DetailsContainer>
        <ImageWrapper>
          <Image src={character.image || defaultAvatar} alt={character.name} />
        </ImageWrapper>

        <Name>{character.name}</Name>

        <Title>Informations</Title>

        <ListWrapper>
          <InfoList list={infoList} />
        </ListWrapper>
      </DetailsContainer>
    </CharacterDetails>
  );
};

export default Character;
