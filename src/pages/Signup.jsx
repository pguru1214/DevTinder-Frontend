import React from "react";

const Signup = () => {
  return (
    <div className="transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 my-10">
      <div className="card card-border bg-base-300 w-96 ">
        <div className="card-body">
          <h2 className="card-title justify-center">Sign up</h2>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">First name</legend>
            <input type="text" className="input" />
            <legend className="fieldset-legend">Last name</legend>
            <input type="text" className="input" />

            <legend className="fieldset-legend">Email ID</legend>
            <input type="email" className="input" />

            <legend className="fieldset-legend">Password</legend>
            <input type="password" className="input" />

            <legend className="fieldset-legend">Age</legend>
            <input type="email" className="input" />

            <legend className="fieldset-legend">Gender</legend>
            <input type="email" className="input" />
            <legend className="fieldset-legend">About</legend>
            <input type="email" className="input" />
          </fieldset>

          <div className="card-actions justify-center">
            <button className="btn btn-primary mt-3">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
