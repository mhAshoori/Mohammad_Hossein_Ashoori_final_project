import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeImg1 from "../assets/imgs/homeImg1.jpg";
import HomeImg2 from "../assets/imgs/homeImg2.jpg";
import HomeImg3 from "../assets/imgs/homeImg3.jpg";
import "./Home.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./swiper.css";
// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export function Home() {
  return (
    <div className=" container-fluid ">
      <div className="boxes row ">
        {/* <div className="d-flex justify-content-center flex-column align-items-center ">
            <h1 className="">Welcome to our Shopping Center</h1>
            <img src={HomeImg} className="" alt='' />
         </div>*/}
        <div className="col-md-12 col-lg-8 ">
          <Swiper
            className=""
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
          >
            <SwiperSlide >
              <div >
                <img src={HomeImg1}  alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div>
                <img src={HomeImg2}  alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div >
                <img src={HomeImg3}  alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className=" col-md-12 col-lg-4">
          <div className=" left-up w-100 h-50 d-flex justify-content-center align-items-center">
          <h3>از هر خرید تخفیف بگیرید</h3></div>
          <div className=" left-down w-100 h-50 d-flex justify-content-center align-items-center my-2">
          <h3>فروشگله</h3></div>
        </div>
      </div>
      <div>
        <h1>Gello</h1>
        <h1>Gello</h1>
        <h1>Gello</h1>
        <h1>Gello</h1>
      </div>
    </div>
  );
}
