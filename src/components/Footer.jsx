import { motion } from "framer-motion";
import { fadeIn, viewportOnce } from "../motion.js";

const links = ["Impressum", "Datenschutz", "Kontakt"];

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeIn}
      style={{ borderTop: "1px solid var(--color-border)" }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
          paddingTop: 32,
          paddingBottom: 32,
        }}
      >
        <span style={{ color: "var(--color-ink-soft)", fontSize: "0.9rem" }}>
          © 2026 BelegAssistent
        </span>
        <div style={{ display: "flex", gap: 28 }}>
          {links.map((link) => (
            <motion.a
              key={link}
              href="#"
              style={{ fontSize: "0.9rem", color: "var(--color-ink-soft)" }}
              whileHover={{ color: "var(--color-ink)" }}
              transition={{ duration: 0.2 }}
            >
              {link}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
