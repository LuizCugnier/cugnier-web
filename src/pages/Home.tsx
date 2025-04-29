import AboutSection from "../components/HomeComponents/AboutSection";
import Footer from "../components/HomeComponents/Footer";
import HeroSection from "../components/HomeComponents/HeroSection";
import NavbarGlass from "../components/HomeComponents/NavbarGlass";
import ServicesSection from "../components/HomeComponents/ServicesSection";
import WhySection from "../components/HomeComponents/WhySection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Navbar /> */}
      <NavbarGlass />
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />
        {/* Why Section */}
        <WhySection />
        {/* Services Section */}
        <ServicesSection />
        {/* About Section */}
        <AboutSection />
        {/* Contact Section */}

        <Footer />
      </main>
    </div>
  );
}
