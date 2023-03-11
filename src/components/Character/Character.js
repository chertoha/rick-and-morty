import { Link, useLocation, useParams } from "react-router-dom";
import { useGetOneCharacterQuery } from "redux/characters/charactersApi";

const Character = () => {
  const params = useParams();
  const location = useLocation();
  console.log(location);

  const { data, error, isFetching } = useGetOneCharacterQuery(params.id);

  const backLinkPath = location.state?.from ?? "/";
  // console.log(data);

  return (
    <div>
      <div>
        <Link to={backLinkPath}>go back</Link>
      </div>
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <h1>Rick Sanchez</h1>
        <h2>Informations</h2>
        <ul>
          <li>
            <h3>Gender</h3>
            <p>mail</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Character;
