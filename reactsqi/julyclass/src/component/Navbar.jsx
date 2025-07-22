import React from "react";
import image from "../assets/hero.png";
import { FaMoon } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const Navbar = () => {
  // const [state, setstate]=useState(intialvalue)
  const [name, setname] = useState("esther");
  const [count, setcount] = useState(0);
  const [liked, setliked] = useState(false);
  const [user, setuser] = useState({
    name: "esther",
    department: "software dept",
  });

  let myname = "olamide";
  let year = new Date().getFullYear();
  return (
    <>
      <img style={{ width: "300px", height: "200px" }} src={image} alt="" />
      <div className="bg-danger w-100 h-50"></div>
      <h1> welcome {myname}</h1>
      <p>{Math.random()}</p>
      <p>{Math.random()}</p>
      <p>{2 + 3}</p>
      <p className={myname == "Esther" ? "text-danger" : "text-info"}>
        {myname == "Esther" ? "female" : "male"}
      </p>

      <p>The year is {year}</p>
      <p>{/* <FontAwesomeIcon icon={faHouse} /> */}</p>

      <p>
        <FaMoon />
      </p>
      <p style={{ color: "red", fontSize: "20px" }} className="text-danger">
        {name}
      </p>

      <p>
        Home <IoMdHome />
      </p>
      <button onClick={() => setname("olamide")}>click</button>

      <p>{count}</p>
      <button onClick={() => setcount(count + 1)}>add</button>
      <button onClick={() => setcount(count - 1)}>sub</button>

      <div>
        <h2>Do you like this</h2>
        <button
          onClick={() => setliked(!liked)}
          style={{ fontSize: "24px", color: liked ? "red" : "gray" }}
        >
          {liked ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        <p>{user.name}</p>
        <p>{user.department}</p>
      </div>

      <button onClick={() => setuser({ ...user, department: "UI/UX dept" })}>
        change department
      </button>
    </>
  );
};

export default Navbar;
