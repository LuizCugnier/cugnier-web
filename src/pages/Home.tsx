import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                {/* Hero Section */}
                <HeroSection />
                {/* Services Section */}
                {/* About Section */}
                {/* Contact Section */}
            </main>
        </div>
    )
}