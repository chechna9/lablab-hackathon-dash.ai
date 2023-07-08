import { motion } from "framer-motion";
import { assets } from "../../../utils/assets";

const WhatWeDoSection = () => {
  return (
    <section id="wwd" className="flex items-center relative h-screen overflow-clip">
      <motion.div
        className="flex-1 mx-4"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="text-[48px] font-semibold">What We Do ?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Ipsum iaculis a dolor eu lorem
          condimentum pellentesque mollis nisi. Enim amet id vulputate duis.
          Tincidunt convallis diam vestibulum elit.
        </p>
      </motion.div>
      <div className="bg-shape3 flex-[2] bg-cover bg-no-repeat h-full relative flex items-center justify-center">
        {/* video */}
        <div className="bg-white rounded-[50px] h-[50%] w-[50%] flex items-center justify-center">
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1, rotate: [0, 10, -10, 0] }}
            whileHover={{ scale: 1.1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <img
              src={assets.playIcon}
              alt=""
              className="hover:scale-110 transition-all "
            />
          </motion.button>
        </div>
        {/* top  shape */}
        <motion.img
          src={assets.shape2}
          alt=""
          className="absolute z-20 top-0 right-0 translate-x-[50%]"
          initial={{ opacity: 0 }}
          whileInView={{opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        />
        {/* bottom right shape */}
        <motion.img
          src={assets.shape1}
          alt=""
          className="absolute right-0 bottom-0 z-10"
          initial={{ opacity: 0 }}
          whileInView={{opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        />
      </div>

      {/* bottom right left img */}
      <div className="absolute -z-20 left-0  bottom-[10%]">
        <img src={assets.grid} alt="" className="inline" />
        <img src={assets.grid} alt="" className="inline ml-3" />
      </div>
    </section>
  );
};

export default WhatWeDoSection;
