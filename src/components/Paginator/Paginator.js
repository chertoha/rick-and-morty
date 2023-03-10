import { useState } from "react";

const perPage = 20;

const Paginator = ({ totalItems, currentPage, onPageClick }) => {
  //   const [totalItems, setTotalItems] = useState(1);
  //   const [page, setPage] = useState(1);

  if (totalItems <= perPage) {
    return;
  }

  return <div></div>;
};

export default Paginator;
