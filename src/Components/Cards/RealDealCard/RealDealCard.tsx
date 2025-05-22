import "./RealDealCard.css";
import type { PropertyType } from "./../../../Data/data";
export const RealDealCard = ({ image, featured, is3D }: PropertyType) => {
  return (
    <div className="RealDealCard Card">
      <img src={image} alt="property" className="RealDealCardImg" />
      <div className="Labels Flex ">
        {featured && <span className="label">Featured</span>}
        {is3D && <span className="label">3D</span>}
      </div>
    </div>
  );
};
