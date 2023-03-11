import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import { PagButton, PagItem, PagList } from "./Paginator.styled";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { RxDotsHorizontal } from "react-icons/rx";

const perPage = 20;
const nearbyQtyPages = 1;

const Paginator = ({ totalItems, currentPage = 1, onPageClick }) => {
  //   const [totalItems, setTotalItems] = useState(1);
  //   const [page, setPage] = useState(1);

  if (totalItems <= perPage) {
    return;
  }

  //   console.log("total=", totalItems);
  console.log("current page=", currentPage);

  const lastPageNumber = Math.ceil(Number(totalItems) / Number(perPage));
  const calculationList = calculatePagination(
    currentPage,
    lastPageNumber,
    nearbyQtyPages
  );

  return (
    <PagList>
      {calculationList.map(({ title, value, type, Icon }) => (
        <PagItem key={nanoid(5)}>
          <PagButton
            type={type}
            onClick={() => {
              onPageClick(value);
            }}
          >
            {title}
            {Icon && <Icon />}
          </PagButton>
        </PagItem>
      ))}
      {/* {currentPage > 4 && (
        <li>
          <button>prev</button>
        </li>
      )}

      {currentPage <= lastPageNumber - 4 && (
        <li>
          <button>next</button>
        </li>
      )} */}
    </PagList>
  );
};

export default Paginator;

Paginator.propTypes = {
  totalItems: PropTypes.number.isRequired,
  currentPage: PropTypes.number,
  onPageClick: PropTypes.func.isRequired,
};

function calculatePagination(currentPage, lastPageNumber, nearbyQtyPages) {
  const pag = [];

  //PREV
  if (currentPage > 4) {
    pag.push({
      title: "",
      value: currentPage - 1,
      type: "arrow",
      Icon: BsChevronLeft,
    });
  }

  for (let i = 1; i <= lastPageNumber; i++) {
    //CURRENT PAGE
    if (i === currentPage) {
      pag.push({ title: currentPage, value: currentPage, type: "current" });
      continue;
    }

    //LEFT DOTS
    if (i > 1 && i < currentPage - nearbyQtyPages - 1) {
      pag.push({
        title: "",
        value: currentPage - 4,
        type: "dots",
        Icon: RxDotsHorizontal,
      });
      i = currentPage - nearbyQtyPages - 1;
      continue;
    }

    //RIGHT DOTS
    if (i > currentPage + nearbyQtyPages && i < lastPageNumber - 1) {
      pag.push({
        title: "",
        value: currentPage + 4,
        type: "dots",
        Icon: RxDotsHorizontal,
      });
      i = lastPageNumber - 1;
      continue;
    }

    //LAST PAGE MORE THAN 4 digits
    if (i === lastPageNumber && lastPageNumber > 9999) {
      pag.push({ title: "Last", value: i });
      continue;
    }

    //OTHER PAGES
    pag.push({ title: i, value: i });
  }

  //NEXT
  if (currentPage <= lastPageNumber - 4) {
    pag.push({
      title: "",
      value: currentPage + 1,
      type: "arrow",
      Icon: BsChevronRight,
    });
  }

  return pag;
}
