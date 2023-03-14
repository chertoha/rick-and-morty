import { useAuth } from "hooks/useAuth";
import { useGoogleAuth } from "hooks/useGoogleAuth";
import { logout } from "redux/auth/slice";
import DropDown from "./DropDown";
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

  // console.log(profile);

  return (
    <ProfileContainer>
      <Wrapper>
        <ProfileBar>
          {!isLoggedIn && (
            <Button onClick={() => loginGoogle()}>Login with Google</Button>
          )}
          {/* {isLoggedIn && (
            <>
              <Name>{profile.name}</Name>
              <Button onClick={() => logoutGoogle()}>Log out</Button>
            </>
          )} */}

          {isLoggedIn && (
            <DropDown
              title={profile.name}
              email={profile.email}
              onLogout={logoutGoogle}
            />
          )}
        </ProfileBar>
      </Wrapper>
    </ProfileContainer>
  );
};

export default Profile;
