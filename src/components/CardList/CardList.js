import Card from "components/Card";
import { Item, List } from "./CardList.styled";

const CardList = ({ list, baseUrl = "" }) => {
  return (
    <List>
      {list &&
        list.map(({ id, image, name, species }) => (
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
