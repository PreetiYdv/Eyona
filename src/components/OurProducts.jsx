import React from "react";
import { Col, Row } from "react-bootstrap";
import truedata from "../assets/images/png/truedata_logo.png";
import truedata_img from "../assets/images/png/truedata_img.png";
import yellowCircle from "../assets/images/png/yellowCircle.png";
import repforce_img from "../assets/images/png/repforce_img.png";
import repforce from "../assets/images/png/repforce_logo.png";
import assetforce from "../assets/images/png/assetforce_logo.png";
import assetforce_img from "../assets/images/png/assetforce_img.png";
import easyhr from "../assets/images/png/EASYHR_logo.png";
import easyhr_img from "../assets/images/png/easyhr_img.png";
import zoosh from "../assets/images/png/zoosh_logo.png";
import zoosh_img from "../assets/images/png/zoosh_img.png";
import arivu_img from "../assets/images/png/arivu_img.png";
import arivu_logo from "../assets/images/png/arivu-logo.png";
import lines from "../assets/images/png/easyhr_line.png";
import zoosh_drink from "../assets/images/png/zoosh_drink.png";
import Slider from "react-slick";

const OurProducts = () => {
  const productSlider = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick",
      },
      {
        breakpoint: 1200,
        settings: {
          lazyLoad: true,
          speed: 300,
          slidesToShow: 2,
          centerMode: true,
          centerPadding: 0,
          cssEase: "linear",
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          centerMode: true,
          centerPadding: "70px",
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          centerMode: true,
          centerPadding: 0,
        },
      },
    ],
  };
  return (
    <>
      <section className="py-md-5 mb-lg-5">
        <div className="container ourProduct_container">
          <h2
            className="ff_inter fw-bold fs_8x5l text-center fc_Slate mb-4"
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-offset="0"
            data-aos-duration="2000"
          >
            Our products.
          </h2>
          <p
            className="ff_inter fw-normal text-center fs_2xl fc_grey mw_872 mx-auto mb-5 pb-lg-4 lh_40"
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-offset="0"
            data-aos-duration="2000"
          >
            We exclusively create and build B2B software. This specialization
            has helped us build unmatched deep domain expertise for global fit
            and scale.
          </p>

          <Slider className="d-block d-lg-flex flex-wrap" {...productSlider}>
            <Col
              lg={6}
              className="px-3"
              data-aos="fade-right"
              data-aos-offset="500"
              data-aos-duration="2000"
            >
              <div className="truedata_card product_card w-100 position-relative overflow-hidden">
                <img
                  src={yellowCircle}
                  alt="yellowCircle"
                  className="yellowCircle position-absolute start-0"
                />
                <div className="productCard_container">
                  <img src={truedata} alt="truedata" />
                  <h2 className="pt-md-5 pt-3 ff_inter fw-bold fs_3xl fc_Slate mb-lg-4 mb-2 ">
                    Data Unifying & Analytics Platform
                  </h2>
                  <p className="ff_inter fw-normal fs_xsm fc_grey lh_30">
                    Basecamp software to automate the collation, cleaning,
                    integrating and visualising for all of your businesses
                    market facing sales data across all channels.
                  </p>
                </div>
                <img
                  src={truedata_img}
                  alt="truedata_img"
                  className="w-100 position-absolute bottom-0"
                />
              </div>
            </Col>
            <Col
              lg={6}
              className="px-3"
              data-aos="fade-left"
              data-aos-offset="500"
              data-aos-duration="2000"
            >
              <div className="repforce_card product_card w-100 overflow-hidden">
                <div className="productCard_container">
                  <img src={repforce} alt="repforce" className=" w-50" />
                  <h2 className="pt-md-5 pt-3 ff_inter fw-bold fs_3xl fc_Slate mb-lg-4 mb-2">
                    Field Sales Automation Software
                  </h2>
                  <p className="ff_inter fw-normal fs_xsm fc_grey lh_30">
                    Provides superior field sales routing capability, retail
                    execution management and sales order integration for mobile
                    workforces within businesses.
                  </p>
                </div>
                <img
                  src={repforce_img}
                  alt="repforce_img"
                  className="w-100 position-absolute bottom-0"
                />
              </div>
            </Col>
            <Col
              lg={6}
              className="px-3"
              data-aos="fade-right"
              data-aos-offset="500"
              data-aos-duration="2000"
            >
              <div className="assetforce_card product_card w-100 overflow-hidden">
                <div className="productCard_container">
                  <img src={assetforce} alt="assetforce" className="w-50"/>
                  <h2 className="pt-md-5 pt-3 ff_inter fw-bold fs_3xl fc_Slate mb-lg-4 mb-2">
                    Facility & Maintenance Management Software
                  </h2>
                  <p className="ff_inter fw-normal fs_xsm fc_grey lh_30">
                    Web and mobile-based CMMS software that offers asset
                    management, downtime tracking & workflow automation
                    solutions of businesses.
                  </p>
                </div>
                <img
                  src={assetforce_img}
                  alt="assetforce_img"
                  className="w-100 position-absolute bottom-0"
                />
              </div>
            </Col>
            <Col
              lg={6}
              className="px-3"
              data-aos="fade-left"
              data-aos-offset="500"
              data-aos-duration="2000"
            >
              <div className="easyHr_card product_card w-100 overflow-hidden">
                <img
                  src={lines}
                  alt="easyHr_lines"
                  className="position-absolute end-0 easyHr_lines w-100 d-sm-block d-none"
                />
                <div className="productCard_container">
                  <img src={easyhr} alt="easyhr" />
                  <h2 className="pt-md-5 pt-3 ff_inter fw-bold fs_3xl fc_Slate mb-lg-4 mb-2">
                    HR Management Software
                  </h2>
                  <p className="ff_inter fw-normal fs_xsm fc_grey lh_30">
                    Human resource software solution that combines several
                    systems and processes to manage and optimize daily HR tasks
                    and the overall HR goals of a given organization.
                  </p>
                </div>
                <img
                  src={easyhr_img}
                  alt="easyhr_img"
                  className="w-100 position-absolute bottom-0"
                />
              </div>
            </Col>
            <Col
              lg={6}
              className="px-3"
              data-aos="fade-right"
              data-aos-offset="500"
              data-aos-duration="2000"
            >
              <div className="zoosh_card product_card w-100 overflow-hidden position-relative">
                <img
                  src={zoosh_drink}
                  alt="zoosh_drink"
                  className="position-absolute end-0 bottom-50 mw_100"
                />
                <div className="productCard_container">
                  <img src={zoosh} alt="zoosh" />
                  <h2 className="pt-md-5 pt-3 ff_inter fw-bold fs_3xl fc_Slate mb-lg-4 mb-2">
                    Gig Economy for Activations
                  </h2>
                  <p className="ff_inter fw-normal fs_xsm fc_grey lh_30">
                    Interconnected ecosystem for promotions management. Where
                    brands and agencies promote products and capture consumer
                    feedback and behaviour.
                  </p>
                </div>
                <img
                  src={zoosh_img}
                  alt="zoosh_img"
                  className="w-100 position-absolute bottom-0"
                />
              </div>
            </Col>
            <Col
              lg={6}
              className="px-3"
              data-aos="fade-left"
              data-aos-offset="500"
              data-aos-duration="2000"
            >
              <div className="arivu_card product_card w-100 overflow-hidden">
                <div className="productCard_container">
                  <img src={arivu_logo} alt="arivu_logo" />
                  <h2 className="pt-md-5 pt-3 ff_inter fw-bold fs_3xl fc_Slate mb-lg-4 mb-2">
                    Learning Management Software
                  </h2>
                  <p className="ff_inter fw-normal fs_xsm fc_grey lh_30">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <img
                  src={arivu_img}
                  alt="arivu_img"
                  className="w-100 position-absolute bottom-0"
                />
              </div>
            </Col>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default OurProducts;
