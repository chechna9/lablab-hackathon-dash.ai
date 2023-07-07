import { assets } from "../../../utils/assets";

const Footer = () => {
  return (
    <footer className="flex flex-col mx-[10vw] space-y-3 my-[5vh]">
      <div className="flex justify-evenly py-[5vh] border-t-2 border-b-2 ">
        {/* first col */}
        <div className="w-[20vw]">
          <img src={assets.blackLogo} alt="" className="w-20" />
          <p className="text-[#565656]">
            Harness the power of our AI and GPT-4 to effortlessly unlock
            game-changing insights from your E-commerce feedback data, all while
            keeping your hands free.
          </p>
        </div>
        {/* second col */}
        <div>
          <h1 className="font-bold mb-4">What We Do</h1>
          <ul>
            <li>Web Design</li>
            <li>App Design</li>
            <li>Social Media Manage</li>
            <li>Market Analysis Project</li>
          </ul>
        </div>
        {/* third col */}
        <div>
          <h1 className="font-bold mb-4">Company</h1>
          <ul>
            <li>About Us</li>
            <li>Career</li>
            <li>Become Investor</li>
          </ul>
        </div>
        {/* forth col */}
        <div>
          <h1 className="font-bold mb-4">Support</h1>
          <ul>
            <li>FAQ</li>
            <li>Policy</li>
            <li>Business</li>
          </ul>
        </div>
        {/* fifth col */}
        <div>
          <h1 className="font-bold mb-4">Contact</h1>
          <ul>
            <li>WhatsApp</li>
            <li>Support 24</li>
          </ul>
        </div>
      </div>
      <p className="text-[#A4A4A4] text-[16px] self-center">Copyright © 2023 DataX</p>
    </footer>
  );
};

export default Footer;
