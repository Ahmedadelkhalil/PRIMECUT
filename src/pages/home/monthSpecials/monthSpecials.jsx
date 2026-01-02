import "./monthSpecials.css";
import SpecialOfferCard from "./specialOfferCard";

const MonthSpecials = () => {
  const sentence = "THIS MONTH'S SPECIAL";
  return (
    <div className="monthSpecial_container">
      <h1 className="monthSpecial_title text-center">{sentence}</h1>
      <SpecialOfferCard />
    </div>
  );
};

export default MonthSpecials;
