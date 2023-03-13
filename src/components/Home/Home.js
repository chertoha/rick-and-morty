import Container from "components/Container";
import Logo from "components/Logo";
import Search from "components/Search";
import PaginatedList from "components/PaginatedList";
import { useGetCharactersQuery } from "redux/characters/charactersApi";
import { sortObjectsWithKey } from "utils/sortObjectsWithKey";
import { HomeWrapper } from "./Home.styled";
import { useEffect, useState } from "react";
import { useStorage } from "hooks/useStorage";
import { useLocation } from "react-router";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import axios from "axios";
import { login, logout } from "redux/auth/slice";
import { useDispatch, useSelector } from "react-redux";
import { useGoogleAuth } from "hooks/useGoogleAuth";

const Home = () => {
  const { getFromStorage, updateStorage } = useStorage("query");
  const [search, setSearch] = useState(() => getFromStorage()?.name ?? "");
  const [page, setPage] = useState(() => getFromStorage()?.page ?? 1);
  const location = useLocation();

  const { loginGoogle, logoutGoogle } = useGoogleAuth();

  // //-----LOGIN GOOGLE
  // const dispatch = useDispatch();
  // const [user, setUser] = useState(null);
  // // const [profile, setProfile] = useState([]);

  const profile = useSelector((state) => state.auth.profile);

  console.log("PROFILE", profile);

  // const loginGoogle = useGoogleLogin({
  //   onSuccess: (codeResponse) => setUser(codeResponse),
  //   onError: (error) => console.log("Login Failed:", error),
  // });

  // const logoutGoogle = () => {
  //   googleLogout();
  //   dispatch(logout());
  // };

  // useEffect(() => {
  //   if (user) {
  //     axios
  //       .get(
  //         `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${user.access_token}`,
  //             Accept: "application/json",
  //           },
  //         }
  //       )
  //       .then((res) => {
  //         // setProfile(res.data);
  //         dispatch(login(res.data));
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // }, [user, dispatch]);
  // //-----LOGIN GOOGLE

  useEffect(() => {
    updateStorage({ page: page, name: search });
  }, [search, page, updateStorage]);

  const { data, error, isFetching } = useGetCharactersQuery({
    page: page,
    name: search,
  });

  const onSearchHandler = (value) => {
    setSearch(value);
    setPage(1);
  };

  const onPageHandler = (page) => {
    setPage(page);
  };

  const sortedCharacters = sortObjectsWithKey(data?.results, "name");
  const totalCharactersCount = data?.info.count;

  // console.log(data);

  return (
    <HomeWrapper>
      <Container>
        <button onClick={() => loginGoogle()}>GOOGLE LOGIN</button>
        <button onClick={() => logoutGoogle()}>GOOGLE LOG OUT</button>
        <Logo />

        <Search
          onSearch={onSearchHandler}
          value={search}
          isLoading={isFetching}
        />

        {error ? (
          <div>Sorry, something goes wrong! Error:</div>
        ) : (
          <PaginatedList
            list={sortedCharacters}
            baseUrl="/character"
            page={page}
            totalItems={totalCharactersCount}
            onPageClick={onPageHandler}
            locationFrom={{ from: location }}
          />
        )}
      </Container>
    </HomeWrapper>
  );
};

export default Home;

//use Selector to selectors
// PERSISTOR
