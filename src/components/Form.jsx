import React, { useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import women from "../assets/images/png/formSubmit_img1.png";
import men from "../assets/images/png/formSubmitmen_img.png";
import laptop from "../assets/images/png/formSubmitLaptop_img.png";

const Form = () => {
  const form = useRef();
  const [first, setfirst] = useState("");
  const [email, setEmail] = useState("");

  const handleShow = () => {
    form.current.classList.add("contactForm");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setfirst({ name: "" });
    setEmail({ email: "" });
    console.log(`the name is ${first}`);
    console.log(`the email is ${email}`);
  };

  const handleSubmitChange = (e) => {
    setfirst({
      ...first,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <section
        id="contact"
        className="py-md-5 bg_Slate contact_form position-relative"
      >
        <div ref={form} className="container Custom_Container py-5 my-lg-5">
          <div className="front side">
            <div className="content">
              <Row className="py-lg-5 my-xxl-5 justify-content-lg-between">
                <Col
                  lg={6}
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-offset="500"
                  data-aos-duration="1000"
                >
                  <h2 className="ff_inter fs_7x5l fw-bold fc_white mb-5 contact z-3">
                    Let’s Talk
                  </h2>
                  <p className="ff_inter fw-normal fs_2xl fc_light mb-3">
                    We would love to hear from you. Fill out the form or contact
                    us sending an email to.
                  </p>
                  <p>
                    <a
                      href="mailto:contact@eyona.co"
                      className="fc_red ff_inter fw-bold fs_2x5l"
                    >
                      contact@eyona.co
                    </a>
                  </p>
                  <span className="linkedin_icon">
                    <a href="https://in.linkedin.com/">
                      <svg
                        width="29"
                        height="29"
                        viewBox="0 0 29 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.26433 28.7545H0.102661V8.21558H6.26433V28.7545ZM28.8571 28.7545H22.6955V17.7826C22.6955 14.9236 21.6767 13.5002 19.6578 13.5002C18.0578 13.5002 17.0431 14.2971 16.5338 15.893V28.7545H10.3721C10.3721 28.7545 10.4543 10.2695 10.3721 8.21558H15.2357L15.6116 12.3234H15.7389C17.0021 10.2695 19.021 8.87693 21.7897 8.87693C23.8949 8.87693 25.5976 9.46229 26.8977 10.9329C28.206 12.4055 28.8571 14.3814 28.8571 17.1562V28.7545Z"
                          fill="white"
                          fill-opacity="0.15"
                        />
                        <path
                          d="M3.18353 6.16167C4.94175 6.16167 6.36706 4.78233 6.36706 3.08084C6.36706 1.37934 4.94175 0 3.18353 0C1.42532 0 0 1.37934 0 3.08084C0 4.78233 1.42532 6.16167 3.18353 6.16167Z"
                          fill="white"
                          fill-opacity="0.15"
                        />
                      </svg>
                    </a>
                  </span>
                </Col>
                <Col
                  lg={5}
                  className="mt-5 mt-lg-0"
                  data-aos="fade-left"
                  data-aos-delay="300"
                  data-aos-offset="500"
                  data-aos-duration="1000"
                >
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      // value={first}
                      onChange={handleSubmitChange}
                      placeholder="Your Name"
                      className="bg-transparent ff_inter fc_light fs_xsm w-100 form_box"
                    />
                    <br />
                    <input
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="Your Email"
                      className="bg-transparent ff_inter fc_light fs_xsm w-100 form_box"
                    />
                    <br />
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="5"
                      placeholder="What would you like to know?"
                      className="bg-transparent ff_inter fc_light fs_xsm w-100 form_box"
                    ></textarea>
                    <button
                      onClick={handleShow}
                      className="rounded-pill ff_Montserrat fs_sm border-0 bg_red fc_white send_btn fw-bold ls_1 lh_22"
                    >
                      Send Message
                    </button>
                  </form>
                </Col>
              </Row>
            </div>
          </div>
          <div className="back side">
            <div className="content">
              <div className=" d-flex justify-content-end mb-5">
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
              <Row className="align-items-center">
                <Col lg={6}>
                  <h2 className="ff_inter fw-bold fs_7x5l fc_white mb-5 thankYou">
                    Thank You :)
                  </h2>
                  <p className="ff_inter fw-normal fs_2xl fc_light">
                    Your message has been sucessfully sent, please follow us on
                    LinkedIn to keep up with our latest news.
                  </p>
                  <p>
                    <a
                      href="mailto:contact@eyona.co"
                      className="fc_red ff_inter fw-bold fs_2x5l"
                    >
                      contact@eyona.co
                    </a>
                  </p>
                  <span className="linkedin_icon">
                    <a href="https://in.linkedin.com/">
                      <svg
                        width="29"
                        height="29"
                        viewBox="0 0 29 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.26433 28.7545H0.102661V8.21558H6.26433V28.7545ZM28.8571 28.7545H22.6955V17.7826C22.6955 14.9236 21.6767 13.5002 19.6578 13.5002C18.0578 13.5002 17.0431 14.2971 16.5338 15.893V28.7545H10.3721C10.3721 28.7545 10.4543 10.2695 10.3721 8.21558H15.2357L15.6116 12.3234H15.7389C17.0021 10.2695 19.021 8.87693 21.7897 8.87693C23.8949 8.87693 25.5976 9.46229 26.8977 10.9329C28.206 12.4055 28.8571 14.3814 28.8571 17.1562V28.7545Z"
                          fill="white"
                          fill-opacity="0.15"
                        />
                        <path
                          d="M3.18353 6.16167C4.94175 6.16167 6.36706 4.78233 6.36706 3.08084C6.36706 1.37934 4.94175 0 3.18353 0C1.42532 0 0 1.37934 0 3.08084C0 4.78233 1.42532 6.16167 3.18353 6.16167Z"
                          fill="white"
                          fill-opacity="0.15"
                        />
                      </svg>
                    </a>
                  </span>
                </Col>
                <Col lg={6} className="mt-5 mt-lg-0">
                  <div className="grid_container">
                    <div className="grid_item formGrid_item1">
                      <img
                        src={women}
                        alt="women"
                        className="w-100 h-100 mw_246"
                      />
                    </div>
                    <div className="grid_item formGrid_item2">
                      <img src={men} alt="men" className="w-100 h-100 mw_246" />
                    </div>
                    <div className="grid_item formGrid_item3">
                      <img
                        src={laptop}
                        alt="laptop"
                        className="w-100 h-100 mw_246"
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
