import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import logo from "../assets/images/svg/eyonaLogo.svg";

const EyonaNav = () => {
  const [toggle, setToggle] = useState(false);

  const shownavBar = () => {
    setToggle(!toggle);
    document.body.classList.toggle("overflow-hidden");
  };
  return (
    <>
      <section className="Nav_bg vh-100 d-flex flex-column justify-content-center nav_circle">
        <div className="d-flex justify-content-between nav_padding z-1">
          <a href="#home">
            <img src={logo} alt="logo" />
          </a>
          <div
            onClick={shownavBar}
            className="navToggle_btn rounded-pill d-flex justify-content-center align-items-center Cursor_Pointer"
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
        <div className="container Custom_Container flex-grow-1 d-flex flex-column justify-content-center z-1">
          <Row className="align-items-end justify-content-lg-between">
            <Col lg={6} className="navText_overlay">
              <ul className="link_overlay p-0 m-0 ff_Montserrat fw-bold fs_7xl fc_white">
                <li className="d-block mb-4">
                  <a href="" className="fc_white">
                    Who we are
                  </a>
                </li>
                <li className="d-block mb-4">
                  <a href="" className="fc_white">
                    Our Companies
                  </a>
                </li>
                <li className="d-block mb-4">
                  <a href="" className="fc_white">
                    What we do
                  </a>
                </li>
                <li className="d-block mb-4">
                  <a href="" className="fc_white">
                    Contact us
                  </a>
                </li>
                <span>
                  <a href="" className="fc_white">
                    Careers
                  </a>
                </span>
              </ul>
            </Col>
            <Col lg={5}>
              <Row className="justify-content-md-between align-items-end">
                <Col md={6}>
                  <h3 className="ff_Montserrat fc_red fs_2x5l fw-bolder mb-3">
                    contact@eyona.co
                  </h3>
                  <p>
                    <a
                      href="#"
                      className="fc_white fs_xsm fw-normal ff_Montserrat"
                    >
                      Terms & Conditions
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      className="fc_white fs_xsm fw-normal ff_Montserrat"
                    >
                      Privacy Policy
                    </a>
                  </p>
                  <h3 className="ff_Montserrat fc_red fs_2x5l fw-bolder mb-3 mt-4">
                    London
                  </h3>
                  <p>
                    <a
                      href="#"
                      className="fc_white fs_xsm fw-normal ff_Montserrat"
                    >
                      77 Farringdon
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      className="fc_white fs_xsm fw-normal ff_Montserrat"
                    >
                      Road
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      className="fc_white fs_xsm fw-normal ff_Montserrat"
                    >
                      London
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      className="fc_white fs_xsm fw-normal ff_Montserrat"
                    >
                      EC1m 3JU
                    </a>
                  </p>
                </Col>
                <Col md={4}>
                  <h3 className="ff_Montserrat fc_red fs_2x5l fw-bolder mb-3">
                    Cape Town
                  </h3>
                  <p>
                    <a
                      href="#"
                      className="fc_white fs_xsm fw-normal ff_Montserrat"
                    >
                      4 Alphons way,
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      className="fc_white fs_xsm fw-normal ff_Montserrat"
                    >
                      Tokai, Cape Town,
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      className="fc_white fs_xsm fw-normal ff_Montserrat"
                    >
                      Western Cape 7420,
                    </a>
                  </p>
                  <p>
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
                <a href="">
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
    </>
  );
};

export default EyonaNav;
