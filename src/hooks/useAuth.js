const { useSelector } = require("react-redux");
const { selectAuth } = require("redux/auth/selectors");

export const useAuth = () => {
  let profile = null;
  profile = useSelector(selectAuth);
  const isLoggedIn = profile ? true : false;
  return { isLoggedIn, profile };
};
