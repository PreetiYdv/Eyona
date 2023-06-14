import React from "react";
import header_logo from "../assets/images/svg/header_logo.svg";
import { Col, Row } from "react-bootstrap";
import desktop from "../assets/images/png/heroDesktop_img.png";
import office from "../assets/images/png/heroOffice_img.png";
import team from "../assets/images/png/heroTeam_img.png";
import laptop from "../assets/images/png/hero_laptop_img.png";
import logo from "../assets/images/png/heroLogo_img.png";
import navlogo from "../assets/images/svg/eyonaLogo.svg";
import { useState } from "react";

const EyonaHero = () => {
  const [toggle, setToggle] = useState(false);

  const shownavBar = () => {
    setToggle(!toggle);
    document.body.classList.toggle("overflow-hidden");
  };
  return (
    <div className="pb-5 position-relative">
      <div
        className={toggle ? "showNav myNav  nav_circle" : "myNav  nav_circle"}
      >
        <section className="Nav_bg overflow-auto  vh-100 d-flex flex-column justify-content-center position-relative">
          <div className="d-flex justify-content-between container-fluid px-lg-5 py-3 p-3 z-1">
            <a href="#home">
              <img src={navlogo} alt="logo" />
            </a>
            <div
              onClick={shownavBar}
              className="navToggle_btn rounded-pill d-flex justify-content-center align-items-center Cursor_Pointer position-absolute top-0 end-0 mt-3 me-4"
            >
              <span>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.76782 0.356445L13.7886 12.4077L12.0209 14.1799L5.52683e-05 2.12869L1.76782 0.356445Z"
                    fill="white"
                  />
                  <path
                    d="M0.394287 12.0508L12.4151 -0.000478389L14.1829 1.77177L2.16205 13.823L0.394287 12.0508Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="container flex-grow-1 d-flex flex-column justify-content-center z-1 pb-lg-5 pb-2">
            <Row className="align-items-end justify-content-lg-between">
              <Col lg={7}>
                <ul className="p-0 m-0 ff_Montserrat fw-bold fs_7xl fc_white">
                  <li className="d-block mb-xl-4 mb-2 nav_links">
                    <a href="#hero" onClick={shownavBar} className="fc_white">
                      Who we are
                    </a>
                  </li>
                  <li className="d-block mb-xl-4 mb-2 nav_links text-nowrap">
                    <a
                      href="#companies"
                      onClick={shownavBar}
                      className="fc_white"
                    >
                      Our Companies
                    </a>
                  </li>
                  <li className="d-block mb-xl-4 mb-2 nav_links">
                    <a
                      href="#experts"
                      onClick={shownavBar}
                      className="fc_white nav_links"
                    >
                      What we do
                    </a>
                  </li>
                  <li className="d-block mb-xl-4 mb-2 nav_links">
                    <a
                      href="#contact"
                      onClick={shownavBar}
                      className="fc_white nav_links"
                    >
                      Contact us
                    </a>
                  </li>
                  <li className="d-block mb-xl-4 mb-2 nav_links">
                    <a
                      href="#carrer"
                      onClick={shownavBar}
                      className="fc_white nav_links"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </Col>
              <Col lg={5} className="mt-lg-0 mt-3">
                <Row className="justify-content-md-between align-items-end">
                  <Col xs={6}>
                    <h3 className="ff_Montserrat fc_red fs_2x5l fw-bolder mb-sm-3 mb-2">
                      contact@eyona.co
                    </h3>
                    <p className="mb-sm-2 mb-1">
                      <a
                        href="#"
                        className="fc_white fs_xsm fw-normal ff_Montserrat"
                      >
                        Terms & Conditions
                      </a>
                    </p>
                    <p className="mb-sm-2 mb-1">
                      <a
                        href="#"
                        className="fc_white fs_xsm fw-normal ff_Montserrat"
                      >
                        Privacy Policy
                      </a>
                    </p>
                    <h3 className="ff_Montserrat fc_red fs_2x5l fw-bolder mb-sm-3 mb-2 mt-4">
                      London
                    </h3>
                    <p className="mb-sm-2 mb-1">
                      <a
                        href="#"
                        className="fc_white fs_xsm fw-normal ff_Montserrat"
                      >
                        77 Farringdon
                      </a>
                    </p>
                    <p className="mb-sm-2 mb-1">
                      <a
                        href="#"
                        className="fc_white fs_xsm fw-normal ff_Montserrat"
                      >
                        Road
                      </a>
                    </p>
                    <p className="mb-sm-2 mb-1">
                      <a
                        href="#"
                        className="fc_white fs_xsm fw-normal ff_Montserrat"
                      >
                        London
                      </a>
                    </p>
                    <p className="mb-sm-2 mb-1">
                      <a
                        href="#"
                        className="fc_white fs_xsm fw-normal ff_Montserrat"
                      >
                        EC1m 3JU
                      </a>
                    </p>
                  </Col>
                  <Col xs={6} sm={4} lg={6}>
                    <h3 className="ff_Montserrat fc_red fs_2x5l fw-bolder mb-sm-3 mb-2">
                      Cape Town
                    </h3>
                    <p className="mb-sm-2 mb-1">
                      <a
                        href="#"
                        className="fc_white fs_xsm fw-normal ff_Montserrat"
                      >
                        4 Alphons way,
                      </a>
                    </p>
                    <p className="mb-sm-2 mb-1">
                      <a
                        href="#"
                        className="fc_white fs_xsm fw-normal ff_Montserrat"
                      >
                        Tokai, Cape Town,
                      </a>
                    </p>
                    <p className="mb-sm-2 mb-1">
                      <a
                        href="#"
                        className="fc_white fs_xsm fw-normal ff_Montserrat"
                      >
                        Western Cape 7420,
                      </a>
                    </p>
                    <p className="mb-sm-2 mb-1">
                      <a
                        href="#"
                        className="fc_white fs_xsm fw-normal ff_Montserrat"
                      >
                        ZA
                      </a>
                    </p>
                  </Col>
                </Row>
                <li className="mt-4">
                  <a href="https://in.linkedin.com/">
                    <svg
                      width="29"
                      height="29"
                      viewBox="0 0 29 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.26433 28.7542H0.102661V8.21533H6.26433V28.7542ZM28.8571 28.7542H22.6955V17.7824C22.6955 14.9233 21.6767 13.5 19.6578 13.5C18.0578 13.5 17.0431 14.2969 16.5338 15.8928V28.7542H10.3721C10.3721 28.7542 10.4543 10.2692 10.3721 8.21533H15.2357L15.6116 12.3231H15.7389C17.0021 10.2692 19.021 8.87668 21.7897 8.87668C23.8949 8.87668 25.5976 9.46204 26.8977 10.9326C28.206 12.4053 28.8571 14.3811 28.8571 17.1559V28.7542Z"
                        fill="white"
                        fill-opacity="0.25"
                      />
                      <path
                        d="M3.18353 6.16167C4.94175 6.16167 6.36706 4.78233 6.36706 3.08084C6.36706 1.37934 4.94175 0 3.18353 0C1.42532 0 0 1.37934 0 3.08084C0 4.78233 1.42532 6.16167 3.18353 6.16167Z"
                        fill="white"
                        fill-opacity="0.25"
                      />
                    </svg>
                  </a>
                </li>
              </Col>
            </Row>
          </div>
        </section>
      </div>
      <section id="hero" className="ps-md-5 py-5 position-relative">
        <div className="heroCircle2 position-absolute rounded-pill d-sm-block d-none"></div>
        <div className="hero_circle rounded-pill d-sm-block d-none"></div>
        <div className="hero_Container px-md-5 px-1">
          <div className="d-flex justify-content-between">
            <img
              id="hero"
              src={header_logo}
              alt="header_logo"
              className="mw_149 w-100 Cursor_Pointer"
            />
            <div className="d-flex align-items-center gap-md-4 gap-2 position-relative z-2">
              <a
                href="#"
                className="ff_inter fc_Slate fs_xs fw-medium ls_15 text-nowrap"
              >
                Let’s Talk
              </a>
              <div
                onClick={shownavBar}
                className="headerToggleBtn_circle rounded-pill d-flex align-items-center justify-content-center Cursor_Pointer"
              >
                <svg
                  width="17"
                  height="15"
                  viewBox="0 0 17 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0H17V2.5H0V0Z" fill="white" />
                  <path d="M0 6H13V8.5H0V6Z" fill="white" />
                  <path d="M0 12H17V14.5H0V12Z" fill="white" />
                </svg>
              </div>
            </div>
          </div>
          <Row className="pt-5 align-items-center">
            <Col xl={5} xs={8} lg={6}>
              <div className="d-flex justify-content-end align-items-center gap-3">
                <img
                  src={laptop}
                  alt="laptop"
                  className="w-48 m_-30 laptop_img mb-3"
                />
              </div>
              <div className="d-flex gap-3">
                <img
                  src={desktop}
                  alt="desktop"
                  className="heroDesktop_img w-50"
                />
                <img
                  src={office}
                  alt="office"
                  className="heroOffice_img w-50"
                />
              </div>
              <div className="d-flex align-items-center mt-3">
                <img
                  src={team}
                  alt="team"
                  className="heroTeam_img w-50 position-static z-2"
                />
                <img src={logo} alt="logo" className="neg_marginLogo w-50" />
              </div>
            </Col>
            <Col lg={1} className="d-lg-block d-none"></Col>
            <Col lg={5} className="mt-5 mt-xl-0 position-static z-2">
              <h2 className="ff_Montserrat fs_5xl fc_black fw-bold lh_70 ">
                We’re a multi-product company specialising in B2B products.
              </h2>
              <p className="ff_Montserrat fc_darkGrey fw-normal fs_xsm lh_30">
                Eyona is a team of dedicated, passionate people building B2B
                software for the FMCG industry.
              </p>
              <button className="border-0 fc_white ff_Montserrat fw-bold fs_sm rounded-pill bg_red ls_1 touch_btn">
                Get In Touch
              </button>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default EyonaHero;
