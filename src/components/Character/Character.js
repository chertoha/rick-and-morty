import { useLocation, useParams } from "react-router-dom";
import { useGetOneCharacterQuery } from "redux/characters/charactersApi";
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

const NO_INFO = "No info";

const Character = () => {
  const params = useParams();
  const location = useLocation();

  const {
    data: character,
    error,
    isFetching,
  } = useGetOneCharacterQuery(params.id);

  console.log(character);

  const backLinkPath = location.state?.from ?? "/";

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
        <StyledLink to={backLinkPath}>
          <BiArrowBack /> go back
        </StyledLink>
      </ToolBar>

      <DetailsContainer>
        <ImageWrapper>
          <Image src={character.image || defaultAvatar} alt="" />
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
