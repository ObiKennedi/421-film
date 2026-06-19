import "../styles/ServicesSection.scss";

const services = [
    {
        icon: "🎬",
        title: "Advert Videos",
        description: "High-impact commercials that sell your brand in seconds.",
    },
    {
        icon: "🎞️",
        title: "Trailers",
        description: "Cinematic teasers that build hype before the big release.",
    },
    {
        icon: "🎥",
        title: "Montage",
        description: "Powerful sequences that tell your story through motion.",
    },
    {
        icon: "✏️",
        title: "Animations",
        description: "2D & motion graphics that bring ideas to vivid life.",
    },
    {
        icon: "📦",
        title: "Product Videos",
        description: "Crisp, detailed product showcases that drive conversions.",
    },
    {
        icon: "🖊️",
        title: "Whiteboard Animation",
        description: "Clear, engaging explainer videos for any concept.",
    },
];

export default function ServicesSection() {
    return (
        <section id="services" className="services-section">
            <div className="services-header" data-aos="fade-up">
                <span className="services-eyebrow">Our Services</span>
                <h2>Everything Your Brand<br />Needs on Screen</h2>
            </div>

            <div className="services-grid">
                {services.map((s, i) => (
                    <div
                        className="service-card"
                        key={i}
                        data-aos="fade-up"
                        data-aos-delay={i * 80}
                    >
                        <span className="service-icon">{s.icon}</span>
                        <h3>{s.title}</h3>
                        <p>{s.description}</p>
                    </div>
                ))}

                {/* +More CTA card */}
                <div className="service-card service-card--cta" data-aos="fade-up" data-aos-delay="500">
                    <span className="cta-plus">+</span>
                    <span className="cta-label">More</span>
                    <p>Custom projects tailored to your vision</p>
                    <button
                        className="btn"
                        onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        Let's Talk
                    </button>
                </div>
            </div>
        </section>
    );
}