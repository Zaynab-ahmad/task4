import HeroBox from "../../Components/Boxes/HeroBox/HeroBox";
import "./Hero.css";
export default function Hero() {
  const heroInfoData = [
    {
      icon: "/Icons/location.svg",
      title: "Location",
      content: "Ahmedabad, India",
    },
    {
      icon: "/Icons/dollar-circle.svg",
      title: "Price",
      content: "$1000 - $10,000",
    },
    {
      icon: "/Icons/house.svg",
      title: "Type of Property",
      content: "Apartment",
    },
  ];
  return (
    <div className="Hero MarginBott">
      <img src="/Images/Hero.png" alt="" className="HeroBack" />
      <div className="HeroContent Container FlexCol">
        <h2 className="HeroTitle">Discover a place you will love to live</h2>
        <p className="HeroParagraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
          tempus felis vitae sit est quisque.
        </p>
      </div>
      <div className="HeroInfo Flex Items Between">
        {heroInfoData.map((item, index) => (
          <HeroBox
            key={index}
            icon={item.icon}
            title={item.title}
            txt={item.content}
          />
        ))}
      </div>
    </div>
  );
}
