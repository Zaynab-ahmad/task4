import DreamHouse from "../../Sections/DreamHouse/DreamHouse";
import Hero from "../../Sections/Hero/Hero";
import HowItWork from "../../Sections/HowItWork/HowItWork";
import MostTrending from "../../Sections/MostTrending/MostTrending";
import RealDeal from "../../Sections/RealDeal/RealDeal";

export default function Home() {
  return (
    <div>
      <Hero />
      <HowItWork />
      <DreamHouse />
      <MostTrending />
      <RealDeal />
    </div>
  );
}
