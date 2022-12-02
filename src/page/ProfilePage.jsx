import React from "react";
import { useAuth } from "../context/AuthContext";

function ProfilePage() {
  const { user } = useAuth();
  console.log("user", user);
  return (
    <div>
      <div className="border">
        <img src={user.avatar} />
        <div>
          {" "}
          {user.first_name} {user.last_name}{" "}
        </div>
        <div>{user.email}</div>
      </div>
    </div>
  );
}

export default ProfilePage;
