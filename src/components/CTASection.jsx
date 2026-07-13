import { motion } from "framer-motion";
import { scaleIn, viewportOnce } from "../motion.js";

export default function CTASection() {
  return (
    <section id="kontakt" className="container" style={{ paddingTop: 96, paddingBottom: 96 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={scaleIn}
        style={{
          background: "var(--color-ink)",
          color: "#fff",
          borderRadius: 24,
          padding: "64px 40px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", marginBottom: 16, color: "#fff" }}>
          Bereit für mühelose Belegerfassung?
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: 460, margin: "0 auto 36px", lineHeight: 1.6 }}>
          Starten Sie noch heute und sparen Sie sich die manuelle Eingabe von Belegen.
        </p>
        <motion.a
          href="mailto:kontakt@belegassistent.de"
          style={{
            display: "inline-flex",
            padding: "14px 32px",
            borderRadius: 999,
            background: "#fff",
            color: "var(--color-ink)",
            fontWeight: 600,
          }}
          whileHover={{ scale: 1.06, boxShadow: "0 14px 28px -10px rgba(0,0,0,0.4)" }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
        >
          Jetzt kostenlos starten
        </motion.a>
      </motion.div>
    </section>
  );
}
