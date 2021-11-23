import { React, useState } from "react";
import UserPool from "../UserPool";
import logointra from "../assets/img/logo-intra.png";
import { LockClosedIcon, UserIcon } from "@heroicons/react/solid";
import "../index.css";

const Singup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
    });
  };

  return (
    <div className="bg-gray-700 w-1/4 flex flex-col items-center justify-center rounded-3xl shadow-md">
      <img src={logointra} alt="" className="" />
      <form
        className="flex flex-col space-y-6 items-center h-80 pt-1"
        onSubmit={onSubmit}
      >
        <div className="flex flex-row items-center space-x-2 pt-4">
          <UserIcon className="text-gray-500 h-5 w-5" />
          <input
            value={email}
            placeholder="Usuario"
            onChange={(event) => setEmail(event.target.value)}
            className="py-1 rounded-md bg-gray-500 text-white placeholder-gray-300"
            type="text"
          />
        </div>
        <div className="flex flex-row items-center space-x-2">
          <LockClosedIcon className="text-gray-500 h-5 w-5" />
          <input
            value={password}
            placeholder="Contraseña"
            onChange={(event) => setPassword(event.target.value)}
            className="py-1 rounded-md bg-gray-500 text-white placeholder-gray-300"
            type="password"
          />
        </div>

        <p className="text-white opacity-80 justify-end cursor-pointer pb-8">
          Olvidó su contraseña?
        </p>

        <button
          type="submit"
          className="bg-red-600 py-5 mt-1 px-40 rounded-md text-white tracking-widest hover:bg-red-500"
        >
          INGRESAR
        </button>
      </form>
    </div>
  );
};

export default Singup;
