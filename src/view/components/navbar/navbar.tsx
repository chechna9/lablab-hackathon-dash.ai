import { useState } from "react";
import { assets } from "../../../utils/assets";

import NavLi from "./nav_li";


const Navbar = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const handleActiveLink = (link: string) => {
    setActiveLink(link);
    console.log(activeLink === "home");
    
  };
  return (
    <nav className="flex justify-evenly items-center my-2">
      <img src={assets.blackLogo} alt="" className="w-[80px]" />
      <ul className="flex justify-evenly w-[50vw] ">
        <NavLi
          onClick={() => handleActiveLink("home")}
          isActive={activeLink === "home"}
        >
          Home
        </NavLi>
        <NavLi
          onClick={() => handleActiveLink("what-we-do")}
          isActive={activeLink === "what-we-do"}
        >
          What We Do
        </NavLi>
        <NavLi
          onClick={() => handleActiveLink("service")}
          isActive={activeLink === "service"}
        >
          Service
        </NavLi>
        <NavLi
          onClick={() => handleActiveLink("project")}
          isActive={activeLink === "project"}
        >
          Projet
        </NavLi>
        <NavLi
          onClick={() => handleActiveLink("contact")}
          isActive={activeLink === "contact"}
        >
          Contact
        </NavLi>
      </ul>
      <button className="bg-myPurple hover:bg-myDarkBlue py-3 px-10 text-white rounded-full font-medium transition-all">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
