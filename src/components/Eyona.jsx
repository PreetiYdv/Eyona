import React from "react";
import { Col, Row } from "react-bootstrap";

const Eyona = () => {
  return (
    <>
      <section className="bg_red py-5 overflow-hidden vh_100 d-flex position-relative">
        <div className="eyona_circle"></div>
        <div className="container eyona_Container position-relative py-lg-5 d-flex align-items-center py-lg-5 my-md-5">
          <Row
            className="align-items-center"
            data-aos="zoom-in-down"
            data-aos-delay="300"
            data-aos-offset="0"
            data-aos-duration="2000"
          >
            <Col xs={12} xxl={12} md={10}>
              <h2 className="ff_Montserrat fw-bold fs_5x5l fc_white mw_1258 position-relative z-2 lh_70 mb-md-5 mb-3">
                It’s our passion. Our business. We love to see our customers
                reinventing themselves, people discovering their true potential
                and creating products to enable industries.
              </h2>
              <p className="ff_Montserrat fw-medium fs_2xl fc_light mw_993 lh_40">
                To us innovation means: Seeing the bigger picture, striving for
                better insights, always curious, thinking the unthinkable, the
                impossible and then making it happen. In other words, we support
                our customers with the business and technology know-how they
                need to continuously improve and gain new advantages to win now
                and in the future.
              </p>
            </Col>
          </Row>
          <div className="position-absolute end-0 top_50">
            <div className="d-flex flex-column align-items-end justify-content-center opacity_05">
              <h2 className="ff_inter fw_900 fs_4x50l fc_white mb-0 lh-0">e</h2>
              <h2 className="ff_inter fw_900 fs_4x50l fc_white mb-md-5 pb-4">
                y
              </h2>
              <h2 className="ff_inter fw_900 fs_4x50l fc_white mb-0 lh-0">o</h2>
              <h2 className="ff_inter fw_900 fs_4x50l fc_white mb-0 ">n</h2>
              <h2 className="ff_inter fw_900 fs_4x50l fc_white mb-0 lh-0">a</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Eyona;
