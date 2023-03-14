import Profile from "components/Profile";
import { Outlet } from "react-router-dom";
import { StyledLayout } from "./Layout.styled";

const Layout = () => {
  return (
    <StyledLayout>
      <Profile />
      <Outlet />
    </StyledLayout>
  );
};

export default Layout;
