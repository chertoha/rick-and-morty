import { useParams } from "react-router-dom";
import { useGetOneCharacterQuery } from "redux/characters/charactersApi";

const Character = () => {
  const params = useParams();

  const { data, error, isFetching } = useGetOneCharacterQuery(params.id);

  console.log(data);

  return <div>Character {params.id}</div>;
};

export default Character;
