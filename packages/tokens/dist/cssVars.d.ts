import type { BrandName } from './tokens.js';
export type CssVarsOptions = {
    selector?: string;
};
/**
 * Returns a CSS string with variables for the given brand.
 * Default selector is `:root[data-theme="<brand>"]` so multiple themes can coexist.
 */
export declare function generateCssVariables(brand: BrandName, options?: CssVarsOptions): string;
export declare function generateAllCssVariables(): string;
//# sourceMappingURL=cssVars.d.ts.map