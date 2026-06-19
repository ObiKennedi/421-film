import "../styles/TestimonialsSection.scss";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
    {
        id: 1,
        name: "Chukwuemeka Obi",
        role: "CEO, Brainslink Nigeria",
        avatar: "/testimonials/chukwuemeka.jpg",
        initials: "CO",
        rating: 5,
        text: "421 Films delivered our video ad beyond expectations. The team understood our brand immediately and translated it into something visually stunning. Our engagement doubled within the first week of the campaign going live.",
    },
    {
        id: 2,
        name: "Adaeze Nwosu",
        role: "Director, Melan Consults",
        avatar: "/testimonials/adaeze.jpg",
        initials: "AN",
        rating: 5,
        text: "From concept to delivery, the process was seamless. They captured the essence of what Melan Consults stands for in a promo video that our clients keep talking about. Professional, creative, and always on time.",
    },
    {
        id: 3,
        name: "Pastor Ifeanyi Eze",
        role: "Event Organiser, Candle Light Service",
        avatar: "/testimonials/ifeanyi.jpg",
        initials: "IE",
        rating: 5,
        text: "They filmed and produced our candlelight service with such sensitivity and care. Every moment was captured beautifully. Families who couldn't attend wept watching the footage — that's the power of great filmmaking.",
    },
    {
        id: 4,
        name: "Obiageli Okeke",
        role: "Coordinator, Gideon & Joy Foundation",
        avatar: "/testimonials/obiageli.jpg",
        initials: "OO",
        rating: 5,
        text: "The documentary 421 Films produced for our ₦100M scholarship grant ceremony was exceptional. They told the story of our beneficiaries with dignity and heart. We've used the footage in multiple presentations since.",
    },
    {
        id: 5,
        name: "Nnamdi Uchenna",
        role: "Principal, Right Breed Academy",
        avatar: "/testimonials/nnamdi.jpg",
        initials: "NU",
        rating: 5,
        text: "Our school advert brought in a wave of enquiries we weren't prepared for — in the best way possible. 421 Films knew exactly how to speak to Nigerian parents. The quality was television-level at a very fair price.",
    },
    {
        id: 6,
        name: "Chiamaka Duru",
        role: "Festival Director, Smfest Awka",
        avatar: "/testimonials/chiamaka.jpg",
        initials: "CD",
        rating: 5,
        text: "The theme reveal video they created for Smfest 2024 set the tone for the entire event. The energy, the editing, the music sync — it was electric. Attendees were hyped before they even arrived.",
    },
];

function StarRating({ count }) {
    return (
        <div className="star-rating" aria-label={`${count} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <svg
                    key={i}
                    viewBox="0 0 24 24"
                    fill={i < count ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className={i < count ? "star--filled" : "star--empty"}
                >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
            ))}
        </div>
    );
}

export default function TestimonialsSection() {
    const [current, setCurrent] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [direction, setDirection] = useState("next");
    const autoRef = useRef(null);

    const total = TESTIMONIALS.length;

    const go = (dir) => {
        if (animating) return;
        setDirection(dir);
        setAnimating(true);
        setTimeout(() => {
            setCurrent(prev =>
                dir === "next"
                    ? (prev + 1) % total
                    : (prev - 1 + total) % total
            );
            setAnimating(false);
        }, 300);
    };

    // Auto-advance every 6 seconds
    useEffect(() => {
        autoRef.current = setInterval(() => go("next"), 6000);
        return () => clearInterval(autoRef.current);
    }, [animating]);

    const resetAuto = (dir) => {
        clearInterval(autoRef.current);
        go(dir);
    };

    const t = TESTIMONIALS[current];

    return (
        <section id="testimonials" className="testimonials-section">

            {/* Header */}
            <div className="testimonials-header" data-aos="fade-up">
                <span className="testimonials-eyebrow">Client Stories</span>
                <h2>What Our Clients Say</h2>
                <p>Real feedback from people we've had the privilege of working with.</p>
            </div>

            {/* Carousel */}
            <div className="testimonials-carousel" data-aos="fade-up" data-aos-delay="100">

                {/* Featured card */}
                <div className={`testimonial-card ${animating ? `testimonial-card--exit-${direction}` : "testimonial-card--enter"}`}>
                    <Quote className="quote-icon" size={40} />

                    <p className="testimonial-text">"{t.text}"</p>

                    <StarRating count={t.rating} />

                    <div className="testimonial-author">
                        <div className="author-avatar">
                            <img
                                src={t.avatar}
                                alt={t.name}
                                onError={e => { e.target.style.display = "none"; }}
                            />
                            <span className="avatar-initials">{t.initials}</span>
                        </div>
                        <div className="author-info">
                            <strong>{t.name}</strong>
                            <span>{t.role}</span>
                        </div>
                    </div>
                </div>

                {/* Controls */}
                <div className="carousel-controls">
                    <button
                        className="carousel-btn"
                        onClick={() => resetAuto("prev")}
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    {/* Dot indicators */}
                    <div className="carousel-dots">
                        {TESTIMONIALS.map((_, i) => (
                            <button
                                key={i}
                                className={`dot${i === current ? " dot--active" : ""}`}
                                onClick={() => {
                                    clearInterval(autoRef.current);
                                    setDirection(i > current ? "next" : "prev");
                                    setAnimating(true);
                                    setTimeout(() => { setCurrent(i); setAnimating(false); }, 300);
                                }}
                                aria-label={`Go to testimonial ${i + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        className="carousel-btn"
                        onClick={() => resetAuto("next")}
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            {/* Thumbnail strip */}
            <div className="testimonials-strip" data-aos="fade-up" data-aos-delay="200">
                {TESTIMONIALS.map((t, i) => (
                    <button
                        key={t.id}
                        className={`strip-item${i === current ? " strip-item--active" : ""}`}
                        onClick={() => {
                            clearInterval(autoRef.current);
                            setDirection(i > current ? "next" : "prev");
                            setAnimating(true);
                            setTimeout(() => { setCurrent(i); setAnimating(false); }, 300);
                        }}
                        aria-label={`View testimonial from ${t.name}`}
                    >
                        <div className="strip-avatar">
                            <img
                                src={t.avatar}
                                alt={t.name}
                                onError={e => { e.target.style.display = "none"; }}
                            />
                            <span>{t.initials}</span>
                        </div>
                        <div className="strip-info">
                            <strong>{t.name}</strong>
                            <span>{t.role}</span>
                        </div>
                    </button>
                ))}
            </div>

        </section>
    );
}