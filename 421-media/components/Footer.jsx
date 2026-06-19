import "../styles/Footer.scss";
import { useState } from "react";
import { FaFacebookF, FaYoutube, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MapPin, Clock, ArrowRight, CheckCircle } from "lucide-react";

const SOCIALS = [
    { name: "Facebook",  icon: <FaFacebookF />,  url: "https://www.facebook.com/421films" },
    { name: "YouTube",   icon: <FaYoutube />,    url: "https://www.youtube.com/@421films" },
    { name: "WhatsApp",  icon: <FaWhatsapp />,   url: "https://wa.me/2348000000000" },
    { name: "Instagram", icon: <FaInstagram />,  url: "https://www.instagram.com/421films" },
];

const QUICK_LINKS = [
    { label: "Home",      href: "#hero" },
    { label: "About",     href: "#about" },
    { label: "Services",  href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact",   href: "#contact" },
];

const SERVICES = [
    "Advert Videos",
    "Trailers",
    "Montage",
    "Animations",
    "Product Videos",
    "Whiteboard Animation",
];

export default function Footer() {
    const [email, setEmail] = useState("");
    const [subStatus, setSubStatus] = useState("idle"); // idle | sending | done | error

    const handleSubscribe = async e => {
        e.preventDefault();
        if (!email) return;
        setSubStatus("sending");

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // 🔑 replace
                    subject: "New Newsletter Subscriber — 421 Films",
                    from_name: "421 Films Website",
                    email,
                    message: `New subscriber: ${email}`,
                }),
            });
            const data = await res.json();
            setSubStatus(data.success ? "done" : "error");
        } catch {
            setSubStatus("error");
        }
    };

    const scrollTo = href => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer className="site-footer">

            {/* ── Main grid ── */}
            <div className="footer-grid">

                {/* Col 1 — Brand */}
                <div className="footer-brand">
                    <div className="footer-logo">
                        <img src="/logo.png" alt="421 Films logo" />
                    </div>
                    <p className="footer-tagline">
                        The thrill is here. We craft advert videos, trailers, montages,
                        animations, and documentaries from our studio in Owerri, Nigeria.
                    </p>

                    <div className="footer-meta">
                        <span><MapPin size={14} /> Mac Donald's Shopping Plaza, Plot CR/9 Arugo Layout, Owerri</span>
                        <span><Clock size={14} /> Always Open</span>
                    </div>

                    <div className="footer-socials">
                        {SOCIALS.map(s => (
                            <a
                                key={s.name}
                                href={s.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.name}
                                className="footer-social-btn"
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Col 2 — Quick links */}
                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        {QUICK_LINKS.map(l => (
                            <li key={l.label}>
                                <button onClick={() => scrollTo(l.href)}>
                                    <ArrowRight size={13} />
                                    {l.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Col 3 — Services */}
                <div className="footer-col">
                    <h4>Services</h4>
                    <ul>
                        {SERVICES.map(s => (
                            <li key={s}>
                                <span>
                                    <ArrowRight size={13} />
                                    {s}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Col 4 — Subscribe */}
                <div className="footer-col footer-subscribe">
                    <h4>Stay in the Loop</h4>
                    <p>Get notified when we drop new work and behind-the-scenes content.</p>

                    {subStatus === "done" ? (
                        <div className="sub-success">
                            <CheckCircle size={20} />
                            <span>You're subscribed!</span>
                        </div>
                    ) : (
                        <form className="sub-form" onSubmit={handleSubscribe}>
                            <div className="sub-input-wrap">
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                    aria-label="Email address"
                                />
                                <button
                                    type="submit"
                                    aria-label="Subscribe"
                                    disabled={subStatus === "sending"}
                                >
                                    {subStatus === "sending"
                                        ? <span className="spinner" />
                                        : <ArrowRight size={17} />
                                    }
                                </button>
                            </div>
                            {subStatus === "error" && (
                                <p className="sub-error">Something went wrong. Try again.</p>
                            )}
                        </form>
                    )}
                </div>

            </div>

            {/* ── Bottom bar ── */}
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} 421 Films. All rights reserved.</p>
                <p>Film/Television Studio · Owerri, Nigeria</p>
            </div>

        </footer>
    );
}