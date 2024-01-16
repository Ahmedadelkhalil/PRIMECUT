import React from "react";
import { NavLink } from "react-router-dom";
import category from "../../../assets/data/category";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

const BestDeal = () => {
  return (
    <div className="py-4">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 1000,
        }}
        speed={2500}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
      >
        {category["categories"].map((product, indx) => {
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
            <SwiperSlide key={indx}>
              <div className="category-holder w-100">
                <NavLink
                  to={`/productDetails/:${product.title?.replaceAll(" ", "-")}`}
                  state={{ from: { productInfo } }}
                >
                  <img src={product.img} alt={product.title} />
                </NavLink>
                <NavLink
                  to={`/productDetails/:${product.title?.replaceAll(" ", "-")}`}
                  state={{ from: { productInfo } }}
                >
                  <p>{product.title}</p>
                </NavLink>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default BestDeal;
