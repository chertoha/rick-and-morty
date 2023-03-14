import { useAuth } from "hooks/useAuth";
import { Item, List, Nav, StyledLink } from "./NavBar.styled";
import { ROUTES } from "routes";

const NavBar = () => {
  const { isLoggedIn } = useAuth();
  const navLinks = [
    {
      title: "Home",
      route: ROUTES.MAIN,
      privateRoute: false,
      hompage: true,
    },
    {
      title: "Secret link",
      route: ROUTES.LOCATION,
      privateRoute: true,
    },
  ];

  const isHomeLinkAloneInNavBar = (links) => {
    if (isLoggedIn) {
      return false;
    }

    const entry = links.find(
      ({ privateRoute, hompage }) => !privateRoute && !hompage
    );

    return entry ? false : true;
  };

  return (
    <Nav>
      <List>
        {navLinks.map(
          ({ title, route, privateRoute, hompage }) =>
            (!privateRoute || (privateRoute && isLoggedIn)) && (
              <Item key={title}>
                <StyledLink
                  to={route}
                  hidden={hompage && isHomeLinkAloneInNavBar(navLinks)}
                >
                  {title}
                </StyledLink>
              </Item>
            )
        )}
      </List>
    </Nav>
  );
};

export default NavBar;
