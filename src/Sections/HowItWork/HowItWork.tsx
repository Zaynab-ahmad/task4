import HowItWorkCard from "../../Components/Cards/HowItWorkCard/HowItWorkCard";
import SectionTit from "../../Components/SectionsTit/SectionTit";
import "./HowItWork.css";

export default function HowItWork() {
  const data = [
    {
      icon: "/Icons/HIW1.svg",
      title: "Search Apartment",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
    },
    {
      icon: "/Icons/HIW2.svg",
      title: "Select Apartment",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
    },
    {
      icon: "/Icons/HIW3.svg",
      title: "Confirm Apartment",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
    },
  ];

  return (
    <div className="Container MarginBott">
      <SectionTit
        tit="How it Work"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
      />
      <div className="HowItWorkCards">
        {data.map((item, index) => {
          const isBlue = (index + 1 ) % 2 === 0; 

          return (
            <HowItWorkCard
              key={index}
              icon={item.icon}
              title={item.title}
              content={item.content}
              isBlue={isBlue}
            />
          );
        })}
      </div>
    </div>
  );
}
