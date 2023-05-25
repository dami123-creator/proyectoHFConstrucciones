import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import GalleryObras from "../components/GalleryObras";
import AboutSection from "../components/AboutSection";
import Form from "../components/Form";
import Services from "../components/Services";
import Clients from "../components/Clients";
import Wsp from "../components/Wsp";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />

      <AboutSection />
      <Services />
      <Clients />
      <Wsp />
      {/* <div
        className="flex items-center text-4xl justify-center my-8"
        style={{ minHeight: "500px" }}
      >
        <GalleryObras />
      </div> */}
      <Form />
      <Footer />
    </>
  );
}
