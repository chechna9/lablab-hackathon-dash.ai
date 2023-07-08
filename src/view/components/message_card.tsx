import { MessageInterface } from "../../interfaces/message_interface";
import { assets } from "../../utils/assets";

const MessageCard = (props: MessageInterface) => {
  return (
    <p
      className={`${
        props.fromBot ? "bg-myPurple self-start" : "bg-myGreen self-end"
      } text-white text-[18px] font-normal p-2 rounded-2xl max-w-[25vw] break-words relative`}
    >
      {props.message}
      {props.fromBot && (
        <div className="absolute bg-white rounded-[120%] left-0 -translate-x-[100%] top-0 -translate-y-[50%] w-14 h-14 flex items-center justify-center">
          <img src={assets.aiIcon} alt="" className="w-10" />
        </div>
      )}
    </p>
  );
};

export default MessageCard;
