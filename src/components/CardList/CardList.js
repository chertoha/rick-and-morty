import Card from "components/Card";
import { Item, List } from "./CardList.styled";

const CardList = ({ list, baseUrl = "", isLoading, error }) => {
  // console.log(list);

  if (isLoading) {
    console.log("Loading");
    return <div>Loading...</div>;
  }

  if (error)
    return <div>Sorry, something goes wrong. Error: {error.message}</div>;

  return (
    <List>
      {list.map(({ id, image, name, species }) => (
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
