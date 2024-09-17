import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Offers from "./components/Offers";

export default function Home() {
  return (
    <>
      <Header />
      <Gallery />
      <Offers />
      <AboutUs />
      <Footer />
    </>
  );
}
