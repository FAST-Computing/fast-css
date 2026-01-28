# Font Directory

Questa cartella contiene i font custom self-hosted.

## Come aggiungere font custom

### 1. Scarica i tuoi font
Puoi ottenere font da:
- Font aziendali forniti dal team design
- [Google Fonts](https://fonts.google.com) - scarica e converti
- [Font Squirrel](https://www.fontsquirrel.com)
- Altri fornitori di font con licenza appropriata

### 2. Formati consigliati
- **WOFF2** (Web Open Font Format 2) - formato moderno, migliore compressione
- **WOFF** (Web Open Font Format) - fallback per browser meno recenti
- ~~TTF/OTF~~ - evita se possibile, file più pesanti

### 3. Converti i font (se necessario)
Se hai solo file .ttf o .otf, convertili in WOFF2/WOFF:
- [Font Squirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator)
- [CloudConvert](https://cloudconvert.com/ttf-to-woff2)

### 4. Organizzazione suggerita
```
src/fonts/
├── BrandFont-Regular.woff2
├── BrandFont-Regular.woff
├── BrandFont-Bold.woff2
├── BrandFont-Bold.woff
├── BrandFont-Italic.woff2
├── BrandFont-Italic.woff
└── README.md (questo file)
```

### 5. Esempio di file necessari per font completo
Per ogni font, dovresti avere almeno:
- Regular (peso 400)
- Bold (peso 700)
- Italic (opzionale)
- Bold Italic (opzionale)

### 6. Licenze
⚠️ **IMPORTANTE**: Assicurati di avere i diritti per usare i font sul web.
Alcuni font richiedono licenze commerciali per uso web.

## Esempio: Scaricare da Google Fonts

1. Vai su https://fonts.google.com
2. Seleziona un font (es. "Inter")
3. Clicca "Download family"
4. Converti i file .ttf in .woff2 usando Font Squirrel
5. Metti i file qui
6. Aggiorna `src/scss/_fonts.scss` con i @font-face
7. Aggiorna `src/scss/_variables.scss` per usare il font

## Peso dei font (font-weight)
- 100: Thin
- 200: Extra Light
- 300: Light
- 400: Regular / Normal
- 500: Medium
- 600: Semi Bold
- 700: Bold
- 800: Extra Bold
- 900: Black
