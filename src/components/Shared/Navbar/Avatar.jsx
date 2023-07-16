import React, { useContext } from "react";
import avatarImg from "../../../assets/images/placeholder.jpg";
import { AuthContext } from "../../../providers/AuthProvider";

const Avatar = () => {
  const { user } = useContext(AuthContext);
  return (
    <img
      src={user && user.photoURL ? user.photoURL : avatarImg}
      className="rounded-full"
      alt=""
      height="30"
      width="30"
    />
  );
};

export default Avatar;
