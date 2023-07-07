import { HelpCardInterface } from "../../interfaces/help_card_interface";
interface HelpCardProps {
  props: HelpCardInterface;
}

const HelpCard = (props: HelpCardProps) => {
  const icon = props.props.icon;
  const bgColor = props.props.bgColor;
  const title = props.props.title;
  const description = props.props.description;
  return (
    <div className="bg-white rounded-3xl flex flex-col items-center text-center p-6 space-y-2 shadow-md">
      <div className={`${bgColor} p-2 rounded-3xl`}>
        <img src={icon} alt="" />
      </div>
      <h1 className="text-[24px]">{title}</h1>
      <p className="text-[#757575]">{description}</p>
    </div>
  );
};

export default HelpCard;
