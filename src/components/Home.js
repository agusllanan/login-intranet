import React from "react";
import logo from "../assets/img/ademincol.png";
import Singup from "./Singup";
import "../index.css";

const Home = () => {
  return (
    <>
      <div
        className="bg-no-repeat bg-cover relative h-screen flex flex-col items-center space-y-8 overflow-hidden pt-36"
        style={{
          backgroundImage: `url(/img/bg.png)`,
        }}
      >
        <Singup />
        <div className="">
          <img className="pt-12" src={logo} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
