import { motion } from "framer-motion";
import { HelpCardInterface } from "../../../interfaces/help_card_interface";
import { assets } from "../../../utils/assets";
import HelpCard from "../../components/help_card";

const HowHelpSection = () => {
  const help_cards: HelpCardInterface[] = [
    {
      title: "Business Idea Planning",
      description: "We present you a proposal and discuss niffty-gritty like",
      bgColor: "bg-[#F1F7FF]",
      icon: assets.box_search,
    },
    {
      title: "Financial Planning System",
      description: "Protocols apart from aengage models, pricing billing",
      bgColor: "bg-[#FFF7E3]",
      icon: assets.empty_wallet,
    },
    {
      title: "Development Website and App",
      description: "Communication protocols apart from engagement models",
      bgColor: "bg-[#FFF2F8]",
      icon: assets.code_1,
    },
    {
      title: "Market Analysis Project",
      description: "Protocols apart from aengage models, pricing billing",
      bgColor: "bg-[#DEFFEE]",
      icon: assets.chart_square,
    },
  ];
  return (
    <section id="service" className="flex items-start relative h-screen overflow-clip">
      <motion.div
        className="flex-1 ml-4"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="text-[48px] font-semibold">
          How can we help your E-business
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Ipsum iaculis a dolor eu lorem
          condimentum pellentesque mollis nisi. Enim amet id vulputate duis.
          Tincidunt convallis diam vestibulum elit.
        </p>
      </motion.div>
      <div className="flex flex-[2] justify-center space-x-4  self-center">
        {/* cards */}
        {/* firtst col */}
        <motion.div className="w-[20vw] flex flex-col space-y-4"
          initial={{ y: 0 }}
          whileInView={{ y: 25 }}
          transition={{delay:0.7}}
          viewport={{ once: true, amount: 0.5 }}
        >
          <HelpCard props={help_cards[0]} />
          <HelpCard props={help_cards[2]} />
        </motion.div>
        {/* second col */}
        <motion.div className="w-[20vw] flex flex-col space-y-4"
        initial={{ y: 0}}
        whileInView={{ y: -25 }}
        transition={{delay:0.7}}
        viewport={{ once: true, amount: 0.5 }}
        >
          <HelpCard props={help_cards[1]} />
          <HelpCard props={help_cards[3]} />
        </motion.div>
      </div>
      {/* images */}
      <img
        src={assets.shape4}
        alt=""
        className="absolute right-0 w-[50vw] -z-10 bottom-20"
      />
      <motion.img
        src={assets.circle}
        alt=""
        className="absolute right-[20%] -z-20 bottom-0"
        initial={{  opacity: 0 }}
        whileInView={{  opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
      />
      <img
        src={assets.shape5}
        alt=""
        className="absolute left-0 bottom-0 -z-10"
      />
      <motion.img
        src={assets.shape6}
        alt=""
        className="absolute left-[25%] bottom-0 -z-10"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
      />
      <div className="absolute -z-20 left-[40%] -translate-x-[50%] bottom-[10%]">
        <img src={assets.grid} alt="" className="inline" />
        <img src={assets.grid} alt="" className="inline ml-3" />
      </div>
    </section>
  );
};

export default HowHelpSection;
