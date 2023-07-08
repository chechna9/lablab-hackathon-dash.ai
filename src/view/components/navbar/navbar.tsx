import { useState } from "react";
import { assets } from "../../../utils/assets";
import { Link } from "react-router-dom";
import NavLi from "./nav_li";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const handleActiveLink = (link: string) => {
    setActiveLink(link);
    console.log(activeLink === "home");
  };
  return (
    <nav className="flex justify-evenly items-center py-1 fixed w-full right-[50%] translate-x-[50%] backdrop-blur-sm z-10">
      <img src={assets.blackLogo} alt="" className="w-[80px]" />
      <ul className="flex justify-evenly w-[50vw] ">
        <NavLi
          onClick={() => {
            handleActiveLink("home");
            window.location.href = "/#main";
          }}
          isActive={activeLink === "home"}
        >
          Home
        </NavLi>
        <NavLi
          onClick={() => {
            handleActiveLink("what-we-do");
            window.location.href = "/#wwd";
          }}
          isActive={activeLink === "what-we-do"}
        >
          What We Do
        </NavLi>
        <NavLi
          onClick={() => {
            handleActiveLink("service");
            window.location.href = "/#service";
          }}
          isActive={activeLink === "service"}
        >
          Service
        </NavLi>
        <NavLi
          onClick={() => {
            handleActiveLink("project");
            window.location.href = "/#project";
          }}
          isActive={activeLink === "project"}
        >
          Project
        </NavLi>
        <NavLi
          onClick={() => {
            handleActiveLink("contact");
            window.location.href = "/#contact";
          }}
          isActive={activeLink === "contact"}
        >
          Contact
        </NavLi>
      </ul>
      <Link to="/login">
        <button className="bg-myPurple hover:bg-myDarkBlue py-3 px-10 text-white rounded-full font-medium transition-all">
          Login
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
