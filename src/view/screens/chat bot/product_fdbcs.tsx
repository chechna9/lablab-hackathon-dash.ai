import { ProductInterface } from "../../../interfaces/product_interface";

interface ProductFDBKSProps {
  product: ProductInterface;
  active: boolean;
  onClick: () => void;
}
const ProductFDBKS = (props: ProductFDBKSProps) => {
  return (
    <div onClick={props.onClick} className={`${props.active ? "bg-white p-3 rounded-2xl w-full" : ""}`}>
      <h2 className={`${
        props.active ? "text-myRed " : "text-white cursor-pointer"
      }  font-medium text-[20px] transition-all`}>{props.product.name}</h2>
      {props.active && <ul>
        {props.product.feedbacks.map((fdbk, index) => {
          return (
            <li key={index} className="text-[16px] m-2">
              {fdbk.name}
            </li>
          );
        })}
      </ul>}
    </div>
  );
};

export default ProductFDBKS;
