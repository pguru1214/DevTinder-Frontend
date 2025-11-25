// UserCard.jsx
import React from "react";

const UserCard = ({ user, acceptCeonnection }) => {
  if (!user) return null;

  const {
    firstName = "",
    lastName = "",
    about = "",
    skills = [],
    photoURL,
    age = '',
    gender = '',
  } = user;

  // fallback image generator
  const fallback = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    `${firstName} ${lastName}`
  )}&background=0D8ABC&color=fff`;

  return (
    <div className="mb-4">
      <div className="bg-base-300 w-96 shadow-sm p-4 rounded">
        <figure className="mb-2 h-48 overflow-hidden rounded">
          <img
            src={photoURL || fallback}
            alt={`${firstName} ${lastName}`}
            className="w-full h-full object-cover"
            // if loading fails (404 / blocked / HTML), swap to fallback
            onError={(e) => {
              // prevent infinite loop if fallback fails
              e.currentTarget.onerror = null;
              e.currentTarget.src = fallback;
            }}
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title">{`${firstName} ${lastName}`.trim()}</h2>
         <div className="flex items-center">
           <span className="text-sm">{age}</span> <span className="mx-1">,</span> <span>{gender}</span>
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

          <div className="card-actions justify-center mt-4">
            <button className="btn btn-primary">Ignore</button>
            <button className="btn btn-secondary" onClick={() => {
              status: "accepted"
              acceptCeonnection(user._id)
            }}>Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
