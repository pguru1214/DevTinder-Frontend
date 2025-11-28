// UserCard.jsx
import React from "react";

const UserCard = ({ user, reviewRequest, showButtons = false, showFeedButtons = false }) => {
  if (!user) return null;

  const {
    _id = "",
    firstName = "",
    lastName = "",
    about = "",
    skills = [],
    photoURL,
    age = "",
    gender = "",
  } = user;

  // fallback image generator
  const fallback = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    `${firstName} ${lastName}`
  )}&background=0D8ABC&color=fff`;

  return (
    <div className="mb-4 mx-4">
      <div className="bg-base-300 w-96 shadow-sm p-4 rounded max-[767px]:w-82">
        <figure className="mb-2 h-48 overflow-hidden rounded">
          <img
            src={photoURL || fallback}
            alt={`${firstName} ${lastName}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = fallback;
            }}
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title">{`${firstName} ${lastName}`.trim()}</h2>
          <div className="flex items-center">
            <span className="text-sm">{age}</span>{" "}
            <span className="mx-1">,</span> <span>{gender}</span>
          </div>
          <p className="text-sm">{about}</p>

          {skills.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <span key={i} className="badge badge-outline">
                  {s}
                </span>
              ))}
            </div>
          )}

          {showButtons && (
            <div className="card-actions justify-center mt-4">
              <button
                className="btn btn-primary"
                onClick={() => reviewRequest("rejected", _id)}
              >
                Rejected
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  console.log("clicked"), reviewRequest("accepted", _id);
                }}
              >
                Accepted
              </button>
            </div>
          )}
          {showFeedButtons && (
            <div className="card-actions justify-center mt-4">
              <button
                className="btn btn-primary"
                onClick={() => reviewRequest("ignored", _id)}
              >
                Ignore
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  console.log("clicked"), reviewRequest("interested", _id);
                }}
              >
                Interested
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
