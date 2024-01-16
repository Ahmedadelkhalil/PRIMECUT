import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { NavLink } from "react-router-dom";

const Slider = () => {
  return (
    <>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView="1"
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={1500}
        loop={true}
        cssMode={true}
      >
        <SwiperSlide>
          <div className="home-slider-card row">
            <div className="slider-img-section col-6 slider-img-1"></div>
            <div className="col-6 slider-txt-section d-flex flex-column justify-content-center align-items-start px-3 px-md-5">
              <span>simply great burgers and fries</span>
              <h1>Tasty bites, endless delights.</h1>
              <NavLink to="/menu">
                <button>find out more</button>
              </NavLink>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="home-slider-card row">
            <div className="col-6 slider-txt-section d-flex flex-column justify-content-center align-items-start px-3 px-md-5">
              <span>simply great burgers and fries</span>
              <h1>It's always a good time to eat a crispy chicken wings.</h1>
              <NavLink to="/menu">
                <button>find out more</button>
              </NavLink>
            </div>
            <div className="slider-img-section col-6 slider-img-2"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="home-slider-card row">
            <div className="slider-img-section col-6 slider-img-3"></div>
            <div className="col-6 slider-txt-section d-flex flex-column justify-content-center align-items-start px-3 px-md-5">
              <span>simply great burgers and fries</span>
              <h1>We Bring the fries game to a whole new level.</h1>
              <NavLink to="/menu">
                <button>find out more</button>
              </NavLink>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="home-slider-card row">
            <div className="col-6 slider-txt-section d-flex flex-column justify-content-center align-items-start px-3 px-md-5">
              <span>simply great burgers and fries</span>
              <h1>beef Burger is the soundtrack of my life.</h1>
              <NavLink to="/menu">
                <button>find out more</button>
              </NavLink>
            </div>
            <div className="slider-img-section col-6 slider-img-4"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="home-slider-card row">
            <div className="slider-img-section col-6 slider-img-5"></div>
            <div className="col-6 slider-txt-section d-flex flex-column justify-content-center align-items-start px-3 px-md-5">
              <span>simply great burgers and fries</span>
              <h1>It doesn’t get cozier than this.</h1>
              <NavLink to="/menu">
                <button>find out more</button>
              </NavLink>
            </div>
          </div>
        </SwiperSlide>
        {/* =========================================== */}
        <SwiperSlide>
          <div className="home-slider-card row">
            <div className="slider-img-section col-6 slider-img-6"></div>
            <div className="col-6 slider-txt-section d-flex flex-column justify-content-center align-items-start px-3 px-md-5">
              <span>simply great burgers and fries</span>
              <h1>The unlimited cranch and ranch.</h1>
              <NavLink to="/menu">
                <button>find out more</button>
              </NavLink>
            </div>
          </div>
        </SwiperSlide>
        {/* =========================================== */}
      </Swiper>
    </>
  );
};

export default Slider;
