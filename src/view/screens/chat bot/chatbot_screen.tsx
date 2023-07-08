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
import { chatting } from "../../../services/chatting";

const fixedDisc: DisscussionInterface = { messages: [] };

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
    messages: [],
  });
  const addMessage = (message: string, fromBot: boolean = false) => {
    fixedDisc.messages.push({
      message,
      fromBot,
    });
    setDisscussion({
      messages: [
        ...fixedDisc.messages,
        {
          message,
          fromBot: fromBot,
        },
      ],
    });
    
    
  };

  useEffect(() => {
    if (chatRef) chatRef!.current!.scrollTop = chatRef!.current!.scrollHeight;
  }, [disscussion]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const chatRef = useRef<HTMLDivElement | null>(null);

  const handleSendMessage = async () => {
    if (inputRef && inputRef!.current!.value) {
      const msg = inputRef!.current!.value;
      addMessage(msg);
      console.log(msg);

      inputRef!.current!.value = "";

      chatting(msg)
        .then((res: any) => {
          addMessage(res.data["output"], true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
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
            <ChatMain {...fixedDisc} />
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
