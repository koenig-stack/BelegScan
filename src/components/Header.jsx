import { motion } from "framer-motion";

const navLinks = [
  { label: "Funktionen", href: "#funktionen" },
  { label: "So funktioniert's", href: "#ablauf" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(250, 248, 242, 0.85)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 76,
        }}
      >
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: "1.4rem" }}>🧾</span>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.15rem" }}>
            BelegAssistent
          </span>
        </a>

        <nav style={{ display: "flex", gap: 32 }}>
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              style={{ fontSize: "0.95rem", fontWeight: 500, color: "var(--color-ink-soft)" }}
              whileHover={{ color: "var(--color-ink)", y: -1 }}
              transition={{ duration: 0.2 }}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        <motion.a
          href="#kontakt"
          className="btn-primary"
          style={{ padding: "10px 22px", fontSize: "0.9rem" }}
          whileHover={{ scale: 1.05, boxShadow: "0 10px 24px -8px rgba(36,31,20,0.4)" }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
        >
          Jetzt starten
        </motion.a>
      </div>
    </motion.header>
  );
}
