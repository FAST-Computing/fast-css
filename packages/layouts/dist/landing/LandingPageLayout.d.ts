import * as React from 'react';
export type LandingPageLayoutProps = {
    /** Top-left brand label (defaults to "FAST"). */
    brand?: React.ReactNode;
    /** Optional right-side content in the AppBar (e.g. login button, theme switcher). */
    appBarRight?: React.ReactNode;
    /** Main page content below the hero section. */
    children?: React.ReactNode;
    /** Optional footer content. */
    footer?: React.ReactNode;
    /** Hero title. */
    title: React.ReactNode;
    /** Hero subtitle / description. */
    subtitle?: React.ReactNode;
    /** Primary call-to-action button. */
    primaryCta?: {
        label: React.ReactNode;
        href?: string;
        onClick?: () => void;
    };
    /** Secondary call-to-action button. */
    secondaryCta?: {
        label: React.ReactNode;
        href?: string;
        onClick?: () => void;
    };
};
/**
 * Opinionated landing page skeleton.
 *
 * - Uses MUI AppBar + hero section
 * - Keeps styling minimal so it follows the active MUI theme
 */
export declare function LandingPageLayout({ brand, appBarRight, title, subtitle, primaryCta, secondaryCta, children, footer, }: LandingPageLayoutProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=LandingPageLayout.d.ts.map