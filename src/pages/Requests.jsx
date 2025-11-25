// Requests.jsx
import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { requestUser } from "../utils/requestSlice";
import UserCard from "./UserCard";

const Requests = () => {
  const dispatch = useDispatch();
  const userRequest = useSelector((store) => store.request);

  const reviewRequest = async (status, requestId) => {
    try {
      const url = `${BASE_URL}/request/review/${status}/${requestId}`;
      const res = await axios.post(url, {}, { withCredentials: true });
      console.log("review response:", res?.data);

      await requestConnections();
      //  dispatch(removeUser(requestId));
    } catch (error) {
      console.error("reviewRequest error:", error?.response || error);
    }
  };

  const requestConnections = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/user/requests/received`, {
        withCredentials: true,
      });
      console.log("Requests data:", res?.data?.data);
      dispatch(requestUser(res?.data?.data));
    } catch (error) {
      console.error("requestConnections error:", error?.response || error);
    }
  };

  useEffect(() => {
    requestConnections();
  }, []);

  return (
    <div className="flex flex-col items-center w-full connection-card">
      {!userRequest || userRequest.length === 0 ? (
        <h1 className="text-3xl font-bold my-6 text-center">
          No Requests Found...
        </h1>
      ) : (
        <h1 className="text-3xl font-bold my-6">Connections Request</h1>
      )}

      <div className="mb-4 flex flex-wrap items-center justify-center ">
        {userRequest.map((request) => (
          <div key={request._id} className="mx-4">
            <UserCard
              user={request.fromUserId}
              reviewRequest={(status) => reviewRequest(status, request._id)}
              showButtons={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Requests;
