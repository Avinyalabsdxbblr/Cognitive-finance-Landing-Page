import About from "./components/About";
import Contact from "./components/Contact";
import Explore from "./components/Explore";
import FAQs from "./components/FAQs";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Preloader from "./components/Preloader";
import Reason from "./components/Reason";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <About />
      <Features />
      <Explore />
      <Reason />
      <FAQs />
      <Contact />
      <Footer />
    </div>
  );
}
