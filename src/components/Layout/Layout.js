import Header from "components/Header";
import { Outlet } from "react-router-dom";
import { StyledLayout } from "./Layout.styled";

const Layout = () => {
  return (
    <StyledLayout>
      <Header />
      <Outlet />
    </StyledLayout>
  );
};

export default Layout;
