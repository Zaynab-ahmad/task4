import { useState } from "react";
import { RealDealCard } from "../../Components/Cards/RealDealCard/RealDealCard";
import SectionTit from "../../Components/SectionsTit/SectionTit";
import "./RealDeal.css";
import {propertyData} from './../../Data/data'

export default function RealDeal() {
  const tabs = ["Residential", "Commercial", "Agriculture", "Industrial"];
  const [activeTab, setActiveTab] = useState("Residential");
  const data = propertyData.filter((item)=>item.category === activeTab);


  return (
    <div className="RealDeal Container MarginBott">
      <SectionTit
        tit="Best Real Estate Deals"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
      />
      <div className="Tabs Flex">
        {tabs.map((tab, index) => (
          <a
            key={index}
            className={tab === activeTab ? "ActiveTap" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab} Property
          </a>
        ))}
      </div>
      <div>
        <div className="RealDealCards">
          {data.map((item) => (
            <RealDealCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
