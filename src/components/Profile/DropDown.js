import PropTypes from "prop-types";
import {
  DropDownItem,
  DropDownList,
  DropDownWrapper,
  IconWrapper,
  Title,
  TitleWrapper,
} from "./DropDown.styled";
import { AiFillCaretDown } from "react-icons/ai";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useWindowSize } from "hooks/useWindowSize";

const DropDown = ({ title, email, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { isMobile } = useWindowSize();

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
      {isMobile ? (
        <IconWrapper>
          <GiHamburgerMenu size={30} />
        </IconWrapper>
      ) : (
        <TitleWrapper>
          <Title>{title}</Title>
          <AiFillCaretDown size={20} color="#424ab3" />
        </TitleWrapper>
      )}

      {isOpen && (
        <DropDownList>
          {isMobile && <DropDownItem>{title}</DropDownItem>}
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
