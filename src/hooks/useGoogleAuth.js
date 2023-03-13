import { useEffect, useState } from "react";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import axios from "axios";
import { login, logout } from "redux/auth/slice";
import { useDispatch } from "react-redux";

export const useGoogleAuth = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          // setProfile(res.data);
          dispatch(login(res.data));
        })
        .catch((err) => console.log(err));
    }
  }, [user, dispatch]);

  const loginGoogle = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  const logoutGoogle = () => {
    googleLogout();
    dispatch(logout());
  };

  return { loginGoogle, logoutGoogle };
};
