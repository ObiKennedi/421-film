import "../styles/HeroSection.scss"
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";


export default function HeroSection() {
    const location = useLocation();

    useEffect(() => {
        Aos.init({ duration: 1000 })
        Aos.refresh();
    }, [location])
    return (
        <section className="hero-section">
            <video
                src="/hero_video.mp4"
                loop
                autoPlay
                muted
                playsInline
            ></video>

            <div className="hero-content">
                <h2>421 Films worlds</h2>
                <p>The thrill is here ....</p>
                <div className="button-container">
                    <button

                        className="btn">Play</button>
                    <button
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="btn">More info</button>
                </div>
            </div>
        </section>
    )
}