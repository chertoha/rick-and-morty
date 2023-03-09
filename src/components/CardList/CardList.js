import Card from "components/Card";
import { useEffect } from "react";
import { useGetCharactersQuery } from "redux/characters/charactersApi";
import { sortObjectsWithKey } from "utils/sortObjectsWithKey";
import { Item, List } from "./CardList.styled";

const CardList = ({ baseUrl = "", search }) => {
  // console.log(search);

  const { data, error, isLoading, refetch } = useGetCharactersQuery({
    page: 1,
    name: search,
  });

  // useEffect(() => {
  //   refetch(1, search);
  // }, [search, refetch]);

  if (isLoading) {
    // console.log("Loading");
    return <div>Loading...</div>;
  }

  if (error)
    return <div>Sorry, something goes wrong. Error: {error.message}</div>;

  const sortedCharacters = sortObjectsWithKey(data.results, "name");

  return (
    <List>
      {sortedCharacters.map(({ id, image, name, species }) => (
        <Item key={id}>
          <Card
            image={image}
            title={name}
            text={species}
            url={`${baseUrl}/${id}`}
          />
        </Item>
      ))}
    </List>
  );
};

export default CardList;
