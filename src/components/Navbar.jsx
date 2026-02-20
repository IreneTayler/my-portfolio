import { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      // Glass effect
      setScrolled(window.scrollY > 20);

      // Active section detection
      let current = "home";

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          current = section.getAttribute("id");
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      style={{
        ...styles.nav,
        ...(scrolled ? styles.navScrolled : {}),
      }}
    >
      <div style={styles.container}>
        <div style={styles.logo}>Irene</div>

        <div style={styles.menu}>
          {menu.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={{
                ...styles.link,
                ...(active === item.id ? styles.active : {}),
              }}
            >
              {item.label}
              <span
                style={{
                  ...styles.underline,
                  ...(active === item.id ? styles.underlineActive : {}),
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1000,
    padding: "18px 0",
    transition: "all 0.3s ease",
  },

  navScrolled: {
    background: "rgba(255,255,255,0.85)",
    backdropFilter: "blur(14px)",
    boxShadow: "0 6px 24px rgba(0,0,0,0.06)",
    padding: "12px 0",
  },

  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
  },

  logo: {
    fontSize: "20px",
    fontWeight: 700,
    color: "#0f172a",
  },

  menu: {
    display: "flex",
    gap: "32px",
  },

  link: {
    position: "relative",
    textDecoration: "none",
    color: "#475569",
    fontSize: "15px",
    fontWeight: 500,
    paddingBottom: "6px",
    transition: "color 0.3s",
  },

  active: {
    color: "#2563eb",
  },

  underline: {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "0%",
    height: "2px",
    background: "#2563eb",
    transition: "width 0.3s ease",
  },

  underlineActive: {
    width: "100%",
  },
};

export default Navbar;