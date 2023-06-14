import React from "react";
import b2b from "../assets/images/png/b2b.png";
import ecoSystem from "../assets/images/png/ecoSystem.png";
import globally from "../assets/images/png/globally.png";
import industry from "../assets/images/png/industry.png";
import team from "../assets/images/png/group-people-working-out-business-plan-office.png";
import laptop1 from "../assets/images/png/expertsLaptop_img.png";
import office from "../assets/images/png/expertsOffice_img.png";
import laptop2 from "../assets/images/png/expertsLaptop2.png";

const Experts = () => {
  return (
    <>
      <section
        id="experts"
        className="pt-5 py-lg-5 mb-5 position-relative expert_circle"
      >
        <div
          className="container-fluid py-sm-5 overflow-hidden z-2 position-relative"
          data-aos="fade-up-right"
          data-aos-delay="300"
          data-aos-offset="0"
          data-aos-duration="2000"
        >
          <h2 className="ff_inter fw-bold fs_20xl fc_Slate text-center text-md-start">
            Eyona are
          </h2>
          <h2 className="ff_inter fw-bold fs_15xl fc_red text-md-end text-center">
            <span className="world_class">
              World Class 
            </span>
             Experts
          </h2>
        </div>
        <div
          className="container Custom_Container py-5 position-relative z-2"
          data-aos="fade-down-right"
          data-aos-delay="300"
          data-aos-offset="0"
          data-aos-duration="2000"
        >
          <div className="row align-items-center w-100 mx-0">
            <div className="col-lg-6">
              <p className="fw-normal fs_2x5l fc_grey ff_Montserrat text-center text-sm-start">
                We create <span className="fc_red fw-bold"> SaaS products</span>
                for markets that have the ability to generate substantial annual
                recurring revenue (ARR). Leveraging big data and automating
                matket facing business processes.
              </p>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-up-left"
              data-aos-delay="300"
              data-aos-offset="0"
              data-aos-duration="1000"
            >
              <div className="grid_container">
                <div className="grid_item ExpertsGrid_item1">
                  <img src={team} alt="team" className="w-100 h-100" />
                </div>
                <div className="grid_item ExpertsGrid_item2">
                  <img src={laptop1} alt="laptop1" className="w-100 h-100" />
                </div>
                <div className="grid_item ExpertsGrid_item3">
                  <img src={office} alt="office" className="w-100 h-100" />
                </div>
                <div className="grid_item ExpertsGrid_item4">
                  <img src={laptop2} alt="laptop2" className="w-100 h-100" />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 justify-content-md-between justify-content-center pt-sm-5">
            <div
              className="col-lg-5 text-center text-lg-start col-12 col-md-6 px-3"
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-offset="1000"
              data-aos-duration="600"
            >
              <div className="black_circle rounded-pill d-flex justify-content-center align-items-center mx-auto mx-lg-0 mb-4">
                <img src={b2b} alt="b2b" className="w-100" />
              </div>
              <h4 className="ff_Montserrat fw-bold fs_4xl fc_Slate mt-lg-3">
                B2B Software
              </h4>
              <p className="ff_Montserrat fw-normal fs_2xl fc_grey max_width_550 mx-auto mx-lg-0">
                Our products are at the forefront of industry, creating
                streamlined processing for your business needs.
              </p>
            </div>
            <div
              className="col-lg-5 text-center text-lg-start col-12 col-md-6 mt-lg-5 pt-lg-5 px-3"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-offset="1000"
              data-aos-duration="600"
            >
              <div className="black_circle rounded-pill d-flex justify-content-center align-items-center mx-auto mx-lg-0 mb-4">
                <img src={ecoSystem} alt="eco_system" className="w-100" />
              </div>
              <h4 className="ff_Montserrat fw-bold fs_4xl fc_Slate mt-lg-3">
                Eco-system Ownership
              </h4>
              <p className="ff_Montserrat fw-normal fs_2xl fc_grey max_width_550 mx-auto mx-lg-0">
                We provide ourselves on making our products easy to use and
                personalised for your business needs.
              </p>
            </div>
            <div
              className="col-lg-5 text-center text-lg-start col-12 col-md-6 mt-sm-5 px-3"
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-offset="1000"
              data-aos-duration="600"
            >
              <div className="black_circle rounded-pill d-flex justify-content-center align-items-center mx-auto mx-lg-0 mb-4">
                <img src={globally} alt="globally" className="w-100" />
              </div>
              <h4 className="ff_Montserrat fw-bold fs_4xl fc_Slate mt-lg-3">
                Globally Relevant
              </h4>
              <p className="ff_Montserrat fw-normal fs_2xl fc_grey max_width_550 mx-auto mx-lg-0">
                All our software if fit for purpose and easy to scale across
                your organisation in any country.
              </p>
            </div>
            <div
              className="col-lg-5 text-center text-lg-start col-12 col-md-6 mt-sm-5 pt-lg-5 px-3"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-offset="1000"
              data-aos-duration="600"
            >
              <div className="black_circle rounded-pill d-flex justify-content-center align-items-center mx-auto mx-lg-0 mb-4">
                <img src={industry} alt="industry" className="w-100" />
              </div>
              <h4 className="ff_Montserrat fw-bold fs_4xl fc_Slate mt-lg-3">
                Industry Specific
              </h4>
              <p className="ff_Montserrat fw-normal fs_2xl fc_grey max_width_550 mx-auto mx-lg-0">
                Our products are predominately tailored for a specific vertical
                or industry. We empower domain experts, to ensure you the best
                results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experts;
