import ErrorComponent from "components/ErrorComponent";
import Logo from "components/Logo";
import Paginator from "components/Paginator";
import ResidentList from "components/ResidentList";
import { useStorage } from "hooks/useStorage";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useGetLocationsQuery } from "redux/rickAndMortyApi/rickAndMortyApi";
import {
  Info,
  Item,
  List,
  LocationsContainer,
  Name,
  PagWrapper,
} from "./Locatioins.styled";

const Locations = () => {
  const { getFromStorage, updateStorage } = useStorage("locations_page");
  const [page, setPage] = useState(() => getFromStorage() ?? 1);

  useEffect(() => {
    updateStorage(page);
  }, [page, updateStorage]);

  const onPageHandler = (page) => {
    setPage(page);
  };

  const { data, error } = useGetLocationsQuery(page);
  const location = useLocation();

  if (error) {
    return <ErrorComponent title="Something went wrong!!!" timeout={3000} />;
  }

  if (!data) {
    return;
  }

  const locations = data.results;
  const totalLocationsCount = data.info.count;

  return (
    <LocationsContainer>
      <Logo />

      {locations && (
        <>
          <List>
            {locations.map(({ id, name, type, dimension, residents }) => (
              <Item key={id}>
                <Name>Name: {name}</Name>
                <Info>
                  <b>Type:</b> {type}
                </Info>
                <Info>
                  <b>Dimension:</b> {dimension}
                </Info>
                <Info>
                  <b>Resident links:</b>
                </Info>
                <ResidentList
                  list={residents}
                  fromLocation={{ from: location }}
                />
              </Item>
            ))}
          </List>
          <PagWrapper>
            <Paginator
              currentPage={page}
              onPageClick={onPageHandler}
              totalItems={totalLocationsCount}
              perPage={20}
              nearbyQtyPages={1}
            />
          </PagWrapper>
        </>
      )}
    </LocationsContainer>
  );
};

export default Locations;
