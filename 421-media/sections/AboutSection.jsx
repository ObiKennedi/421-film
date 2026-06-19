import "../styles/AboutSection.scss";
import { useRef } from "react";

const stats = [
    { label: "Films Produced", value: "120", suffix: "+" },
    { label: "Years in the Industry", value: "14" },
    { label: "Global Viewers", value: "8.5", suffix: "M" },
];

export default function AboutSection() {
    return (
        <section id="about" className="about-section">
            <div className="about-container">

                {/* ── Left: Text ── */}
                <div className="about-text" data-aos="fade-right">
                    <h2>About Us</h2>
                    <p className="about-tagline">Crafting worlds, one frame at a time</p>
                    <p className="about-body">
                        421 Films is an independent production studio driven by a passion
                        for storytelling that cuts deep. From high-octane action to quiet
                        human drama, we build cinematic universes that stay with you long
                        after the credits roll.
                    </p>
                </div>

                {/* ── Right: Image ── */}
                <div className="about-image" data-aos="fade-left" data-aos-delay="150">
                    <img src="/about.jfif" alt="421 Films team behind the scenes" />
                    <div className="image-accent" />
                </div>

            </div>

            {/* ── Stats bar ── */}
            <div className="about-stats" data-aos="fade-up" data-aos-delay="250">
                {stats.map((stat, i) => (
                    <div className="stat-item" key={i}>
                        <span className="stat-label">{stat.label}</span>
                        <span className="stat-value">
                            {stat.value}
                            {stat.suffix && <em>{stat.suffix}</em>}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}