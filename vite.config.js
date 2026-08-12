import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Die App wird als In-Host-Zone /belegscan unter dem Werkbank-Portal
// (werkbank-seven.vercel.app) eingebunden. Damit die absoluten Asset-Pfade der
// SPA unter dem Portal-Host auflösen, wird mit base '/belegscan/' gebaut und der
// Build physisch unter dist/belegscan abgelegt (Vercel serviert dist/), sodass
// sowohl die eigene Domain als auch der Portal-Rewrite die Dateien unter
// /belegscan/ finden. Siehe vercel.json.
export default defineConfig({
  base: "/belegscan/",
  plugins: [react()],
  build: {
    outDir: "dist/belegscan",
    emptyOutDir: true,
  },
});
