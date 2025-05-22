import MostTrendingCard from "../../Components/Cards/MostTrendingCard/MostTrendingCard";
import SectionTit from "../../Components/SectionsTit/SectionTit";
import "./MostTrending.css";

export default function MostTrending() {
  const data = [
    {
      src: "/Images/trending1.png",
      price: "30000",
      dis: "Luxury Apartment in California",
      loc: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    },
    {
      src: "/Images/trending2.png",
      price: "30000",
      dis: "Luxury Apartment in California",
      loc: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    },
    {
      src: "/Images/trending3.png",
      price: "30000",
      dis: "Luxury Apartment in California",
      loc: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    },
    {
      src: "/Images/trending4.png",
      price: "30000",
      dis: "Luxury Apartment in California",
      loc: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    },
    {
      src: "/Images/trending5.png",
      price: "30000",
      dis: "Luxury Apartment in California",
      loc: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    },
    {
      src: "/Images/trending6.png",
      price: "30000",
      dis: "Luxury Apartment in California",
      loc: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    },
  ];
  return (
    <div className="MostTrending Container MarginBott">
      <SectionTit
        tit="Most Trending"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
      />
      <div className="MostTrendingCards Between">
        {data.map((item, index) => (
          <MostTrendingCard
            key={index}
            src={item.src}
            price={item.price}
            dis={item.dis}
            loc={item.loc}
          />
        ))}
      </div>
    </div>
  );
}
