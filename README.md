# 🛠 PlanBase – AI Badezimmer- & Fliesenplaner

PlanBase ist eine interaktive PWA zur professionellen Raum-, Fliesen- & Materialplanung.
- 🧠 GPT-Sprachsteuerung
- 📐 Maßgenaue Objektplatzierung
- 🧾 PDF-Angebot mit Material & Fläche
- 🔄 Undo / Redo / Export / Import
- 📱 PWA-fähig – läuft wie eine App
- 🚀 1-Klick-Deployment auf Vercel

## ▶️ Online testen (nach Deployment)

[![Deploy mit Vercel](https://vercel.com/button)](https://vercel.com/import)

## 📦 Quickstart lokal

```bash
npm install
npm run dev
```

## 📁 Verzeichnisstruktur
- `pages/api/voice-gpt.js` → GPT-Mock für Sprachbefehl
- `public/manifest.json`, `service-worker.js` → PWA-Unterstützung
- `app/page.tsx` oder `src/App.js` → Deine Hauptkomponente (hier PlanBase)