import "../styles/HeroSection.scss"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {
    const navigate = useNavigate();

    useEffect(() => {
        Aos.init({ duration: 1000 });
        Aos.refresh();
    }, []); 

    const scrollToSection = (id) => {
        const el = document.querySelector(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="home" className="hero-section">
            <video
                src="/421 TREND.mp4"
                loop
                autoPlay
                muted
                playsInline
                className="bg-vid"
            ></video>

            <div className="hero-content">
                <span className="hero-eyebrow">Now Streaming</span>
                <h2>421 Films <span>Worlds</span></h2>
                <p>The thrill is here — cinematic stories that pull you in and never let go.</p>
                <div className="button-container">
                    <button onClick={() => scrollToSection("#contact")} className="btn">Contact</button>
                    <button onClick={() => scrollToSection("#about")} className="btn">Learn More</button>
                </div>
                <div className="scroll-hint">
                    <span className="scroll-line" />
                    Scroll to explore
                </div>
            </div>
        </section>
    )
}