import { useAuth } from "hooks/useAuth";
import { useGoogleAuth } from "hooks/useGoogleAuth";
import DropDown from "./DropDown";
import { Button, ProfileBar, ProfileWrapper } from "./Profile.styled";

const Profile = () => {
  const { isLoggedIn, profile } = useAuth();
  const { loginGoogle, logoutGoogle } = useGoogleAuth();

  // console.log(profile);

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
