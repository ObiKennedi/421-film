import "../styles/ContactSection.scss";
import { useState } from "react";
import { MapPin, Clock } from "lucide-react"
import {
    FaFacebookF,
    FaYoutube,
    FaWhatsapp,
    FaInstagram,
    FaTiktok,
    Mail
} from "react-icons/fa";


const SOCIALS = [
    {
        name: "Facebook",
        handle: "@421films",
        url: "https://www.facebook.com/share/18ra3cJrrG/",
        icon: <FaFacebookF />,
    },
    {
        name: "YouTube",
        handle: "@421filmsworldwide",
        url: "https://www.youtube.com/@421filmsworldwide",
        icon: <FaYoutube />,
    },
    {
        name: "WhatsApp",
        handle: "Chat with us",
        url: "https://wa.me/23409059875508",
        icon: <FaWhatsapp />,
    },
    {
        name: "Instagram",
        handle: "@421filmsworldwide",
        url: "https://www.instagram.com/421filmsworldwide",
        icon: <FaInstagram />,
    },
    {
        name: "Tiktok",
        handle: "@421filmsworldwide",
        url: "https://www.facebook.com/share/18ra3cJrrG/",
        icon: <FaTiktok />,
    },
];
const INFO = [
    {
        label: "Address",
        value: "Mac Donald's Shopping Plaza, Plot CR/9 Arugo Layout, Owerri, Nigeria 460212",
        icon: <MapPin size={18} />,
    },
    {
        label: "WhatsApp",
        value: "+234 0905 987 5508",
        url: "https://wa.me/23409059875508",
        icon: <FaWhatsapp size={18} />,
    },
    {
        label: "Email",
        value: "contact@421filmsworld.com",
        url: "mailto:contact@421filmsworld.com",
        icon: <Mail size={18} />,
    },
    {
        label: "Hours",
        value: "Always Open",
        icon: <Clock size={18} />,
    },
];

export default function ContactSection() {
    const [formData, setFormData] = useState({ name: "", email: "", service: "", message: "" });
    const [status, setStatus] = useState("idle"); // idle | sending | success | error

    const handleChange = e => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setStatus("sending");

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: "09987fc2-83a5-4e98-ae4a-e6da8d45acb", // 🔑 replace this
                    subject: `New enquiry from ${formData.name} — 421 Films`,
                    from_name: "421 Films Website",
                    ...formData,
                }),
            });

            const data = await res.json();
            setStatus(data.success ? "success" : "error");
        } catch {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-wrapper">

                {/* ── Left panel ── */}
                <div className="contact-info" data-aos="fade-right">
                    <span className="contact-eyebrow">Get in Touch</span>
                    <h2>Let's Make<br />Something Great</h2>
                    <p>
                        Got a project in mind? Tell us about it — we'll get back to
                        you within 24 hours.
                    </p>

                    {/* Info rows */}
                    <ul className="info-list">
                        {INFO.map((item, i) => (
                            <li key={i} className="info-item">
                                <span className="info-icon">{item.icon}</span>
                                <div>
                                    <span className="info-label">{item.label}</span>
                                    {item.url
                                        ? <a href={item.url} target="_blank" rel="noopener noreferrer" className="info-value info-value--link">{item.value}</a>
                                        : <span className="info-value">{item.value}</span>
                                    }
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* Social links */}
                    <div className="social-row">
                        {SOCIALS.map(s => (
                            <a
                                key={s.name}
                                href={s.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label={s.name}
                            >
                                {s.icon}
                                <span>{s.name}</span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* ── Right panel: Form ── */}
                <div className="contact-form-wrap" data-aos="fade-left" data-aos-delay="150">
                    {status === "success" ? (
                        <div className="form-success">
                            <div className="success-icon">✓</div>
                            <h3>Message Sent!</h3>
                            <p>We'll be in touch within 24 hours.</p>
                            <button className="btn" onClick={() => { setStatus("idle"); setFormData({ name: "", email: "", service: "", message: "" }); }}>
                                Send Another
                            </button>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit} noValidate>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="service">Service Needed</label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>Select a service...</option>
                                    <option>Advert Video</option>
                                    <option>Trailer</option>
                                    <option>Montage</option>
                                    <option>Animation</option>
                                    <option>Product Description Video</option>
                                    <option>Whiteboard Animation</option>
                                    <option>Documentary</option>
                                    <option>Livestream</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Tell Us About Your Project</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Brief description, timeline, budget..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {status === "error" && (
                                <p className="form-error">
                                    Something went wrong. Please try again or reach us on WhatsApp.
                                </p>
                            )}

                            <button
                                type="submit"
                                className="btn btn--submit"
                                disabled={status === "sending"}
                            >
                                {status === "sending" ? (
                                    <><span className="spinner" /> Sending...</>
                                ) : "Send Message"}
                            </button>
                        </form>
                    )}
                </div>

            </div>
        </section>
    );
}