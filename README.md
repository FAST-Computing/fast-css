# FAST-Computing Brand CSS

CSS aziendali basati su Bootstrap 5, personalizzati con SASS per il brand FAST-Computing.

## 📁 Struttura del progetto

```
brand/
├── src/
│   └── scss/
│       ├── brand.scss          # File principale SASS
│       ├── _variables.scss     # Variabili custom (colori, font, ecc.)
│       └── _custom.scss        # Stili custom aggiuntivi
├── dist/
│   └── css/
│       ├── brand.css           # CSS compilato
│       └── brand.min.css       # CSS compilato e minificato
├── .github/
│   └── workflows/
│       └── build-css.yml       # GitHub Action per build automatico
└── package.json
```

## 🚀 Installazione

```bash
npm install
```

## 🛠️ Comandi disponibili

### Build CSS (produzione)
```bash
npm run build
```
Compila i file SASS in CSS normale e minificato nella cartella `dist/css/`.

### Watch mode (sviluppo)
```bash
npm run watch
```
Monitora le modifiche ai file SASS e ricompila automaticamente.

### Pulizia
```bash
npm run clean
```
Rimuove la cartella `dist/`.

## 🎨 Personalizzazione

### Modificare i colori del brand
Modifica il file `src/scss/_variables.scss`:

```scss
$primary:   #0066cc;  // Colore principale
$secondary: #6c757d;  // Colore secondario
// ... altri colori
```

### Aggiungere font custom

#### Opzione 1: Google Fonts (consigliato)
1. Apri `src/scss/_fonts.scss`
2. Modifica l'URL di import con i tuoi font da [Google Fonts](https://fonts.google.com)
3. Aggiorna `src/scss/_variables.scss` con il nome del font

```scss
// In _fonts.scss
@import url('https://fonts.googleapis.com/css2?family=TuoFont:wght@400;700&display=swap');

// In _variables.scss
$font-family-sans-serif: 'TuoFont', sans-serif !default;
```

#### Opzione 2: Font Self-Hosted (aziendali)
1. Metti i file font (.woff2, .woff) in `src/fonts/`
2. Decommenta e personalizza le regole `@font-face` in `src/scss/_fonts.scss`
3. Aggiorna `$font-family-sans-serif` in `_variables.scss`

Consulta `src/fonts/README.md` per istruzioni dettagliate.

### Aggiungere stili custom
Aggiungi i tuoi stili in `src/scss/_custom.scss`:

```scss
.mia-classe-custom {
  background-color: $primary;
  padding: 1rem;
}
```

### Modificare variabili Bootstrap
Tutte le variabili Bootstrap possono essere sovrascritte in `_variables.scss`. 
Consulta la [documentazione Bootstrap](https://getbootstrap.com/docs/5.3/customize/sass/) per l'elenco completo.

## 🤖 GitHub Actions

Il repository include una GitHub Action che:
- Compila automaticamente i CSS ad ogni push sul branch `master`/`main`
- Genera artifacts scaricabili per ogni build
- Committa automaticamente i CSS compilati nel repository

### Configurazione necessaria

Per permettere alla GitHub Action di committare i file compilati:

1. Vai in **Settings** → **Actions** → **General**
2. Sotto "Workflow permissions", seleziona **Read and write permissions**
3. Salva le modifiche

## 📦 Utilizzo dei CSS

### In HTML
```html
<link rel="stylesheet" href="dist/css/brand.min.css">
```

### Via CDN (dopo il rilascio)
```html
<!-- Sostituisci con il tuo CDN o GitHub Pages URL -->
<link rel="stylesheet" href="https://cdn.example.com/brand/brand.min.css">
```

### Import in SASS/SCSS
```scss
@import 'path/to/brand';
```

## 📝 Note

- I file CSS compilati sono generati automaticamente - non modificarli manualmente
- Tutte le modifiche devono essere fatte nei file `.scss` in `src/scss/`
- La GitHub Action aggiunge `[skip ci]` al messaggio di commit per evitare loop infiniti

## 📄 Licenza

MIT
