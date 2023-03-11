import PropTypes from "prop-types";
import CardList from "components/CardList";
import Paginator from "components/Paginator";
import { PagWrapper } from "./PaginatedList.styled";

const PaginatedList = ({ list, page, totalItems, onPageClick, baseUrl }) => {
  return (
    list && (
      <>
        <CardList list={list} baseUrl={baseUrl} />

        <PagWrapper>
          <Paginator
            currentPage={page}
            totalItems={totalItems}
            onPageClick={onPageClick}
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
};
