import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../motion.js";

export default function Hero() {
  return (
    <section className="container" style={{ paddingTop: 96, paddingBottom: 96 }}>
      <motion.div
        variants={staggerContainer(0.15)}
        initial="hidden"
        animate="visible"
        style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}
      >
        <motion.p variants={fadeInUp} className="eyebrow" style={{ marginBottom: 20 }}>
          Professionelle Belegerfassung
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", marginBottom: 24 }}
        >
          Belege erfassen.
          <br />
          Mühelos digitalisiert.
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          style={{ fontSize: "1.15rem", color: "var(--color-ink-soft)", marginBottom: 40, lineHeight: 1.6 }}
        >
          Fotografieren, hochladen, fertig. BelegAssistent erkennt Beträge, Daten und
          Belegarten automatisch – präzise, sicher und ohne manuelle Eingabe.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}
        >
          <motion.a
            href="#kontakt"
            className="btn-primary"
            whileHover={{ scale: 1.05, boxShadow: "0 14px 28px -10px rgba(36,31,20,0.45)" }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
          >
            Kostenlos testen
          </motion.a>
          <motion.a
            href="#ablauf"
            className="btn-secondary"
            whileHover={{ scale: 1.05, borderColor: "var(--color-ink)" }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
          >
            So funktioniert's
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -8, rotate: -0.5 }}
        style={{
          marginTop: 64,
          maxWidth: 560,
          marginLeft: "auto",
          marginRight: "auto",
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
          borderRadius: 20,
          padding: 32,
          boxShadow: "0 30px 60px -20px rgba(36,31,20,0.18)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
          <span style={{ fontWeight: 600 }}>Tankstelle Müller</span>
          <span style={{ color: "var(--color-accent-dark)", fontWeight: 600 }}>€ 64,20</span>
        </div>
        <div style={{ height: 1, background: "var(--color-border)", marginBottom: 20 }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 10, color: "var(--color-ink-soft)", fontSize: "0.9rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Datum</span>
            <span>13.07.2026</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Kategorie</span>
            <span>Kraftstoff</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Status</span>
            <span style={{ color: "#3f7d4a", fontWeight: 600 }}>✓ Erkannt</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
