// Feed.jsx (render part)
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addFeed, removeFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);
  const [loading, setLoading] = useState(false);

  const getFeed = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}/feed`, {
        withCredentials: true,
      });
      const usersArray = Array.isArray(res.data?.data) ? res.data.data : [];
      dispatch(addFeed(usersArray));
    } catch (err) {
      console.error("getFeed error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/request/send/${status}/${userId}`,
        {},
        { withCredentials: true }
      );
      console.log("Request response:", res.data);
      dispatch(removeFeed(userId));
      await getFeed();
    } catch (error) {
      console.error(error?.resposnse?.data);
    }
  };

  useEffect(() => {
    if (!feed || (Array.isArray(feed) && feed.length === 0)) getFeed();
  }, [feed]);

  // if (loading) return <div>Loading feed...</div>;
  // if (!Array.isArray(feed) || feed.length === 0)
  //   return <div>No users found.</div>;

  return (
    <div className="connection-card">
      {!Array.isArray(feed) || feed.length === 0 ? (
        <h1 className="text-3xl font-bold my-6 text-center">No users found.</h1>
      ) : (
        <h1 className="text-3xl font-bold my-6 text-center">Feed</h1>
      )}
      <div className="flex flex-wrap items-center gap-4 p-6 justify-center">
        {/* {feed.map((user, idx) => ( */}
        {feed && (
          <UserCard
            // key={user._id ?? idx}
            user={feed[0]}
            showFeedButtons
            reviewRequest={handleSendRequest}
          />
        )}
        {/* ))} */}
      </div>
    </div>
  );
};

export default Feed;
