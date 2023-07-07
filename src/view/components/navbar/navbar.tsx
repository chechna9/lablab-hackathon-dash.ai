import { assets } from "../../../utils/assets";

import NavLi from "./nav_li";

const Navbar = () => {
  return (
    <nav className="flex justify-evenly items-center my-2">
      <img src={assets.blackLogo} alt="" className="w-[80px]"/>
      <ul className="flex justify-evenly w-[50vw] ">
        <NavLi>Home</NavLi>
        <NavLi>What We Do</NavLi>
        <NavLi>Service</NavLi>
        <NavLi>Projet</NavLi>
        <NavLi>Contact</NavLi>
      </ul>
      <button className="bg-myPurple hover:bg-myDarkBlue py-3 px-8 text-white rounded-full font-medium transition-all">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
