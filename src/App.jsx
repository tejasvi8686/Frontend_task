import "./App.css";
import Contactus from "./components/Contactus/Contactus";
import FeaturesSection from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Product/Product";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <Product />
      <Testimonials />
      <Contactus />
      <Footer />
    </>
  );
}

export default App;
