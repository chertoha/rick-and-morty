import DropDown from "./DropDown";
import { useAuth } from "hooks/useAuth";
import { useGoogleAuth } from "hooks/useGoogleAuth";
import { Button, ProfileBar, ProfileWrapper } from "./Profile.styled";

const Profile = () => {
  const { isLoggedIn, profile } = useAuth();
  const { loginGoogle, logoutGoogle } = useGoogleAuth();

  return (
    <ProfileWrapper>
      <ProfileBar>
        {!isLoggedIn && (
          <Button onClick={() => loginGoogle()}>Login with Google</Button>
        )}

        {isLoggedIn && (
          <DropDown
            title={profile.name}
            email={profile.email}
            onLogout={logoutGoogle}
          />
        )}
      </ProfileBar>
    </ProfileWrapper>
  );
};

export default Profile;
