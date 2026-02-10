# FAST graphics packages (`@fast/*`)

Repo per il rilascio della parte grafica FAST-Computing in forma di pacchetti versionati.

Supporta 3 temi:

- **corporate**
- **argos**
- **atlas**

## 📦 Packages

- `@fast/tokens` — source of truth (design tokens)
- `@fast/mui-theme` — MUI `Theme` derivato dai tokens
- `@fast/assets` — asset consumabili ovunque:
   - CSS variables (`styles.css`)
   - **3 CSS compilati separati** (corporate/argos/atlas + min)
   - fonts (se presenti)
- `@fast/ui` — componenti React/MUI
- `@fast/layouts` — layout React/MUI

## ✅ Build

```bash
npm install
npm run build
```

## 📦 Usare i CSS (non-Next / non-React)

Dopo la publish su registry, puoi consumare i file direttamente dal pacchetto `@fast/assets`:

- `@fast/assets/styles.css`
- `@fast/assets/css/corporate.css`
- `@fast/assets/css/argos.css`
- `@fast/assets/css/atlas.css`

Sono disponibili anche le versioni `.min.css`.

## 🗂️ Struttura repo

```
packages/
   assets/
   tokens/
   mui-theme/
   ui/
   layouts/
```

- Committa automaticamente i CSS compilati nel repository

### Aggiungere stili custom

### Configurazione necessaria

```scss

// src/scss/argos/_custom.scssPer permettere alla GitHub Action di committare i file compilati:

.mia-classe-argos {

  background-color: $argos-accent;1. Vai in **Settings** → **Actions** → **General**

  padding: 1rem;2. Sotto "Workflow permissions", seleziona **Read and write permissions**

}3. Salva le modifiche

```

## 📦 Utilizzo dei CSS

### Condividere codice tra brand

### In HTML

I file in `src/scss/_common/` sono condivisi da tutti i brand:```html

<link rel="stylesheet" href="dist/css/brand.min.css">

- **`_fonts.scss`** - Font comuni (Google Fonts o self-hosted)```

- **`_variables-base.scss`** - Variabili di base che ogni brand può sovrascrivere

- **`_mixins.scss`** - Mixin e funzioni riutilizzabili### Via CDN (dopo il rilascio)

```html

### Aggiungere font custom<!-- Sostituisci con il tuo CDN o GitHub Pages URL -->

<link rel="stylesheet" href="https://cdn.example.com/brand/brand.min.css">

Vedi la guida completa in [FONTS_GUIDE.md](./FONTS_GUIDE.md)```



Quick esempio per Google Fonts:### Import in SASS/SCSS

```scss```scss

// src/scss/_common/_fonts.scss@import 'path/to/brand';

@import url('https://fonts.googleapis.com/css2?family=TuoFont:wght@400;700&display=swap');```



// src/scss/corporate/_variables.scss## 📝 Note

$font-family-sans-serif: 'TuoFont', sans-serif !default;

```- I file CSS compilati sono generati automaticamente - non modificarli manualmente

- Tutte le modifiche devono essere fatte nei file `.scss` in `src/scss/`

## 📦 Utilizzo dei CSS- La GitHub Action aggiunge `[skip ci]` al messaggio di commit per evitare loop infiniti



### Corporate## 📄 Licenza

```html

<link rel="stylesheet" href="dist/css/corporate.min.css">MIT

```

### Argos
```html
<link rel="stylesheet" href="dist/css/argos.min.css">
```

### Atlas
```html
<link rel="stylesheet" href="dist/css/atlas.min.css">
```

## 🎯 Caratteristiche dei Brand

### Corporate (Aziendale Generico)
- **Colori**: Blu corporate professionale (#0066cc)
- **Stile**: Classico, pulito, professionale
- **Componenti**: Header gradient, footer scuro, card eleganti
- **Uso**: Sito corporate aziendale principale

### Argos (Portale Dashboard)
- **Colori**: Blu scuro (#2c3e50), grigio argento
- **Stile**: Dashboard professionale, layout sidebar
- **Componenti**: Sidebar fissa, navbar top, stat cards, tabelle
- **Uso**: Applicazioni web, dashboard, pannelli admin

### Atlas (Portale Moderno)
- **Colori**: Viola/Purple (#6f42c1), gradienti colorati
- **Stile**: Moderno, colorato, dinamico
- **Componenti**: Hero gradient, card elevate, bottoni rounded
- **Uso**: Portali web moderni, landing page, app consumer

## 🤖 GitHub Actions

Il repository include una GitHub Action che:
- Compila automaticamente **tutti e 3 i brand** ad ogni push
- Genera artifacts scaricabili per ogni build
- Committa automaticamente i CSS compilati (opzionale)

### Configurazione necessaria

Per il commit automatico:
1. Vai in **Settings** → **Actions** → **General**
2. Sotto "Workflow permissions", seleziona **Read and write permissions**

## 🆕 Aggiungere un nuovo brand

1. Crea una nuova cartella in `src/scss/nuovo-brand/`
2. Copia i 3 file da un brand esistente:
   - `nuovo-brand.scss`
   - `_variables.scss`
   - `_custom.scss`
3. Personalizza i colori e gli stili
4. Aggiungi gli script npm in `package.json`:
   ```json
   "build:nuovo-brand": "...",
   "build:nuovo-brand:expanded": "...",
   "build:nuovo-brand:minified": "..."
   ```
5. Aggiorna `build:all` per includere il nuovo brand

## 📝 Best Practices

1. **Non modificare Bootstrap direttamente** - Usa sempre le variabili
2. **Mantieni i file `_common/`** - Condividi codice tra brand
3. **Usa i mixin comuni** - Evita duplicazione del codice
4. **Test su tutti i brand** - Quando modifichi `_common/`
5. **Commit separati** - Per modifiche specifiche di un brand

## 🐛 Troubleshooting

### Build fallisce
```bash
npm run clean
npm install
npm run build
```

### Font non si caricano
Verifica il percorso in `_common/_fonts.scss` e controlla la console browser

### Modifiche non visibili
1. Ricompila: `npm run build:{brand}`
2. Svuota cache browser (Ctrl+Shift+R)
3. Verifica di usare il CSS corretto

## 📄 Licenza

MIT
