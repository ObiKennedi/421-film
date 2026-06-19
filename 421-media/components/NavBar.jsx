import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import "../styles/NavBar.scss"

const navLinks = [
    {
        name: "Home",
        url: "#home"
    },
    {
        name: "About",
        url: "#about"
    },
    {
        name: "Services",
        url: "#services"
    },
    {
        name: "Portfolio",
        url: "#portfolio"
    },
    {
        name: "Contact",
        url: "#contact"
    }
]

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className={`header_class ${isScrolled ? "scrolled" : ""}`}>
            <img src="/logo.png" alt="421 Media" />

            <button className="mobile-menu-btn" onClick={() => setOpen(!open)}>
                {open ? <X size={24} /> : <Menu size={24} />}
            </button>

            <nav className={open ? "open" : ""}>
                <div className="nav-links">
                    {navLinks.map((link, index) => (
                        <a key={index} href={link.url}>
                            {link.name}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    )
}

export default NavBar