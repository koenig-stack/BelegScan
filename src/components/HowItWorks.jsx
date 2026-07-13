import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "../motion.js";

const steps = [
  {
    number: "01",
    title: "Foto aufnehmen",
    text: "Beleg mit dem Smartphone fotografieren oder als Scan hochladen.",
  },
  {
    number: "02",
    title: "Automatische Erkennung",
    text: "Unsere KI extrahiert Betrag, Datum, Händler und Kategorie in Sekunden.",
  },
  {
    number: "03",
    title: "Direkt weiterleiten",
    text: "Der Beleg landet geprüft und strukturiert in Ihrer Buchhaltung.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="ablauf"
      style={{ background: "var(--color-surface)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}
    >
      <div className="container" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 56px" }}
        >
          <p className="eyebrow" style={{ marginBottom: 16 }}>So funktioniert's</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}>In drei Schritten erledigt</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.18)}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 32,
          }}
        >
          {steps.map((step) => (
            <motion.div key={step.number} variants={fadeInUp} style={{ textAlign: "center" }}>
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "var(--color-bg)",
                  border: "1px solid var(--color-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  color: "var(--color-accent-dark)",
                }}
              >
                {step.number}
              </motion.div>
              <h3 style={{ fontSize: "1.1rem", marginBottom: 10 }}>{step.title}</h3>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                {step.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
