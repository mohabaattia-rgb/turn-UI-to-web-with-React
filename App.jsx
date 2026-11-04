import "./style.css";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Clients from "./components/clients";
import Communication from "./components/Community";
import Pixelgrade from "./components/Pixelgrade";
import Achievements from "./components/achievements";
import Designfooter from "./components/DesignFooter";
import Testimonial from "./components/Testimonial";
import Updates from "./components/Updates";
import Cta from "./components/cta";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Communication />
      <Pixelgrade />
      <Achievements />
      <Designfooter />
      <Testimonial />
      <Updates />
      <Cta />
      <Footer />
    </>
  );
}

export default App;
