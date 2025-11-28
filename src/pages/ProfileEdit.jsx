import React, { useState } from "react";

import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const ProfileEdit = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [photoURL, setPhotoUrl] = useState(user.photoURL);
  const [gender, setGender] = useState(user.gender);
  const [about, setAbout] = useState(user.about);

  const dispatch = useDispatch();

  const profileEditChange = async () => {
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          age,
          photoURL,
          gender,
          about,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(res?.data?.data));
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="my-10 w-full">
      <h1 className="text-3xl font-bold mb-6 mt-10 text-center max-[767px]:mt-10">
        Edit profile
      </h1>
      <div className="flex flex-wrap justify-center">
        <div className="mx-10 max-[767px]:mx-0">
          <div className="card bg-base-300 w-96 shadow-sm p-4 max-[767px]:w-82 max-[767px]:mb-8 ">
            <h1 className="text-center">Edit Profile</h1>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">First Name</legend>
              <input
                type="text"
                className="input"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <legend className="fieldset-legend">Last Name</legend>
              <input
                type="text"
                className="input"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <legend className="fieldset-legend">Age</legend>
              <input
                type="text"
                className="input"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              <legend className="fieldset-legend">PhotoURL</legend>
              <input
                type="text"
                className="input"
                value={photoURL}
                onChange={(e) => setPhotoUrl(e.target.value)}
              />
              <legend className="fieldset-legend">Gender</legend>
              {/* <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="input"
                className="input"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                Click ⬇️
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <a>male</a>
                </li>
                <li>
                  <a>female</a>
                </li>
                <li>
                  <a>others</a>
                </li>
              </ul>
            </div> */}
              <input
                type="text"
                className="input"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
              <legend className="fieldset-legend">About</legend>
              <textarea
                className="textarea h-24"
                placeholder="Bio"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              ></textarea>
            </fieldset>
            <div className="card-actions justify-center">
              <button
                className="btn btn-primary mt-3"
                onClick={profileEditChange}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
        <div>
          <UserCard
            user={{ firstName, lastName, age, gender, photoURL, about }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
