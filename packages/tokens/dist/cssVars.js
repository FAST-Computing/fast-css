import { brandTokens } from './tokens.js';
/**
 * Returns a CSS string with variables for the given brand.
 * Default selector is `:root[data-theme="<brand>"]` so multiple themes can coexist.
 */
export function generateCssVariables(brand, options = {}) {
    const tokens = brandTokens[brand];
    const selector = options.selector ?? `:root[data-theme="${brand}"]`;
    return `
${selector} {
  --brand-primary: ${tokens.primary};
  --brand-primary-dark: ${tokens.primaryDark};
  --brand-primary-light: ${tokens.primaryLight};
  --brand-secondary: ${tokens.secondary};
  --brand-background: ${tokens.background};
  --brand-background-paper: ${tokens.backgroundPaper};
  --brand-text-primary: ${tokens.text.primary};
  --brand-text-secondary: ${tokens.text.secondary};

  --brand-font-family: ${tokens.fontFamily};
  --brand-font-family-mono: ${tokens.fontFamilyMono};

  --brand-border-radius: ${tokens.borderRadius}px;
  --brand-spacing: ${tokens.spacing}px;

  ${brand === 'argos' ? `--argos-sidebar-bg: ${tokens.sidebarBg};\n  --argos-sidebar-text: ${tokens.sidebarText};\n  --brand-info: ${tokens.info};` : ''}
  ${brand === 'atlas' ? `--atlas-gradient-primary: ${tokens.gradientPrimary};\n  --atlas-gradient-hero: ${tokens.gradientHero};\n  --atlas-shadow-primary: ${tokens.shadowPrimary};\n  --atlas-shadow-elevated: ${tokens.shadowElevated};` : ''}
}
`.trim();
}
export function generateAllCssVariables() {
    return ['corporate', 'argos', 'atlas']
        .map((b) => generateCssVariables(b))
        .join('\n\n');
}
//# sourceMappingURL=cssVars.js.map