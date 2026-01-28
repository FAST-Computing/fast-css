# Quick Start: Aggiungere Font Custom

## 🚀 Esempio rapido con Google Fonts

### 1. Scegli un font su Google Fonts
Vai su https://fonts.google.com e scegli il tuo font (es. "Poppins")

### 2. Modifica `src/scss/_fonts.scss`
```scss
// Sostituisci la riga esistente con:
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
```

### 3. Modifica `src/scss/_variables.scss`
```scss
// Cambia questa riga:
$font-family-sans-serif: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif !default;
```

### 4. Ricompila
```bash
npm run build
```

### 5. Fatto! ✅

---

## 📦 Font Self-Hosted (per font aziendali)

### 1. Prepara i file font
Hai bisogno di file `.woff2` e `.woff`. Se hai solo `.ttf` o `.otf`:
- Usa https://www.fontsquirrel.com/tools/webfont-generator
- Carica il tuo font
- Seleziona "Optimal" preset
- Scarica il pacchetto

### 2. Organizza i file
Metti i file in `src/fonts/`:
```
src/fonts/
├── MioFont-Regular.woff2
├── MioFont-Regular.woff
├── MioFont-Bold.woff2
└── MioFont-Bold.woff
```

### 3. Configura @font-face
In `src/scss/_fonts.scss`, decommenta e modifica:

```scss
// Regular
@font-face {
  font-family: 'MioFont';
  src: url('../fonts/MioFont-Regular.woff2') format('woff2'),
       url('../fonts/MioFont-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

// Bold
@font-face {
  font-family: 'MioFont';
  src: url('../fonts/MioFont-Bold.woff2') format('woff2'),
       url('../fonts/MioFont-Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

### 4. Usa il font
In `src/scss/_variables.scss`:
```scss
$font-family-sans-serif: 'MioFont', -apple-system, sans-serif !default;
```

### 5. Ricompila
```bash
npm run build
```

---

## 🎯 Font Multipli

Puoi usare font diversi per testo e codice:

```scss
// In _fonts.scss
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Fira+Code:wght@400;500&display=swap');

// In _variables.scss
$font-family-sans-serif: 'Inter', sans-serif !default;
$font-family-monospace:  'Fira Code', monospace !default;
```

---

## 🔍 Font popolari consigliati

### Per testo corpo
- **Inter** - moderno, leggibile
- **Poppins** - geometrico, amichevole
- **Roboto** - neutrale, versatile
- **Open Sans** - classico, professionale
- **Montserrat** - elegante, geometrico

### Per codice
- **Fira Code** - con ligature
- **JetBrains Mono** - ottimizzato per sviluppatori
- **Roboto Mono** - pulito, leggibile
- **Source Code Pro** - da Adobe

### Per titoli
- **Raleway** - elegante, sottile
- **Playfair Display** - serif classico
- **Bebas Neue** - bold, impattante

---

## ⚠️ Checklist Licenze

Prima di usare un font sul web, verifica:

- ✅ Google Fonts → Tutti open source, uso libero
- ❓ Font commerciali → Verifica licenza web
- ❓ Font di sistema → Solo per uso locale
- ❓ Font scaricati → Leggi la licenza

---

## 💡 Suggerimenti prestazioni

1. **Carica solo i pesi necessari**
   ```
   ❌ family=Inter:wght@100;200;300;400;500;600;700;800;900
   ✅ family=Inter:wght@400;700
   ```

2. **Usa font-display: swap**
   Mostra il testo subito con font di fallback

3. **Preferisci WOFF2**
   Compressione migliore, file più piccoli

4. **Self-host per privacy**
   Evita richieste a server esterni (Google)

---

## 🐛 Troubleshooting

### Il font non cambia
1. Verifica che il nome sia corretto (case-sensitive)
2. Controlla la console browser per errori
3. Ricompila con `npm run build`
4. Svuota cache browser (Ctrl+Shift+R)

### Font non si carica
1. Verifica il path in `@font-face` src
2. Assicurati che i file siano in `src/fonts/`
3. Controlla che i file siano `.woff2` o `.woff`

### Font troppo pesante
1. Riduci il numero di pesi caricati
2. Usa solo WOFF2 se supporti solo browser moderni
3. Considera system fonts per prestazioni massime
