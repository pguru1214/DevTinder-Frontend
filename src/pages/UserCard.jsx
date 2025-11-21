import React from "react";

const UserCard = ({ user }) => {
  const { firstName, lastName, age, gender, photoURL, about } = user;
  return (
    <div>
      <div className=" bg-base-300 w-96 shadow-sm p-4">
        <figure>
          <img src={photoURL} alt="Profile" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          <p>{about}</p>
          <p>{age && gender && age + "," + gender}</p>
          <div className="card-actions justify-center mt-4">
            <button className="btn btn-primary">Ignore</button>
            <button className="btn btn-secondary">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
