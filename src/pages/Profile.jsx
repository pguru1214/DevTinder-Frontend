import React from "react";
import ProfileEdit from "./ProfileEdit";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((store) => store.user);
  return (
    user && (
      <div className="flex items-center justify-center w-full connection-card">
        <div>
          <ProfileEdit user={user} />
        </div>
        {/* <EditProfileView /> */}
      </div>
    )
  );
};

export default Profile;
