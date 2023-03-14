import PropTypes from "prop-types";
import {
  DropDownItem,
  DropDownList,
  DropDownWrapper,
  Title,
  TitleWrapper,
} from "./DropDown.styled";
import { AiFillCaretDown } from "react-icons/ai";
import { useState } from "react";

const DropDown = ({ title, email, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropDownWrapper
      tabIndex={1}
      onMouseOver={() => {
        setIsOpen(true);
      }}
      onMouseLeave={() => {
        setIsOpen(false);
      }}
      onFocusCapture={() => {
        setIsOpen(true);
      }}
    >
      <TitleWrapper>
        <Title>{title}</Title>
        <AiFillCaretDown size={20} color="#424ab3" />
      </TitleWrapper>

      {isOpen && (
        <DropDownList>
          <DropDownItem>{email}</DropDownItem>
          <DropDownItem
            tabIndex={1}
            link
            onClick={() => {
              onLogout();
            }}
            onKeyDownCapture={() => {
              onLogout();
            }}
          >
            Log out
          </DropDownItem>
        </DropDownList>
      )}
    </DropDownWrapper>
  );
};

export default DropDown;

DropDown.propTypes = {
  title: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};
