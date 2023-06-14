import React, { useEffect, useState } from "react";
import PreloderBar from "./PreloaderBar"
import logo from "../assets/images/png/heroLogo_img.png";

function LoaderHome() {
  const [loder, setloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 6000);
  }, []);
  {
    if (loder === true) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }
  return (
    <>
      {" "}
      {loder ? (
        <section
          style={{ zIndex: "999999999" }}
          className=" bg-black top-0 start-0 position-fixed h-100 w-100 d-flex flex-column justify-content-center align-items-center"
        >
          {" "}
          <div class=" d-flex justify-content-center align-items-center flex-column text-center">
            <div class="loader">
              <img className="pre_loading_logo" src={logo} alt="logo" />
              <PreloderBar />
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}

export default LoaderHome;
