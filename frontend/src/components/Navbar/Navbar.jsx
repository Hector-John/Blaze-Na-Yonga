import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { SlUserFemale } from "react-icons/sl";
import { GrUserManager } from "react-icons/gr";
import { TbMoodBoy } from "react-icons/tb";
import { IoMdHome } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const [menu, setMenu] = useState("all");
  

  return (
    <div className="navbar" >
      <div className="logo">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      <ul className="menu">
        <li
          onClick={() => {
            setMenu("all");
          }}
        >
          <Link to="/"> <IoMdHome size={15}/> All</Link> {menu === "all" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link to="/mens"> <GrUserManager size={15}/> Men</Link> {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link to="/womens"> <SlUserFemale size={15}/> Women</Link> {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids"> <TbMoodBoy size={15} /> Kids</Link> {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="loginCart">
        <Link to="/login" className="loginText">
          <FaRegUser size={25} color="#121212" />
        </Link>
        <Link to="/cart">
          {/* <img src={cart_icon} /> */}
          <FiShoppingCart size={27} color="#121212" />
        </Link>
        <div className="cartCount">0</div>
      </div>
    </div>
  );
};

export default Navbar;
