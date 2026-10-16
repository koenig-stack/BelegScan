# Herkunft der Bibliotheken und Schriften

Belegscan lädt alles aus diesem Ordner. Vorher kamen React, ReactDOM und Babel
von unpkg (ungepinnt: jeder Aufruf lud die gerade neueste Version), Tesseract
von jsDelivr – samt Rechenkern und deutschen Sprachdaten, die Tesseract beim
ersten Auslesen eines Belegs ebenfalls von jsDelivr nachlädt – und die
Schriften von Google Fonts. Bei jedem Aufruf ging die IP-Adresse damit an drei
Dritte, ohne Einwilligung.

Alle Dateien stammen aus der npm-Registry (`npm pack <paket>@<version>`).
Gepinnt ist jeweils die Version, die die bisherigen Adressen am 16.10.2026
ausgeliefert hätten.

| Datei | Paket (Lizenz) |
|---|---|
| `react-18.3.1.production.min.js` | react 18.3.1, `umd/` (MIT) |
| `react-dom-18.3.1.production.min.js` | react-dom 18.3.1, `umd/` (MIT) |
| `babel-standalone-8.0.7.min.js` | @babel/standalone 8.0.7 (MIT) |
| `tesseract/tesseract-5.1.1.min.js`, `tesseract/worker-5.1.1.min.js` | tesseract.js 5.1.1, `dist/` (Apache-2.0) |
| `tesseract/core/*.wasm.js` | tesseract.js-core 5.1.1 – nur die LSTM-Varianten, die Tesseract 5 standardmäßig nutzt (Apache-2.0) |
| `tesseract/lang/deu.traineddata.gz` | @tesseract.js-data/deu 1.0.0, `4.0.0_best_int/` – genau der Datensatz, den Tesseract sonst von jsDelivr holt (Apache-2.0) |
| `fonts/playfair-display-latin-{600,700}-normal.woff2` | @fontsource/playfair-display 5.3.0 (SIL OFL 1.1, Lizenz liegt bei) |
| `fonts/source-sans-3-latin-wght-normal.woff2` | @fontsource-variable/source-sans-3 5.3.1 (SIL OFL 1.1, Lizenz liegt bei) |

SHA-256:

```
1eda1f8ef4611cf301094fe1559ff6c65426481c8fe210011cb574f32d53bbf2  ./babel-standalone-8.0.7.min.js
5d2286941a6b02a29387efa94809a064f8917598eafa67b938261cf13bb887cd  ./fonts/playfair-display-latin-600-normal.woff2
28453852ea165c47b5a941be00e418402e1407002ed87507f062a1e316328fe6  ./fonts/playfair-display-latin-700-normal.woff2
19143dca075972bc84e3fd9eab7416dd40cc565dccb2435a044bdfabe060c7d5  ./fonts/source-sans-3-latin-wght-normal.woff2
d949f1c3687aedadcedac85261865f29b17cd273997e7f6b2bfc53b2f9d4c4dd  ./react-18.3.1.production.min.js
35f4f974f4b2bcd44da73963347f8952e341f83909e4498227d4e26b98f66f0d  ./react-dom-18.3.1.production.min.js
8f04aa0cc81e7bde33f80e92fa01a7a665f0b4884d098acf5de9c7104a11dfaa  ./tesseract/core/tesseract-core-lstm.wasm.js
ce20eda9533cbed1e6c2b4276fbae1e0adc61b6754b5513084be601787b457cf  ./tesseract/core/tesseract-core-simd-lstm.wasm.js
306c4280d0cbed46fbff727486bd43b92730181bae80f56941a091f363bdf28b  ./tesseract/lang/deu.traineddata.gz
a8e29918d098b2b06e1012bdaeffb4aec0445c5d5654709023e0bd1f442a80e8  ./tesseract/tesseract-5.1.1.min.js
aca1229639fc9907d86f96e825955a2b7c5716d17f3bc3acd71f9c7ab66181fc  ./tesseract/worker-5.1.1.min.js
```

Aktualisieren: neue Version aus npm holen, Datei mit Versionsnummer im Namen
ablegen, Pfad in `index.html` anpassen (bei Tesseract auch `workerPath`
im Aufruf von `Tesseract.recognize`), diese Tabelle nachziehen.

Die Pfade beginnen mit `/belegscan/`, weil die App in der Werkbank als Zone
unter `/belegscan` läuft und auf ihrer eigenen Adresse unter demselben Pfad.
