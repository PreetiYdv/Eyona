import React from "react";
import logo from "../assets/images/svg/footer_logo.svg";
import { Col, Row } from "react-bootstrap";

const EyonaFooter = () => {
  return (
    <>
      <footer className="py-5 bg_Slate footer_circle">
        <div className="mt-5 container">
          <img src={logo} alt="logo" className="mw_324 w-50" />
          <Row className="py-5 mb-5 justify-content-lg-between">
            <Col lg={4}>
              <h2 className="mb-3 pb-md-1">
                <a
                  href="mailto:contact@eyona.co"
                  className="fc_red ff_inter fw-bold fs_3x5l"
                >
                  contact@eyona.co
                </a>
              </h2>
              <p className="mb-1">
                <a href="#" className="ff_inter fc_white fw-normal fs_xsm">
                  Terms & Conditions
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="ff_inter fc_white fw-normal fs_xsm">
                  Privacy Policy
                </a>
              </p>
            </Col>
            <Col lg={6} className="mt-5 mt-lg-0">
              <Row>
                <Col sm={6}>
                  <h2 className="ff_inter fw-normal fs_3x5l fc_white mb-3 pb-md-1">
                    London
                  </h2>
                  <p className="ff_inter fc_white fw-normal fs_xsm mb-1 Cursor_Pointer fc_lighter">
                    77 Farringdon Road
                  </p>
                  <p className="ff_inter fc_white fw-normal fs_xsm mb-1 Cursor_Pointer fc_lighter">
                    London
                  </p>
                  <p className="ff_inter fc_white fw-normal fs_xsm mb-1 Cursor_Pointer fc_lighter">
                    EC1m 3JU
                  </p>
                </Col>
                <Col sm={6} className="mt-5 mt-sm-0 position-relative z-2">
                  <h2 className="ff_inter fw-normal fs_3x5l fc_white mb-3 pb-md-1">
                    Cape Town
                  </h2>
                  <p className="ff_inter fc_white fw-normal fs_xsm mb-1 Cursor_Pointer fc_lighter">
                    4 Alphons way,
                  </p>
                  <p className="ff_inter fc_white fw-normal fs_xsm mb-1 Cursor_Pointer fc_lighter">
                    Tokai, Cape Town,
                  </p>
                  <p className="ff_inter fc_white fw-normal fs_xsm mb-1 Cursor_Pointer fc_lighter">
                    Western Cape 7420, ZA
                  </p>
                </Col>
              </Row>
            </Col>
            <div className="mt-2 mb-sm-5 pb-lg-5">
              <a href="https://in.linkedin.com/">
                <svg
                  width="29"
                  height="30"
                  viewBox="0 0 29 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.26433 29.4906H0.102661V8.95166H6.26433V29.4906ZM28.8571 29.4906H22.6955V18.5187C22.6955 15.6597 21.6767 14.2363 19.6578 14.2363C18.0578 14.2363 17.0431 15.0332 16.5338 16.6291V29.4906H10.3721C10.3721 29.4906 10.4543 11.0056 10.3721 8.95166H15.2357L15.6116 13.0594H15.7389C17.0021 11.0056 19.021 9.61301 21.7897 9.61301C23.8949 9.61301 25.5976 10.1984 26.8977 11.669C28.206 13.1416 28.8571 15.1174 28.8571 17.8922V29.4906Z"
                    fill="white"
                    fill-opacity="0.15"
                  />
                  <path
                    d="M3.18353 6.898C4.94175 6.898 6.36706 5.51866 6.36706 3.81716C6.36706 2.11567 4.94175 0.736328 3.18353 0.736328C1.42532 0.736328 0 2.11567 0 3.81716C0 5.51866 1.42532 6.898 3.18353 6.898Z"
                    fill="white"
                    fill-opacity="0.15"
                  />
                </svg>
              </a>
            </div>
          </Row>
          <p className="my-lg-5 pt-md-5 ff_inter fw-normal fc_grey fs_xsm">
            © Copyright – eyona
          </p>
        </div>
      </footer>
    </>
  );
};

export default EyonaFooter;
