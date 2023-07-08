import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SideBarInterface } from "../../../interfaces/side_bar_interface";
import { assets } from "../../../utils/assets";
import SideBar from "./side_bar";
import {
  faChevronDown,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { DisscussionInterface } from "../../../interfaces/disscussion_interface";
import ChatMain from "./chat_main";
import { useEffect, useRef, useState } from "react";

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
  const [disscussion, setDisscussion] = useState<DisscussionInterface>({
    messages: [
      {
        message: "Hello",
        fromBot: false,
      },
      {
        message: "Hello am Dash Ai Bot",
        fromBot: true,
      },
      {
        message: "We win ?",
        fromBot: false,
      },
      {
        message:
          "SIuuuuuu 3-0 Lorem ipsum dolor sit amet consectetur. Vulputate pellentesque suspendisse eget vitae turpis velit proin nibh dolor. Sit at non lorem aliquam iaculis nisi ullamcorper. Sollicitudin duis et scelerisque et consectetur. Ultricies laoreet quam orci nunc sed. Urna purus vestibulum viverra suscipit non a. Tempor euismod nullam lectus ullamcorper non nunc sit fringilla dignissim. Lobortis ullamcorper ut nulla lacus consectetur neque. Felis lobortis enim suspendisse ut sed massa neque sit. Eu eu sit nulla sit leo pellentesque urna sit. Ultrices tristique mi imperdiet pellentesque tempus sapien purus adipiscing turpis. Nibh aliquam nunc tempor ac. Nunc aliquet ipsum velit augue risus. Orci mauris amet bibendum facilisis eget at lorem. Duis at arcu ipsum diam lobortis amet.",
        fromBot: true,
      },
    ],
  });
  const addMessage = (message: string) => {
    setDisscussion({
      messages: [
        ...disscussion.messages,
        {
          message,
          fromBot: false,
        },
      ],
    });
  };

  const handleSendMessage = () => {
    if (inputRef.current?.value) {
      addMessage(inputRef.current.value);
      inputRef.current.value = "";
    }
  };
  useEffect(() => {
    if (chatRef) chatRef!.current!.scrollTop = chatRef!.current!.scrollHeight;
  }, [disscussion]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const chatRef = useRef<HTMLDivElement | null>(null);
  return (
    <main className="h-screen relative flex ">
      {/* side bar */}
      <section className="flex-1 py-3">
        <div className="flex items-center justify-around">
          <img src={assets.blackLogo} alt="" className="w-20" />
          <span className="bg-myRed rounded-full text-white font-semibold text-[24px] p-3 cursor-pointer">
            Me
          </span>
        </div>
        <SideBar {...sidebarProps} />
      </section>
      {/* chat */}
      <section className="flex-[2] bg-myPurpleLight m-6 rounded-3xl shadow-md p-4 relative flex flex-col">
        {/* top settings */}
        <div className="flex items-center w-full justify-between">
          <FontAwesomeIcon
            icon={faChevronLeft}
            style={{ color: "white", fontSize: "30px" }}
            className="cursor-pointer"
          />
          <div className="flex space-x-[3px]">
            {/* title */}
            <div className="bg-white rounded-l-3xl">
              <h1 className="p-4">Headphones</h1>
            </div>
            {/* options */}
            <div className="bg-white rounded-r-3xl w-[30vw] flex items-center justify-between pr-3">
              <h1 className="p-4">Headphones</h1>
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{ color: "black", fontSize: "30px" }}
                className="cursor-pointer"
              />
            </div>
          </div>
          <motion.img
            src={assets.homeIcon}
            alt=""
            onClick={() => {
              window.location.href = "/";
            }}
            className="cursor-pointer"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          />
        </div>
        {/* chat */}
        <div className="mx-[5vw] flex flex-col flex-auto overflow-y-auto  space-y-1 mt-2">
          {/* chatt */}
          <div
            ref={chatRef}
            className="flex-auto overflow-y-auto  scrollbar-thumb-white scrollbar-thin  scrollbar-track-transparent"
          >
            <ChatMain {...disscussion} />
          </div>
          {/* chatt input */}
          <div className="bg-myPurple flex p-3 rounded-2xl items-center">
            <FontAwesomeIcon
              icon={faChevronDown}
              style={{ color: "white", fontSize: "30px" }}
              className="cursor-pointer"
            />
            <input
              ref={inputRef}
              type="text"
              className="bg-myPurple outline-none caret-white text-white w-full mx-6 placeholder:text-white"
              placeholder="Ask any question about the selected product reviews"
            />
            <motion.button
              whileHover={{ rotate: [0, -10, 10, 0] }}
              onClick={handleSendMessage}
              
            >
              <img src={assets.sendIcon} alt="" />
            </motion.button>
          </div>
        </div>

        {/* img */}
        <motion.img
          src={assets.chatIcon}
          alt=""
          className="absolute bottom-3 right-3"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        />
      </section>
      <img
        src={assets.greenMedCircle}
        alt=""
        className="absolute bottom-0 left-0 -z-10"
      />
    </main>
  );
};

export default ChatBotScreen;
