import { assets } from "../../../utils/assets";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="main" className="px-10 h-screen flex flex-col justify-evenly items-center relative">
      <motion.h1
        className="font-bold text-[64px] text-center"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{delay:0.2}}
        viewport={{ once: true, amount: 0.5 }}
      >
        Analyse your client’s feedbacks
        <br /> in a <span className="text-myRed">click</span>
      </motion.h1>
      <motion.p className="text-[32px] text-center mx-14"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{delay:0.2}}
      viewport={{ once: true, amount: 0.5 }}
      >
        Harness the power of our{" "}
        <span className="text-myRed font-semibold">AI</span> and{" "}
        <span className="text-myRed font-semibold">GPT-4</span> to effortlessly
        unlock game-changing insights from your{" "}
        <span className="text-myRed font-semibold">E-commerce</span> feedback
        data, all while keeping your hands free.
      </motion.p>
      <motion.button className="bg-myRed hover:bg-myDark py-3 px-10 text-white rounded-full font-medium transition-all text-[32px]"
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{delay:0.2}}
      viewport={{ once: true, amount: 0.5 }}
      onClick={
        () => {
          window.location.href = "/chat";
        }
        
      }
      >
        Get Started
      </motion.button>
      {/* setting the bg images */}
      {/* top left img */}
      <img
        src={assets.shape2}
        alt=""
        className="absolute -z-20 left-0 -translate-x-[50%] top-[20%]"
      />
      {/* top right img */}
      <img
        src={assets.circle}
        alt=""
        className="absolute -z-20 right-10  top-[20%]"
      />
      {/* bottom right right img */}
      <div className="absolute -z-20 right-0 -translate-x-[40%] bottom-[10%]">
        <img src={assets.grid} alt="" className="inline" />
        <img src={assets.grid} alt="" className="inline ml-3" />
      </div>
      {/* bottom right left img */}
      <img
        src={assets.bigCirlce}
        alt=""
        className="absolute -z-20 left-0 -translate-x-[50%] translate-y-[50%] bottom-0 w-[358px]"
      />
    </section>
  );
};

export default HeroSection;
