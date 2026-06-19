import "../styles/PortfolioSection.scss";
import { useState } from "react";

const filters = ["All", "Adverts", "Documentary", "Events", "Animation"];

const projects = [
    {
        id: 1,
        title: "Smfest Awka 2024 Theme Reveal",
        category: "Events",
        youtubeId: "qmsDHlT-KRw",
        duration: "Event Film",
        tall: true,
    },
    {
        id: 2,
        title: "Melan Consults — Promo Video",
        category: "Adverts",
        youtubeId: "copytZLUXBA",
        duration: "Promo",
        tall: false,
    },
    {
        id: 3,
        title: "Brainslink Nigeria — Video Ad",
        category: "Adverts",
        youtubeId: "kLoE6HOxMIc",
        duration: "Ad",
        tall: false,
    },
    {
        id: 4,
        title: "Library Project Documentary",
        category: "Documentary",
        youtubeId: "WWstw1rpmb8",
        duration: "Documentary",
        tall: true,
    },
    {
        id: 5,
        title: "Gideon & Joy Foundation — ₦100M Scholarship Grant",
        category: "Documentary",
        youtubeId: "0LbL9JmXLdw",
        duration: "Documentary",
        tall: false,
    },
    {
        id: 6,
        title: "Dyslexia In Nigeria",
        category: "Documentary",
        youtubeId: "WWstw1rpmb8",
        duration: "Documentary",
        tall: false,
    },
    {
        id: 7,
        title: "Right Breed Academy — Advert",
        category: "Adverts",
        youtubeId: "nMYllBom2wQ",
        duration: "Ad",
        tall: false,
    },
    {
        id: 8,
        title: "Candle Light Service — Ikechukwu Onuoha Kingsley",
        category: "Events",
        youtubeId: "Rxx-RXMfT1w",
        duration: "Live Event",
        tall: true,
    },
];

function getThumb(youtubeId) {
    return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
}

export default function PortfolioSection() {
    const [active, setActive] = useState("All");
    const [playing, setPlaying] = useState(null); // youtubeId of open modal

    const visible = active === "All"
        ? projects
        : projects.filter(p => p.category === active);

    return (
        <section id="portfolio" className="portfolio-section">

            {/* Header */}
            <div className="portfolio-header" data-aos="fade-up">
                <span className="portfolio-eyebrow">Our Work</span>
                <h2>Stories We've Told</h2>
                <p>Real productions. Real clients. Shot and edited in-house.</p>
            </div>

            {/* Filter tabs */}
            <div className="portfolio-filters" data-aos="fade-up" data-aos-delay="100">
                {filters.map(f => (
                    <button
                        key={f}
                        className={`filter-btn${active === f ? " filter-btn--active" : ""}`}
                        onClick={() => setActive(f)}
                    >
                        {f}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="portfolio-grid">
                {visible.map((item, i) => (
                    <div
                        key={item.id}
                        className={`portfolio-card${item.tall ? " portfolio-card--tall" : ""}`}
                        data-aos="fade-up"
                        data-aos-delay={i * 60}
                        onClick={() => setPlaying(item.youtubeId)}
                    >
                        <div className="card-thumb">
                            <img
                                src={getThumb(item.youtubeId)}
                                alt={item.title}
                                loading="lazy"
                                // fallback to hqdefault if maxresdefault 404s
                                onError={e => {
                                    e.target.src = `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`;
                                }}
                            />
                            <div className="card-overlay">
                                <button className="play-btn" aria-label={`Play ${item.title}`}>
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </button>
                            </div>
                            <span className="card-duration">{item.duration}</span>
                        </div>

                        <div className="card-meta">
                            <span className="card-category">{item.category}</span>
                            <h3>{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer CTA */}
            <div className="portfolio-footer" data-aos="fade-up">
                <p>See more on our YouTube channel</p>
                <a
                    href="https://www.youtube.com/@421filmsworldwide"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--outline"
                >
                    View on YouTube
                </a>
            </div>

            {/* Lightbox modal */}
            {playing && (
                <div
                    className="portfolio-modal"
                    onClick={() => setPlaying(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Video player"
                >
                    <div
                        className="modal-inner"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            className="modal-close"
                            onClick={() => setPlaying(null)}
                            aria-label="Close video"
                        >
                            ✕
                        </button>
                        <div className="modal-embed">
                            <iframe
                                src={`https://www.youtube.com/embed/${playing}?autoplay=1`}
                                title="YouTube video"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            )}

        </section>
    );
}