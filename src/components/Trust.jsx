import React from "react";
import Slider from "react-slick";
import mcdonanalds from "../assets/images/png/mcdonalds-logo.png";
import diageo_logo from "../assets/images/png/diageo_logo.png";
import Bacardi_Logo from "../assets/images/png/Bacardi_Logo.png";
import Heineken from "../assets/images/png/Heineken.png";
import redBull from "../assets/images/png/redBull.png";
import PernodRicard from "../assets/images/png/PernodRicard.png";
import kfc from "../assets/images/png/kfc.png";
import Halewood from "../assets/images/png/Halewood.png";
import BeamSuntory from "../assets/images/png/BeamSuntory.png";
import sab from "../assets/images/png/sab.png";
import edrington from "../assets/images/png/edrington.png";
import burgerKing from "../assets/images/png/burgerKing.png";
import campariGroup from "../assets/images/png/campariGroup.png";

const Trust = () => {
  var settings = {
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    pauseOnHover: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  var slider2 = {
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 7000,
    pauseOnHover: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section id="companies" className="py-5 my-5 px-2">
        <h2
          className="ff_inter fw-bold fs_8x5l fc_Slate text-center mb-3 mw_1071 mx-auto lh_100"
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-offset="0"
          data-aos-duration="2000"
        >
          We’ve built relationships based on
          <span className="fc_red"> trust.</span>
        </h2>
        <p
          className="ff_inter fs_2xl fc_grey text-center fw-normal mb-5 py-lg-5 mw_872 mx-auto lh_40"
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-offset="0"
          data-aos-duration="2000"
        >
          We pride ourselves on having global companies as our partners & we
          also service independant small businesses. We love to work with all
          businesses big or small.
        </p>
        <div
          className="container Custom_Container map_bg pt-5 "
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-offset="0"
          data-aos-duration="2000"
        >
          <Slider {...settings} className="trust_slider py-lg-4 py-2">
            <div className="p-sm-4 p-1 d-flex align-items-center justify-content-center">
              <img src={mcdonanalds} alt="mcdonanalds" className="pb-3 mw_79" />
            </div>
            <div className="p-sm-4 p-1 d-flex align-items-center justify-content-center">
              <img src={diageo_logo} alt="diageo_logo" />
            </div>
            <div className="p-sm-4 p-1 d-flex align-items-center justify-content-center">
              <img
                src={Bacardi_Logo}
                alt="Bacardi_Logo"
                className="pe-4 w-50"
              />
            </div>
            <div className="p-sm-4 p-1 text-center d-flex align-items-center justify-content-center">
              <img src={Heineken} alt="Heineken" className="ps-4 w-50" />
            </div>
            <div className="p-sm-4 p-1 d-flex align-items-center justify-content-center">
              <img src={diageo_logo} alt="diageo_logo" />
            </div>
          </Slider>
          <Slider {...slider2} className="trust_slider py-lg-4">
            <div className="p-sm-4 p-1 d-flex align-items-center justify-content-center">
              <img src={redBull} alt="redBull" className="mt-4 w-50" />
            </div>
            <div className="p-sm-4 p-1 d-flex align-items-center justify-content-center">
              <img src={PernodRicard} alt="PernodRicard" className="w-100" />
            </div>
            <div className="p-sm-4 p-1 d-flex align-items-center justify-content-center">
              <img src={kfc} alt="kfc" />
            </div>
            <div className="p-sm-4 p-1 d-flex align-items-center justify-content-center">
              <img src={Halewood} alt="Halewood" className="w-50 mt-2" />
            </div>
            <div className="p-sm-4 p-1 d-flex align-items-center justify-content-center">
              <img src={PernodRicard} alt="PernodRicard" className="w-100" />
            </div>
          </Slider>
          <Slider {...settings} className="trust_slider py-lg-4 py-2 mb-5">
            <div className="p-sm-4 p-1 d-flex align-items-center justify-content-center">
              <img
                src={BeamSuntory}
                alt="BeamSuntory"
                className="mt-5 w-100 pt-4"
              />
            </div>
            <div className="p-sm-4 p-1 d-flex align-items-center justify-content-center">
              <img src={sab} alt="sab" className="mt-5 mw_79" />
            </div>
            <div className="p-sm-4 p-1 d-flex align-items-center justify-content-center">
              <img src={edrington} alt="edrington" className="w-50 mt-5" />
            </div>
            <div className="p-sm-4 p-1 d-flex align-items-center justify-content-center">
              <img src={burgerKing} alt="burgerKing" className="mt-5 " />
            </div>
            <div className="p-sm-4 p-1 d-flex align-items-center justify-content-center">
              <img
                src={campariGroup}
                alt="campariGroup"
                className="mt-5 pt-5"
              />
            </div>
          </Slider>
        </div>
        <div
          className="bg_red trust_box mx-auto mw_670 d-flex mt-sm-5"
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-offset="0"
          data-aos-duration="2000"
        >
          <div className="col-4 text-center">
            <p className="ff_inter fs_5xl fw-bold fc_white mb-0">6</p>
            <p className="ff_inter fs_xsm fw-normal fc_light mb-0">Products</p>
          </div>
          <div className="col-4 text-center">
            <p className="ff_inter fs_5xl fw-bold fc_white mb-0">5</p>
            <p className="ff_inter fs_xsm fw-normal fc_light mb-0">Countries</p>
          </div>
          <div className="col-4 text-center">
            <p className="ff_inter fs_5xl fw-bold fc_white mb-0">50+</p>
            <p className="ff_inter fs_xsm fw-normal fc_light mb-0">Employees</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trust;
