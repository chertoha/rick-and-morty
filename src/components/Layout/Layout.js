import { Outlet } from "react-router-dom";
import { StyledLayout } from "./Layout.styled";

const Layout = () => {
  return (
    <StyledLayout>
      {/* <header>Header</header> */}
      <Outlet />
    </StyledLayout>
  );
};

export default Layout;
