export type BrandName = 'corporate' | 'argos' | 'atlas';
export type BrandTokens = {
    primary: string;
    primaryDark: string;
    primaryLight: string;
    secondary: string;
    background: string;
    backgroundPaper: string;
    text: {
        primary: string;
        secondary: string;
    };
    fontFamily: string;
    fontFamilyMono: string;
    borderRadius: number;
    spacing: number;
    info?: string;
    sidebarBg?: string;
    sidebarText?: string;
    gradientPrimary?: string;
    gradientHero?: string;
    shadowPrimary?: string;
    shadowElevated?: string;
};
/**
 * Source of truth for brand values.
 * Keep it framework-agnostic: no MUI types, no CSS preprocessor assumptions.
 */
export declare const brandTokens: Record<BrandName, BrandTokens>;
//# sourceMappingURL=tokens.d.ts.map