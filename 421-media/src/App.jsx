import NavBar from "../components/NavBar";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection"
import ServicesSection from "../sections/ServicesSection";
import PortfolioSection from "../sections/PortfolioSection";
import TestimonialSection from "../sections/TestimonialsSection";
import ContactSection from "../sections/ContactSection";
import Footer from "../components/Footer";


function App() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection/>
        <ServicesSection/>
        <PortfolioSection/>
        <TestimonialSection/>
        <ContactSection/>
      </main>
      <Footer/>
    </>
  )
}

export default App