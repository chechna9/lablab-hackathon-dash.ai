import { DisscussionInterface } from "../../../interfaces/disscussion_interface";
import MessageCard from "../../components/message_card";

const ChatMain = (props: DisscussionInterface) => {
  return (
    <main  className="flex flex-col space-y-2 mx-1">
      {props.messages.map((message, index) => {
        return <MessageCard key={index} {...message} />;
      })}
    </main>
  );
};

export default ChatMain;
