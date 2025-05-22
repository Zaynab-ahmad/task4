import './MostTrendingCard.css'
interface MostTrendingCardProp {
  src: string,
  price: string, 
  dis: string,
  loc: string,
}

export default function MostTrendingCard({ src, price, dis, loc }: MostTrendingCardProp) {
  return (
    <div className="MostTrendingCard FlexCol">
      <img src={src} alt="" className="MostTrendingCardImg" />
      <div className="FlexCol ItemsStart">
        <div className="MostTrendingCardCon FlexCol">
          <p className="MostTrendingCardPrice">${price}</p>
          <h3 className="MostTrendingCardH">{dis}</h3>
        </div>
        <div className="MostTrendingCardLoc Flex Between Items">
          <img src="/Icons/location2.svg" alt="" />
          <p>{loc}</p>
        </div>
      </div>
    </div>
  );
}
