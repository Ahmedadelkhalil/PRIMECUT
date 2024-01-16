import React, { useState, useEffect } from "react";
import "./productDetails.css";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import products from "../../assets/data/products";

// REDUX
import { addProductToCart } from "../../Redux/slices/cartSlice";
import { useDispatch } from "react-redux";

// ALERT
import Alert from "../../global/alert/alert";
import { Toast } from "bootstrap";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const ProductDetails = () => {
  const [productToView, setProductToView] = useState();
  const { state } = useLocation();
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (state) {
      const {
        largeProductCard,
        smallProductCard_01,
        smallProductCard_02,
        smallProductCard_03,
        smallProductCard_04,
        productInfo,
      } = state.from;
      setProductToView([
        { ...largeProductCard },
        { ...smallProductCard_01 },
        { ...smallProductCard_02 },
        { ...smallProductCard_03 },
        { ...smallProductCard_04 },
        { ...productInfo },
      ]);
    }
  }, [state]);

  // ALERT
  const [alertMsg, setAlertMsg] = useState("");
  const alertParent = React.createRef();
  const handleAlert = () => {
    const alertHolder = alertParent.current;
    const toast = new Toast(alertHolder);
    toast.show();
  };

  return (
    <>
      {productToView?.map((pro, indx) =>
        Object.keys(productToView[indx]).length !== 0 ? (
          <div className="productDetails_container bg-warning row pb-5">
            <div className="productDetails_backToMenu_sec col-12 mb-5">
              <button>
                <NavLink className="d-flex align-items-center" to="/menu">
                  <FontAwesomeIcon icon={faArrowLeft} />
                  back to menu
                </NavLink>
              </button>
            </div>
            <div className="productDetails_leftSide col-md-6 text-center text-md-end">
              <img src={pro?.img} alt="" />
            </div>
            <div className="productDetails_rightSide mt-4 mt-md-0 col-md-6 d-flex justify-content-center justify-content-md-start align-items-center">
              <div>
                <h3>{pro?.name}</h3>
                <div className="productDetails_ingredient_sec d-flex align-items-center">
                  <p className="d-flex align-items-center">
                    {`kcal:`} <span>{`${pro.kcal}`}</span>
                  </p>
                  <p className="d-flex align-items-center">
                    {`fat:`} <span>{`${pro.fat}g`}</span>
                  </p>
                  <p className="d-flex align-items-center">
                    {`saturates:`} <span>{`${pro.saturates}g`}</span>
                  </p>
                  <p className="d-flex align-items-center">
                    {`sugars:`} <span>{`${pro.sugars}g`}</span>
                  </p>
                  <p className="d-flex align-items-center">
                    {`salt:`} <span>{`${pro.salt}g`}</span>
                  </p>
                </div>
                <div className="productDetails_description_sec">
                  <p className="main-color-green">{pro.description}</p>
                </div>
                <div className="productDetails_quantity_sec d-flex align-items-center">
                  <span>quantity:</span>
                  <div className="d-flex align-items-center">
                    <button
                      onClick={() => {
                        if (quantity === 0) {
                          return false;
                        } else {
                          setQuantity(quantity - 1);
                        }
                      }}
                    >
                      <FontAwesomeIcon icon={faAngleLeft} />
                    </button>
                    <span className="main-color-green fw-semibold">
                      {quantity}
                    </span>
                    <button onClick={() => setQuantity(quantity + 1)}>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </button>
                  </div>
                </div>
                <div className="productDetails_price_addCart_sec">
                  <span>{`$${pro.price}`}</span>
                  <button
                    onClick={() => {
                      dispatch(
                        addProductToCart({
                          id: pro.id,
                          name: pro.name,
                          quantity: quantity,
                          price: pro.price,
                          img: pro.img,
                          productTotalCost: pro.price * quantity,
                          kcal: pro.kcal,
                          fat: pro.fat,
                          saturates: pro.saturates,
                          sugars: pro.sugars,
                          salt: pro.salt,
                          description: pro.desc,
                          category: pro.category,
                        })
                      );
                      setQuantity(0);
                      if (quantity === 0) {
                        setAlertMsg(`Choose Amount Please !!`);
                        handleAlert();
                      } else {
                        setAlertMsg(`${pro.name} Added Successfult To Cart:)`);
                        handleAlert();
                      }
                    }}
                  >
                    add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className="relatedProducts_MainTitleSec text-center mb-3 text-uppercase main-color-green">
              <h2>you might like this choice</h2>
            </div>
            <div className="productDetails_relatedProducts_sec mt-5">
              <Swiper
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                  delay: 500,
                }}
                speed={1500}
                breakpoints={{
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                  1600: {
                    slidesPerView: 5,
                    spaceBetween: 10,
                  },
                }}
              >
                {products[pro.category]
                  ?.filter((product) => product.id !== pro.id)
                  ?.map((product, indx) => {
                    const productInfo = {
                      name: product.title,
                      id: product.id,
                      img: product.img,
                      kcal: product.kcal,
                      fat: product.fat,
                      saturates: product.saturates,
                      sugars: product.sugars,
                      salt: product.salt,
                      description: product.desc,
                      price: product.price,
                      category: product.category,
                    };
                    return (
                      <div key={indx}>
                        <SwiperSlide>
                          <div className="relatedProducts_slider">
                            <NavLink
                              to={`/productDetails/:${product.title?.replaceAll(
                                " ",
                                "-"
                              )}`}
                              state={{ from: { productInfo } }}
                            >
                              <img
                                src={product.img}
                                alt={product.title}
                                className="w-100"
                              />
                            </NavLink>
                            <p className="fw-bold">
                              <NavLink
                                className="main-color-green"
                                to={`/productDetails/:${product.title?.replaceAll(
                                  " ",
                                  "-"
                                )}`}
                                state={{ from: { productInfo } }}
                              >
                                {product.title}
                              </NavLink>
                            </p>
                          </div>
                        </SwiperSlide>
                      </div>
                    );
                  })}
              </Swiper>
            </div>
          </div>
        ) : (
          ""
        )
      )}
      <Alert ref={alertParent} msg={alertMsg} />
    </>
  );
};

export default ProductDetails;
