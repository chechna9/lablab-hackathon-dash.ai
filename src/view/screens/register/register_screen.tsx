import { assets } from "../../../utils/assets";
import InputField from "../../components/input_field";
import {motion} from 'framer-motion'
const Register = () => {
  return (
    <main className="relative h-screen flex p-10 items-center overflow-clip">
      <p className="absolute right-10 top-10">
        Already have an account? &nbsp;
        <a href="/login" className="text-myGreen font-medium">
          Sign In
        </a>
      </p>
      <motion.div className="bg-signUp flex-1 bg-no-repeat flex flex-col justify-center items-start rounded-[50px] bg-cover pl-3 h-full shadow-xl"
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{delay:0.2}}
      viewport={{ once: true, amount: 0.5 }}
      >
        <img src={assets.whiteLogo} alt="" className="w-28" />
        <p className="text-white">Understand your clients in a click</p>
      </motion.div>
      {/* form */}
      <form className="flex-1 flex flex-col mx-8 justify-evenly h-full">
        <h1 className="font-medium text-[32px]">Create Account</h1>
        <div className="flex flex-col space-y-6">
          <InputField label="Name" />
          <InputField label="Email" />
          <InputField label="Password" isObscure={true}/>
        </div>

        <label>
          <input
            type="checkbox"
            className="mr-2 w-4 h-4 focus:ring-myGreen text-myGreen"
          />
          I agree to the{" "}
          <span className="text-myGreen cursor-pointer">Terms</span> and
          <span className="text-myGreen cursor-pointer"> Privacy Policy</span>.
        </label>
        <button className="bg-myGreen hover:bg-myRed py-3 px-10 text-white rounded-full font-medium transition-all text-[32px]">
          Sign Up
        </button>
      </form>
      {/* images */}
      <img src={assets.circle} alt="" className="absolute left-0 -translate-x-[60%] bottom-[30%]" />
      <img src={assets.grid} alt="" className="absolute left-[50%] -translate-x-[60%] -bottom-20 -z-10" />
      <motion.img src={assets.redMedCircle} alt="" className="absolute right-0  -bottom-0 -z-10" 
      initial={{  y:100,opacity: 0 }}
      whileInView={{  y:0,opacity: 1 }}
      transition={{delay:0.2}}
      viewport={{ once: true, amount: 0.5 }}
      />
    </main>
  );
};

export default Register;
