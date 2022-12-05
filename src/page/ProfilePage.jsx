import React from "react";
import { useAuth } from "../context/AuthContext";

function ProfilePage() {
  const { user, logout } = useAuth();
  console.log("user", user);

  const handleClickLogout = () => {
    alert("you want to log out ?");
    logout();
  };

  return (
    <div className="flex justify-center ">
      <div className=" flex flex-col items-center h-screen justify-center ">
        <img src={user.avatar} className="w-2/5 lg:w-3/5" />
        <div className="lg:text-[50px] text-[25px] mt-2 ">
          {" "}
          {user.first_name} {user.last_name}{" "}
        </div>
        <div className="lg:text-[40px] text-[20px] m-3 ">{user.email}</div>
        <button
          onClick={handleClickLogout}
          className="bg-sky-800 m-3 hover:bg-sky-800/60 text-zinc-200 font-bold py-1.5 px-4 w-36 "
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;
