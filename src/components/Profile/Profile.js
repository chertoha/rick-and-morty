import Container from "components/Container";
import { useAuth } from "hooks/useAuth";
import { useGoogleAuth } from "hooks/useGoogleAuth";
import {
  Button,
  Name,
  ProfileBar,
  ProfileContainer,
  Wrapper,
} from "./Profile.styled";

const Profile = () => {
  const { isLoggedIn, profile } = useAuth();
  const { loginGoogle, logoutGoogle } = useGoogleAuth();

  return (
    <ProfileContainer>
      <Wrapper>
        <ProfileBar>
          {!isLoggedIn && (
            <Button onClick={() => loginGoogle()}>Login with Google</Button>
          )}
          {isLoggedIn && (
            <>
              <Name>{profile.name}</Name>
              <Button onClick={() => logoutGoogle()}>Log out</Button>
            </>
          )}
        </ProfileBar>
      </Wrapper>
    </ProfileContainer>
  );
};

export default Profile;
