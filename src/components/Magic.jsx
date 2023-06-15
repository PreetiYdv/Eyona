import React from "react";
import { Col, Row } from "react-bootstrap";
import grid_img from "../assets/images/png/magicGrid_img.png";

const Magic = () => {
  return (
    <>
      <section id="carrer">
        <div className="container Custom_Container py-5">
          <Row className="align-items-center">
            <Col
              lg={6}
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-offset="500"
              data-aos-duration="1000"
            >
              <h2 className="ff_inter fw-bold fs_8x5l fc_Slate mb-4">
                How we make <span className="fc_red"> magic</span> happen.
              </h2>
              <p className="ff_inter fw-normal fs_2xl fc_grey">
                We seek breakthroughs that will stand the test of time. We keep
                experimenting that's how we innovate. Innovation we believe is
                admired but execution is worshipped. We love the problem and
                pain point and hence the journey more than the destination. We
                are constantly improving and meticulously refining our products
                foundation that has been built, and that is what we believe
                makes us great. <br /> <br /> We are passionately curious as we
                believe this is the fuel for discovery, inquiry and learning.
                Our main objective is to be customer obsessed and build products
                that are everyday utilities for businesses.
              </p>
            </Col>
            <Col
              lg={6}
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-offset="1000"
              data-aos-duration="1000"
            >
              <img src={grid_img} alt="grid_img" className="w-100" />
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Magic;
