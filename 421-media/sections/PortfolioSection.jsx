import "../styles/PortfolioSection.scss";
import { useState } from "react";

const filters = ["All", "Adverts", "Documentary", "Events", "Animation"];

// How many cards show before the "Show More" expander
const INITIAL_VISIBLE = 8;

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
        title: "421 Films Production 1",
        category: "Events",
        youtubeId: "VCGqshLO6hs",
        duration: "Film",
        tall: false,
    },
    {
        id: 9,
        title: "421 Films Production 2",
        category: "Events",
        youtubeId: "2XU_XsA09l8",
        duration: "Film",
        tall: true,
    },
    {
        id: 10,
        title: "421 Films Production 3",
        category: "Events",
        youtubeId: "0E9I4XZ3RsU",
        duration: "Film",
        tall: false,
    },
    {
        id: 11,
        title: "421 Films Production 4",
        category: "Events",
        youtubeId: "URtixVJgugs",
        duration: "Film",
        tall: false,
    },
    {
        id: 12,
        title: "421 Films Production 5",
        category: "Events",
        youtubeId: "PzQHKYbHXQc",
        duration: "Film",
        tall: false,
    },
    {
        id: 13,
        title: "421 Films Production 6",
        category: "Events",
        youtubeId: "PuNsGrMJ5Bg",
        duration: "Film",
        tall: false,
    },
    {
        id: 14,
        title: "421 Films Production 7",
        category: "Events",
        youtubeId: "dXiItGAXI_8",
        duration: "Film",
        tall: true,
    },
    {
        id: 15,
        title: "421 Films Production 8",
        category: "Events",
        youtubeId: "mwkGnoGHkY4",
        duration: "Film",
        tall: false,
    },
    {
        id: 16,
        title: "421 Films Production 9",
        category: "Events",
        youtubeId: "AtAbM5XE32A",
        duration: "Film",
        tall: false,
    },
    {
        id: 17,
        title: "421 Films Production 10",
        category: "Events",
        youtubeId: "GD-3Gy3DG-o",
        duration: "Film",
        tall: false,
    },
    {
        id: 19,
        title: "421 Films Production 11",
        category: "Events",
        youtubeId: "rpb36JA23J0",
        duration: "Film",
        tall: false,
    },
    {
        id: 20,
        title: "421 Films Production 12",
        category: "Events",
        youtubeId: "Or6xB58cXjw",
        duration: "Film",
        tall: true,
    },
    {
        id: 21,
        title: "421 Films Production 13",
        category: "Events",
        youtubeId: "F0Qu16v4a0I",
        duration: "Film",
        tall: false,
    },
    {
        id: 22,
        title: "421 Films Production 14",
        category: "Events",
        youtubeId: "P03uc1vmZF8",
        duration: "Film",
        tall: false,
    },
    {
        id: 23,
        title: "421 Films Production 15",
        category: "Events",
        youtubeId: "huT8gJyid2o",
        duration: "Film",
        tall: false,
    },
    {
        id: 24,
        title: "421 Films Production 16",
        category: "Events",
        youtubeId: "Cdt0LYhauCc",
        duration: "Film",
        tall: false,
    },
];

function getThumb(youtubeId) {
    return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
}

export default function PortfolioSection() {
    const [active, setActive] = useState("All");
    const [playing, setPlaying] = useState(null); // youtubeId of open modal
    const [expanded, setExpanded] = useState(false);

    const filtered = active === "All"
        ? projects
        : projects.filter(p => p.category === active);

    const visible = expanded ? filtered : filtered.slice(0, INITIAL_VISIBLE);
    const hiddenCount = filtered.length - INITIAL_VISIBLE;

    const handleFilter = (f) => {
        setActive(f);
        setExpanded(false); // collapse again when switching category
    };

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
                        onClick={() => handleFilter(f)}
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
                        data-aos-delay={Math.min(i, 7) * 60}
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

            {/* Show more / less */}
            {hiddenCount > 0 && (
                <div className="portfolio-showmore">
                    <button
                        className={`showmore-btn${expanded ? " showmore-btn--open" : ""}`}
                        onClick={() => setExpanded(v => !v)}
                        aria-expanded={expanded}
                    >
                        {expanded ? "Show Less" : `Show ${hiddenCount} More`}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 9l6 6 6-6" />
                        </svg>
                    </button>
                </div>
            )}

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