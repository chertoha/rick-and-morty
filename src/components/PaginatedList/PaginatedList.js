import PropTypes from "prop-types";
import CardList from "components/CardList";
import Paginator from "components/Paginator";
import { PagWrapper } from "./PaginatedList.styled";

const PaginatedList = ({
  list,
  page,
  totalItems,
  onPageClick,
  baseUrl,
  locationFrom,
}) => {
  return (
    list && (
      <>
        <CardList list={list} baseUrl={baseUrl} locationFrom={locationFrom} />

        <PagWrapper>
          <Paginator
            currentPage={page}
            totalItems={totalItems}
            onPageClick={onPageClick}
            perPage={20}
            nearbyQtyPages={1}
          />
        </PagWrapper>
      </>
    )
  );
};

export default PaginatedList;

PaginatedList.propTypes = {
  list: PropTypes.array,
  page: PropTypes.number,
  totalItems: PropTypes.number,
  onPageClick: PropTypes.func.isRequired,
  baseUrl: PropTypes.string,
  locationFrom: PropTypes.object,
};
