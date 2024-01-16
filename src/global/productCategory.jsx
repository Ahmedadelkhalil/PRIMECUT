import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

// redux
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addProductToCart } from "../Redux/slices/cartSlice";

// alert
import Alert from "./alert/alert";
import { Toast } from "bootstrap";

// letter by letter animation effect
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProductCategory = (props) => {
  const [largeProAmount, setLargeProAmount] = useState(0);
  const [alertMsg, setAlertMsg] = useState("");

  const [smallProAmount_01, setSmallProAmount_01] = useState(0);
  const [smallProAmount_02, setSmallProAmount_02] = useState(0);
  const [smallProAmount_03, setSmallProAmount_03] = useState(0);
  const [smallProAmount_04, setSmallProAmount_04] = useState(0);

  //redux variables
  const dispatch = useDispatch();

  const currentProducts = useSelector((state) => state.cart);
  console.log(currentProducts);

  // handle alert
  const alertParent = React.createRef();
  const handleAlert = () => {
    const alertHolder = alertParent.current;
    const toast = new Toast(alertHolder);
    toast.show();
  };

  const largeProductCard = {
    name: props.productName,
    id: props.productID,
    img: props.img,
    kcal: props.kcal,
    fat: props.fat,
    saturates: props.saturates,
    sugars: props.sugars,
    salt: props.salt,
    description: props.description,
    price: props.price,
    category: props.category,
  };

  const smallProductCard_01 = {
    name: props.productName_sm_01,
    id: props.productID_sm_01,
    img: props.img_sm_01,
    kcal: props.kcal_sm_01,
    description: props.description_sm_01,
    price: props.price_sm_01,
    fat: props.fat_sm_01,
    saturates: props.saturates_sm_01,
    sugars: props.sugars_sm_01,
    salt: props.salt_sm_01,
    category: props.category_sm_01,
  };

  const smallProductCard_02 = {
    name: props.productName_sm_02,
    id: props.productID_sm_02,
    img: props.img_sm_02,
    kcal: props.kcal_sm_02,
    description: props.description_sm_02,
    price: props.price_sm_02,
    fat: props.fat_sm_02,
    saturates: props.saturates_sm_02,
    sugars: props.sugars_sm_02,
    salt: props.salt_sm_02,
    category: props.category_sm_02,
  };

  const smallProductCard_03 = {
    name: props.productName_sm_03,
    id: props.productID_sm_03,
    img: props.img_sm_03,
    kcal: props.kcal_sm_03,
    description: props.description_sm_03,
    price: props.price_sm_03,
    fat: props.fat_sm_03,
    saturates: props.saturates_sm_03,
    sugars: props.sugars_sm_03,
    salt: props.salt_sm_03,
    category: props.category_sm_03,
  };

  const smallProductCard_04 = {
    name: props.productName_sm_04,
    id: props.productID_sm_04,
    img: props.img_sm_04,
    kcal: props.kcal_sm_04,
    description: props.description_sm_04,
    price: props.price_sm_04,
    fat: props.fat_sm_04,
    saturates: props.saturates_sm_04,
    sugars: props.sugars_sm_04,
    salt: props.salt_sm_04,
    category: props.category_sm_04,
  };
  const categoryTitle = `best seller ${props.title}`;
  const animation = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  const sentenceAnimation = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  const characterAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
    if (!inView) {
      animation.start("hidden");
    }
  }, [animation, inView]);

  return (
    <section className="productSection mb-5">
      <motion.h1
        className="main-section-title text-center mb-4"
        initial="hidden"
        animate={animation}
        variants={sentenceAnimation}
      >
        {categoryTitle.split("").map((char, indx) => {
          return (
            <motion.span key={indx} ref={ref} variants={characterAnimation}>
              {char}
            </motion.span>
          );
        })}
      </motion.h1>
      <div className="productSection-container d-flex justify-content-center row">
        <div className="common-pic-container main-pic-container d-flex flex-column justify-content-center col-md-6 ">
          <div className=" d-flex justify-content-end">
            <small className="kcal-small d-flex flex-column justify-content-center align-items-center">
              <span>{props.kcal}</span>
              <span>kcal</span>
            </small>
          </div>
          <div>
            <div className="text-center large-img-of-left-side">
              <NavLink
                to={`/productDetails/:${props.productName.replaceAll(
                  " ",
                  "-"
                )}`}
                state={{ from: { largeProductCard } }}
              >
                <img src={props.img} alt={props.productName} />
              </NavLink>
            </div>
            <h4 className="main-pic-title">
              <NavLink
                to={`/productDetails/:${props.productName.replaceAll(
                  " ",
                  "-"
                )}`}
                state={{ from: { largeProductCard } }}
                className="main-color-green"
              >
                {props.productName}
              </NavLink>
            </h4>
            <div className="pro-info d-flex justify-content-between align-items-center">
              <span className="fw-bold text-capitalize">{`fat - ${props.fat}g`}</span>
              <span className="fw-bold text-capitalize">{`saturates - ${props.saturates}g`}</span>
              <span className="fw-bold text-capitalize">{`sugars - ${props.sugars}g`}</span>
              <span className="fw-bold text-capitalize">{`salt - ${props.salt}g`}</span>
            </div>
            <p className="large-pro-des">{props.description}</p>
            <div className="price-purchase-sec d-flex justify-content-between align-items-center">
              <div className="main-pic-amount">
                <button
                  onClick={() => {
                    if (largeProAmount === 0) {
                      return false;
                    } else {
                      setLargeProAmount(largeProAmount - 1);
                    }
                  }}
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <span>{largeProAmount}</span>
                <button onClick={() => setLargeProAmount(largeProAmount + 1)}>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
              <div className="d-flex align-items-center">
                <span className="main-pic-price">{`$${props.price}`}</span>
                <button
                  className="main-pro-addToCart-btn"
                  onClick={() => {
                    dispatch(
                      addProductToCart({
                        id: props.productID,
                        name: props.productName,
                        quantity: largeProAmount,
                        price: props.price,
                        img: props.img,
                        productTotalCost: props.price * largeProAmount,
                        kcal: props.kcal,
                        fat: props.fat,
                        saturates: props.saturates,
                        sugars: props.sugars,
                        salt: props.salt,
                        description: props.desc,
                        category: props.category,
                      })
                    );
                    setLargeProAmount(0);
                    if (largeProAmount === 0) {
                      setAlertMsg(`Choose Amount Please !!`);
                      handleAlert();
                    } else {
                      setAlertMsg(
                        `${props.productName} Added Successfult To Cart:)`
                      );
                      handleAlert();
                    }
                  }}
                >
                  <span>
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </span>
                  <span>add to cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 small-cards-container">
          <div className="row cus-small-cards-inSpecificRatio gap-2 gap-md-0">
            <div className="cart-show-inSpecificRatio col-3 col-md-12 col-lg-6 d-flex justify-content-center mb-0 mb-md-2 card-sm-one">
              {/* ============================ 1 =========================== */}
              <div className="common-pic-container sub-pic-container col-md-6 w-100 exception-xs-ratio">
                <div className=" d-flex justify-content-end">
                  <small className="kcal-small d-flex flex-column justify-content-center align-items-center">
                    <span>{props.kcal_sm_01}</span>
                    <span>kcal</span>
                  </small>
                </div>
                <div>
                  <div className="text-center">
                    <NavLink
                      to={`/productDetails/:${props.productName_sm_01.replaceAll(
                        " ",
                        "-"
                      )}`}
                      state={{ from: { smallProductCard_01 } }}
                    >
                      <img
                        src={props.img_sm_01}
                        alt={props.productName_sm_01}
                        className="w-100"
                      />
                    </NavLink>
                  </div>
                  <h4 className="sub-pic-title">
                    <NavLink
                      to={`/productDetails/:${props.productName_sm_01.replaceAll(
                        " ",
                        "-"
                      )}`}
                      state={{ from: { smallProductCard_01 } }}
                      className="main-color-green"
                    >
                      {props.productName_sm_01}
                    </NavLink>
                  </h4>
                  <p className="sub-pro-des">{props.description_sm_01}</p>
                  <div className="price-purchase-sec d-flex justify-content-between align-items-center">
                    <div className="sub-pic-amount d-flex">
                      <button
                        onClick={() => {
                          if (smallProAmount_01 === 0) {
                            return false;
                          } else {
                            setSmallProAmount_01(smallProAmount_01 - 1);
                          }
                        }}
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <span>{smallProAmount_01}</span>
                      <button
                        onClick={() =>
                          setSmallProAmount_01(smallProAmount_01 + 1)
                        }
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      <span className="sub-pic-price">{`$${props.price_sm_01}`}</span>
                      <button
                        className="sub-pro-addToCart-btn"
                        onClick={() => {
                          dispatch(
                            addProductToCart({
                              id: props.productID_sm_01,
                              name: props.productName_sm_01,
                              quantity: smallProAmount_01,
                              price: props.price_sm_01,
                              img: props.img_sm_01,
                              productTotalCost:
                                props.price_sm_01 * smallProAmount_01,
                              kcal: props.kcal_sm_01,
                              fat: props.fat_sm_01,
                              saturates: props.saturates_sm_01,
                              sugars: props.sugars_sm_01,
                              salt: props.salt_sm_01,
                              description: props.description_sm_01,
                              category: props.category_sm_01,
                            })
                          );
                          setSmallProAmount_01(0);
                          if (smallProAmount_01 > 0) {
                            setAlertMsg(
                              `${props.productName_sm_01} Added Successfult To Cart:)`
                            );
                            handleAlert();
                          } else {
                            setAlertMsg(`Choose Amount Please !!`);
                            handleAlert();
                          }
                        }}
                      >
                        <span>
                          <FontAwesomeIcon icon={faShoppingCart} />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* ======================================================= */}
            </div>
            <div className="cart-show-inSpecificRatio col-3 col-md-12 col-lg-6 d-flex justify-content-center mb-0 mb-lg-2 card-sm-two">
              {/* =========================== 2 ============================ */}
              <div className="common-pic-container sub-pic-container col-md-6 w-100 exception-xs-ratio">
                <div className=" d-flex justify-content-end">
                  <small className="kcal-small d-flex flex-column justify-content-center align-items-center">
                    <span>{props.kcal_sm_02}</span>
                    <span>kcal</span>
                  </small>
                </div>
                <div>
                  <div className="text-center">
                    <NavLink
                      to={`/productDetails/:${props.productName_sm_02.replaceAll(
                        " ",
                        "-"
                      )}`}
                      state={{ from: { smallProductCard_02 } }}
                    >
                      <img
                        src={props.img_sm_02}
                        alt={props.productName_sm_02}
                        className="w-100"
                      />
                    </NavLink>
                  </div>
                  <h4 className="sub-pic-title">
                    <NavLink
                      to={`/productDetails/:${props.productName_sm_02.replaceAll(
                        " ",
                        "-"
                      )}`}
                      state={{ from: { smallProductCard_02 } }}
                      className="main-color-green"
                    >
                      {props.productName_sm_02}
                    </NavLink>
                  </h4>
                  <p className="sub-pro-des">{props.description_sm_02}</p>
                  <div className="price-purchase-sec d-flex justify-content-between align-items-center">
                    <div className="sub-pic-amount d-flex">
                      <button
                        onClick={() => {
                          if (smallProAmount_02 === 0) {
                            return false;
                          } else {
                            setSmallProAmount_02(smallProAmount_02 - 1);
                          }
                        }}
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <span>{smallProAmount_02}</span>
                      <button
                        onClick={() =>
                          setSmallProAmount_02(smallProAmount_02 + 1)
                        }
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                    <div className="d-flex">
                      <span className="sub-pic-price">{`$${props.price_sm_02}`}</span>
                      <button
                        className="sub-pro-addToCart-btn"
                        onClick={() => {
                          dispatch(
                            addProductToCart({
                              id: props.productID_sm_02,
                              name: props.productName_sm_02,
                              quantity: smallProAmount_02,
                              price: props.price_sm_02,
                              img: props.img_sm_02,
                              productTotalCost:
                                props.price_sm_02 * smallProAmount_02,
                              kcal: props.kcal_sm_02,
                              fat: props.fat_sm_02,
                              saturates: props.saturates_sm_02,
                              sugars: props.sugars_sm_02,
                              salt: props.salt_sm_02,
                              description: props.description_sm_02,
                              category: props.category_sm_02,
                            })
                          );
                          setSmallProAmount_02(0);
                          if (smallProAmount_02 > 0) {
                            setAlertMsg(
                              `${props.productName_sm_02} Added Successfult To Cart:)`
                            );
                            handleAlert();
                          } else {
                            setAlertMsg(`Choose Amount Please !!`);
                            handleAlert();
                          }
                        }}
                      >
                        <span>
                          <FontAwesomeIcon icon={faShoppingCart} />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* ======================================================= */}
            </div>
            <div className="col-3 col-md-12 col-lg-6 d-none d-lg-flex justify-content-center card-sm-three">
              {/* ============================ 3 =========================== */}
              <div className="common-pic-container sub-pic-container col-md-6 w-100">
                <div className=" d-flex justify-content-end">
                  <small className="kcal-small d-flex flex-column justify-content-center align-items-center">
                    <span>{props.kcal_sm_03}</span>
                    <span>kcal</span>
                  </small>
                </div>
                <div>
                  <div className="text-center">
                    <NavLink
                      to={`/productDetails/:${props.productName_sm_03.replaceAll(
                        " ",
                        "-"
                      )}`}
                      state={{ from: { smallProductCard_03 } }}
                    >
                      <img
                        src={props.img_sm_03}
                        alt={props.productName_sm_03}
                        className="w-100"
                      />
                    </NavLink>
                  </div>
                  <h4 className="sub-pic-title">
                    <NavLink
                      to={`/productDetails/:${props.productName_sm_03.replaceAll(
                        " ",
                        "-"
                      )}`}
                      state={{ from: { smallProductCard_03 } }}
                      className="main-color-green"
                    >
                      {props.productName_sm_03}
                    </NavLink>
                  </h4>
                  <p className="sub-pro-des">{props.description_sm_03}</p>
                  <div className="price-purchase-sec d-flex justify-content-between align-items-center">
                    <div className="sub-pic-amount d-flex">
                      <button
                        onClick={() => {
                          if (smallProAmount_03 === 0) {
                            return false;
                          } else {
                            setSmallProAmount_03(smallProAmount_03 - 1);
                          }
                        }}
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <span>{smallProAmount_03}</span>
                      <button
                        onClick={() =>
                          setSmallProAmount_03(smallProAmount_03 + 1)
                        }
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                    <div className="d-flex">
                      <span className="sub-pic-price">{`$${props.price_sm_03}`}</span>
                      <button
                        className="sub-pro-addToCart-btn"
                        onClick={() => {
                          dispatch(
                            addProductToCart({
                              id: props.productID_sm_03,
                              name: props.productName_sm_03,
                              quantity: smallProAmount_03,
                              price: props.price_sm_03,
                              img: props.img_sm_03,
                              productTotalCost:
                                props.price_sm_03 * smallProAmount_03,
                              kcal: props.kcal_sm_03,
                              fat: props.fat_sm_03,
                              saturates: props.saturates_sm_03,
                              sugars: props.sugars_sm_03,
                              salt: props.salt_sm_03,
                              description: props.description_sm_03,
                              category: props.category_sm_03,
                            })
                          );
                          setSmallProAmount_03(0);
                          if (smallProAmount_03 > 0) {
                            setAlertMsg(
                              `${props.productName_sm_03} Added Successfult To Cart:)`
                            );
                            handleAlert();
                          } else {
                            setAlertMsg(`Choose Amount Please !!`);
                            handleAlert();
                          }
                        }}
                      >
                        <span>
                          <FontAwesomeIcon icon={faShoppingCart} />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* ======================================================= */}
            </div>
            <div className="col-3 col-md-12 col-lg-6 d-none d-lg-flex justify-content-center card-sm-four">
              {/* ============================= 4 ========================== */}
              <div className="common-pic-container sub-pic-container col-md-6 w-100">
                <div className=" d-flex justify-content-end">
                  <small className="kcal-small d-flex flex-column justify-content-center align-items-center">
                    <span>{props.kcal_sm_04}</span>
                    <span>kcal</span>
                  </small>
                </div>
                <div>
                  <div className="text-center">
                    <NavLink
                      to={`/productDetails/:${props.productName_sm_04.replaceAll(
                        " ",
                        "-"
                      )}`}
                      state={{ from: { smallProductCard_04 } }}
                    >
                      <img
                        src={props.img_sm_04}
                        alt={props.productName_sm_04}
                        className="w-100"
                      />
                    </NavLink>
                  </div>
                  <h4 className="sub-pic-title">
                    <NavLink
                      to={`/productDetails/:${props.productName_sm_04.replaceAll(
                        " ",
                        "-"
                      )}`}
                      state={{ from: { smallProductCard_04 } }}
                      className="main-color-green"
                    >
                      {props.productName_sm_04}
                    </NavLink>
                  </h4>
                  <p className="sub-pro-des">{props.description_sm_04}</p>
                  <div className="price-purchase-sec d-flex justify-content-between align-items-center">
                    <div className="sub-pic-amount d-flex">
                      <button
                        onClick={() => {
                          if (smallProAmount_04 === 0) {
                            return false;
                          } else {
                            setSmallProAmount_04(smallProAmount_04 - 1);
                          }
                        }}
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <span>{smallProAmount_04}</span>
                      <button
                        onClick={() =>
                          setSmallProAmount_04(smallProAmount_04 + 1)
                        }
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                    <div className="d-flex">
                      <span className="sub-pic-price">{`$${props.price_sm_04}`}</span>
                      <button
                        className="sub-pro-addToCart-btn"
                        onClick={() => {
                          dispatch(
                            addProductToCart({
                              id: props.productID_sm_04,
                              name: props.productName_sm_04,
                              quantity: smallProAmount_04,
                              price: props.price_sm_04,
                              img: props.img_sm_04,
                              productTotalCost:
                                props.price_sm_04 * smallProAmount_04,
                              kcal: props.kcal_sm_04,
                              fat: props.fat_sm_04,
                              saturates: props.saturates_sm_04,
                              sugars: props.sugars_sm_04,
                              salt: props.salt_sm_04,
                              description: props.description_sm_04,
                              category: props.category_sm_04,
                            })
                          );
                          setSmallProAmount_04(0);
                          if (smallProAmount_04 > 0) {
                            setAlertMsg(
                              `${props.productName_sm_04} Added Successfult To Cart:)`
                            );
                            handleAlert();
                          } else {
                            setAlertMsg(`Choose Amount Please !!`);
                            handleAlert();
                          }
                        }}
                      >
                        <span>
                          <FontAwesomeIcon icon={faShoppingCart} />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* ======================================================= */}
            </div>
          </div>
        </div>
      </div>
      <Alert ref={alertParent} msg={alertMsg} />
    </section>
  );
};
export default ProductCategory;
