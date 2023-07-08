import { useState } from "react";
import { SideBarInterface } from "../../../interfaces/side_bar_interface";
import ProductFDBKS from "./product_fdbcs";
import { assets } from "../../../utils/assets";

const SideBar = (props: SideBarInterface) => {
  const [activeProduct, setActiveProduct] = useState(0);
  const handleProductClick = (index: number) => {
    setActiveProduct(index);
  };

  return (
    <main className="bg-myPurple h-[75vh] mx-6 rounded-[30px] shadow-md flex flex-col items-start p-2 justify-between">
      <section className="flex flex-col self-center w-full">
        <h1 className="text-white font-semibold text-[24px] self-center">
        {props.title}
      </h1>
      {props.products.map((product, index) => {
        return (
          <ProductFDBKS
            key={index}
            product={product}
            active={index === activeProduct}
            onClick={() => handleProductClick(index)}
          />
        );
      })}
      </section>
      
      <button className="bg-myGreen hover:bg-myRed py-3 px-10 text-white rounded-full font-medium transition-all flex self-center">
        DashStat
        
          <img src={assets.statsIcon} alt="" className="w-6 ml-2"/>
        
      </button>
    </main>
  );
};

export default SideBar;
