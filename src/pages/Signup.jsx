import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signupUserDetails } from "../utils/userSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signupUser, setSignupUser] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
    age: "",
    gender: "",
    about: "",
  });

  // generic change handler (keeps the state object shape)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(BASE_URL + "/signup", signupUser, {
        withCredentials: true,
      });
      console.log("response data:", res?.data);
      dispatch(signupUserDetails(res.data));
      setSignupUser((prev) => ({ ...prev, [name]: "" }));
      navigate("/login");
    } catch (error) {
      console.error(error?.response?.data ?? error?.message ?? error);
    }
  };

  return (
    <div className="connection-card py-10">
      <div className="flex justify-center">
        <div className="card card-border bg-base-300 w-96 ">
          <form className="card-body" onSubmit={handleSubmit}>
            <h2 className="card-title justify-center">Sign up</h2>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">First name</legend>
              <input
                name="firstName"
                type="text"
                className="input"
                value={signupUser.firstName}
                onChange={handleChange}
              />

              <legend className="fieldset-legend">Last name</legend>
              <input
                name="lastName"
                type="text"
                className="input"
                value={signupUser.lastName}
                onChange={handleChange}
              />

              <legend className="fieldset-legend">Email ID</legend>
              <input
                name="emailId"
                type="email"
                className="input"
                value={signupUser.emailId}
                onChange={handleChange}
              />

              <legend className="fieldset-legend">Password</legend>
              <input
                name="password"
                type="password"
                className="input"
                value={signupUser.password}
                onChange={handleChange}
              />

              <legend className="fieldset-legend">Age</legend>
              <input
                name="age"
                type="number"
                min="0"
                className="input"
                value={signupUser.age}
                onChange={handleChange}
              />

              <legend className="fieldset-legend">Gender</legend>
              <input
                name="gender"
                type="text"
                className="input"
                value={signupUser.gender}
                onChange={handleChange}
              />

              <legend className="fieldset-legend">About</legend>
              <textarea
                name="about"
                className="input"
                value={signupUser.about}
                onChange={handleChange}
              />
            </fieldset>

            <div className="card-actions items-center justify-between">
              <button className="btn btn-primary mt-3" type="submit">
                Sign up
              </button>
              <Link to="/login" className="text-sm link link-hover">
                Already user? Login here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
