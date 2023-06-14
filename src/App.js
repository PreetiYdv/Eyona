import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";
import EyonaHero from "./components/EyonaHero";
import JoinTeam from "./components/JoinTeam";
import Magic from "./components/Magic";
import Eyona from "./components/Eyona";
import EyonaFooter from "./components/EyonaFooter";
import Form from "./components/Form";
import OurProducts from "./components/OurProducts";
import Experts from "./components/Experts";
import Trust from "./components/Trust";
import OurTeam from "./components/OurTeam";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import LoaderHome from "./components/LoaderHome";
import BackToTop from "./components/BackToTop";

function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div className="App overflow-hidden">
      <LoaderHome />
      <BackToTop />
      <EyonaHero />
      <Eyona />
      <Experts />
      <OurProducts />
      <Trust />
      <Form />
      <Magic />
      <OurTeam />
      <JoinTeam />
      <EyonaFooter />
    </div>
  );
}

export default App;
