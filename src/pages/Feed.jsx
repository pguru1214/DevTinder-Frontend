import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addFeed } from "../utils/feedSlice";
import Profile from "./Profile";

const Feed = () => {
  const dispatch = useDispatch();

  const feed = useSelector((store) => store.feed);

  const getFeed = async () => {
    if (feed) return;
    console.log(feed);
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);
  return (
    <div className="transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2">
      {feed && <Profile user={feed[1]} />}
    </div>
  );
};

export default Feed;
