import React from "react";
import Slider from "./slider/slider";
import "./css/home.css";
import BurgerSection from "./categorySection/burgerSection";
import ChickenSection from "./categorySection/chickenSection";
import DessertSection from "./categorySection/dessertSection";
import MonthSpecials from "./monthSpecials/monthSpecials";
import Vouchers from "./vouchers/vouchers";

// import ExperienceNewLevel from "./experience_New_Level/experienceNewLevel";
import BestDeal from "./bestDeal/bestDeal";

const Home = () => {
  return (
    <div className="home-container">
      <Slider />
      <div className="bestDeal-container mt-5 mb-3">
        <h1>see todays best deal</h1>
        <BestDeal />
      </div>
      <div className="py-2 px-4">
        {/* ================== BURGER SECTION ================== */}
        <BurgerSection />
        {/* ================== CHICKEN SECTION ================== */}
        <ChickenSection />
        {/* ================== DESSERT SECTION ================== */}
        <DessertSection />
        {/* ================== MONTH SPECIALS  ================== */}
        <MonthSpecials />
        <Vouchers />
      </div>
    </div>
  );
};

export default Home;
