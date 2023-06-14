import React from "react";
import joinTeam from "../assets/images/png/joinTeam_img.png";

const JoinTeam = () => {
  return (
    <>
      <section className="pt-5 mt-5 position-relative">
        <h2
          className="ff_inter fw-bold fs_8x5l fc_Slate text-center mx-auto mw_1438"
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-offset="0"
          data-aos-duration="2000"
        >
          Join the <span className="fc_red">eyona</span> team and find out where
          the
          <span className="true_magic"> true magic</span> happens!
        </h2>
        <div className="container Custom_Container pt-md-5 pt-4 mt-xl-5">
          <p
            className="mw_1071 ff_inter fw-normal fs_2xl fc_grey"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-offset="500"
            data-aos-duration="1000"
          >
            It doesn’t matter where you come from, how you look or any other
            aspect about yourself. If you’re pssionate about what you do, we
            can’t wait to meet you.
          </p>
          <p
            className="mw_1071 ff_inter fw-normal fs_2xl fc_grey mb-5 mt-md-5 mt-3"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-offset="500"
            data-aos-duration="1000"
          >
            We are always looking for people, who put customers at the
            forefront. If you are seeking a culture with high performance
            standards that loves to create and build things with exceptional
            people, then Eyona may be the fit for you.
          </p>
          <button
            className="mb-5 border-0 fs_sm ff_inter fw-bold ls_1 bg_red fc_white msg_btn rounded-pill z-3 position-relative"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-offset="500"
            data-aos-duration="1000"
          >
            Send Us A Message
          </button>
        </div>
      </section>
      <div className="container-fluid pt-3 pt-sm-0 mt_-160">
        <div className="row align-items-center position-relative mt-sm-5 mt-lg-0">
          <div className="col-lg-6 text-center text-lg-end pb-4 pb-sm-0 mt-md-5">
            <span className="fw-bold fs_3xl pe-sm-4 me-lg-5 position-relative z-1">
              <a href="mailto:recruitment@eyona.co" className="fw-bold fc_red">
                recruitment@eyona.co
              </a>
            </span>
          </div>
          <div className="col-lg-6 px-0">
            <div
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-offset="500"
              data-aos-duration="1000"
            >
              <img className="w-100" src={joinTeam} alt="team image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinTeam;
