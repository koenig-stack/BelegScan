import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "../motion.js";

const features = [
  {
    icon: "⚡",
    title: "Blitzschnelle Erfassung",
    text: "Ein Foto genügt – alle relevanten Daten werden in Sekunden automatisch erkannt.",
  },
  {
    icon: "🔍",
    title: "Präzise Texterkennung",
    text: "KI-gestützte OCR liest Beträge, Daten und Belegarten zuverlässig aus jedem Beleg.",
  },
  {
    icon: "🔒",
    title: "Sichere Ablage",
    text: "Alle Belege werden verschlüsselt gespeichert und sind jederzeit griffbereit.",
  },
  {
    icon: "🔗",
    title: "Nahtlose Integration",
    text: "Exportieren Sie Belege direkt in Ihre bestehende Buchhaltungssoftware.",
  },
];

export default function Features() {
  return (
    <section id="funktionen" className="container" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInUp}
        style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 56px" }}
      >
        <p className="eyebrow" style={{ marginBottom: 16 }}>Funktionen</p>
        <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}>
          Alles, was Ihre Belegerfassung braucht
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.12)}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 24,
        }}
      >
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            variants={fadeInUp}
            whileHover={{ y: -8, boxShadow: "0 24px 48px -16px rgba(36,31,20,0.2)" }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: 18,
              padding: 32,
            }}
          >
            <div style={{ fontSize: "1.8rem", marginBottom: 16 }}>{feature.icon}</div>
            <h3 style={{ fontSize: "1.1rem", marginBottom: 10 }}>{feature.title}</h3>
            <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.6, fontSize: "0.95rem" }}>
              {feature.text}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
