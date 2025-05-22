import "./HeroBox.css";

interface HeroBoxProp {
  icon: string;
  title: string;
  txt: string;
}

export default function HeroBox({ icon, title, txt }: HeroBoxProp) {
  return (
    <div className="HeroBox Flex Items">
      <div className="HeroIcons Flex Center Items">
        <img src={icon} alt="" />
      </div>
      <div className="HeroBoxCon FlexCol Center">
        <h3>{title}</h3>
        <p>{txt}</p>
      </div>
    </div>
  );
}
