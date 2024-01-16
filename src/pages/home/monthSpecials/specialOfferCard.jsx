import React from "react";
import { NavLink } from "react-router-dom";
import monthSpecial_Data from "../../../assets/data/monthSpecial";

const SpecialOfferCard = () => {
  return monthSpecial_Data.map((monthSpecial, indx) => (
    <div
      key={indx}
      className={`specialOffer_card_container row ${
        monthSpecial.cardDesign === "imgRight"
          ? "appropirate_card_structure_sm"
          : ""
      }`}
    >
      {monthSpecial.cardDesign === "imgLeft" ? (
        <>
          <div
            className="col-sm-8 leftSideImg"
            style={{
              backgroundImage: `url(${monthSpecial.img})`,
            }}
          ></div>
          <div className="col-sm-4 rightSideTxt">
            <div className="specialOffer_card_title">{monthSpecial.title}</div>
            <div className="specialOffer_card_paragraphs">
              <p>{monthSpecial.p_01}</p>
              <p>{monthSpecial.p_02}</p>
            </div>
            <button>
              <NavLink to="/menu">FIND OUT MORE</NavLink>
            </button>
          </div>
        </>
      ) : monthSpecial.cardDesign === "imgRight" ? (
        <>
          <div className="col-sm-4 leftSideTxt">
            <div className="specialOffer_card_title">{monthSpecial.title}</div>
            <div className="specialOffer_card_paragraphs">
              <p>{monthSpecial.p_01}</p>
              <p>{monthSpecial.p_02}</p>
            </div>
            <button>
              <NavLink to="/menu">FIND OUT MORE</NavLink>
            </button>
          </div>
          <div
            className="col-sm-8 rightSideImg"
            style={{
              backgroundImage: `url(${monthSpecial.img})`,
            }}
          ></div>
        </>
      ) : null}
    </div>
  ));
};

export default SpecialOfferCard;
