import './HowItWorkCard.css'
interface howItWorkProp {
  icon: string;
  title: string;
  content: string;
  isBlue?: boolean;
}
export default function HowItWorkCard({ icon, title, content, isBlue }: howItWorkProp) {
  return (
    <div className={`HowItWorkCard FlexCol Card ${isBlue ? "BlueCard" : ""}`}>
      <img src={icon} alt="" />
      <div className="HowItWorkCardCon FlexCol">
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    </div>
  );
}
