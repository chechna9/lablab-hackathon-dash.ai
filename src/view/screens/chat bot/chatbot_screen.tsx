import { SideBarInterface } from "../../../interfaces/side_bar_interface";
import { assets } from "../../../utils/assets";
import SideBar from "./side_bar";

const ChatBotScreen = () => {
  const sidebarProps: SideBarInterface = {
    title: "TechStore Review Analysis",
    products: [
      {
        name: "Headphones",
        feedbacks: [
          {
            name: "Excellent Quality",
          },
          {
            name: "Good Quality",
          },
          {
            name: "Bad Quality",
          },
          {
            name: "Catastrophic Quality",
          },
        ],
      },
      {
        name: "Laptops",
        feedbacks: [
          {
            name: "Good Quality",
          },
          {
            name: "Bad Quality",
          },
          {
            name: "Catastrophic Quality",
          },
        ],
      },

      {
        name: "Phones",
        feedbacks: [
          {
            name: "Excellent Quality",
          },
          {
            name: "Good Quality",
          },
          {
            name: "Bad Quality",
          },
        ],
      },
      {
        name: "Keyboards",
        feedbacks: [
          {
            name: "Excellent Quality",
          },
          {
            name: "Good Quality",
          },
          
        ],
      },
    ],
  };
  return (
    <main className="h-screen relative flex">
      {/* side bar */}
      <div className="flex-1 py-3">
        <div className="flex items-center justify-around">
          <img src={assets.blackLogo} alt="" className="w-20" />
          <span className="bg-myRed rounded-full text-white font-semibold text-[24px] p-3 cursor-pointer">
            Me
          </span>
        </div>
        <SideBar {...sidebarProps} />
      </div>
      {/* chat */}
      <div className="flex-[2] bg-myPurpleLight m-6 rounded-3xl shadow-md">
        {/* top settings */}
      </div>
      <img
        src={assets.greenMedCircle}
        alt=""
        className="absolute bottom-0 left-0 -z-10"
      />
    </main>
  );
};

export default ChatBotScreen;
