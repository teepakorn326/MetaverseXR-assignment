import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
function LoginForm() {
  const navigate = useNavigate();
  const { login, user, getMe } = useAuth();
  const [input, setInput] = useState({ email: "", lastName: "" });
  const [fetch, setFetch] = useState([]);
  console.log("user", user);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const userData = await axios(
      "https://run.mocky.io/v3/7a7353bd-974e-4b9f-89c9-3defd93cd70b"
    );
    const allUser = userData.data.data;
    setFetch(allUser);
    console.log("allUser", allUser);
  };
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const userLogin = fetch.filter(
        (item) => item.email == input.email && item.last_name == input.lastName
      );
      if (!userLogin.length) {
        return alert("wrong email or last name");
      }
      login(userLogin[0]);
      getMe(userLogin[0]);
      alert("Hello! " + userLogin[0].first_name);
      navigate("/profile");
    } catch (err) {
      console.log(err);
      alert("fail to login");
    }
  };
  return (
    <form
      className="flex flex-col sm:w-1/5 gap-5 items-center  "
      onSubmit={handleSubmitForm}
    >
      <div className="lg:text-[70px] sm:text-[50px] text-[40px]  ">Sign in</div>

      <input
        className="form-control relative   w-full  px-3 py-1.5 text-base font-normal text-gray-700 bg-white border focus:bg-white focus:border-blue-600 focus:outline-none "
        placeholder="put the e-mail"
        name="email"
        onChange={handleChangeInput}
      />
      <input
        className="form-control relative  w-full  px-3 py-1.5 text-base font-normal text-gray-700 bg-white border focus:bg-white focus:border-blue-600 focus:outline-none "
        placeholder="put the last name"
        name="lastName"
        onChange={handleChangeInput}
      />

      <button className="bg-sky-800 hover:bg-sky-800/60 text-zinc-200 font-bold py-1.5 px-4 w-full ">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
