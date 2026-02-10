/**
 * Source of truth for brand values.
 * Keep it framework-agnostic: no MUI types, no CSS preprocessor assumptions.
 */
export const brandTokens = {
    corporate: {
        primary: '#FF6A00',
        primaryDark: '#333000',
        primaryLight: '#632986',
        secondary: '#6c757d',
        background: '#f8f9fa',
        backgroundPaper: '#ffffff',
        text: {
            primary: '#212529',
            secondary: '#6c757d',
        },
        fontFamily: '"Montserrat", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontFamilyMono: '"Fira Code", "Roboto Mono", monospace',
        borderRadius: 8,
        spacing: 8,
    },
    argos: {
        primary: '#FF00FF',
        primaryDark: '#1a252f',
        primaryLight: '#34495e',
        secondary: '#95a5a6',
        info: '#3498db',
        background: '#ecf0f1',
        backgroundPaper: '#ffffff',
        sidebarBg: '#2c3e50',
        sidebarText: '#ecf0f1',
        text: {
            primary: '#2c3e50',
            secondary: '#7f8c8d',
        },
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontFamilyMono: '"Roboto Mono", monospace',
        borderRadius: 6,
        spacing: 8,
    },
    atlas: {
        primary: '#6f42c1',
        primaryDark: '#5a2d9f',
        primaryLight: '#8b5cf6',
        secondary: '#e83e8c',
        background: '#f8f9fa',
        backgroundPaper: '#ffffff',
        text: {
            primary: '#212529',
            secondary: '#6c757d',
        },
        gradientPrimary: 'linear-gradient(135deg, #6f42c1 0%, #8b5cf6 100%)',
        gradientHero: 'linear-gradient(135deg, #6f42c1 0%, #8b5cf6 100%)',
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontFamilyMono: '"Roboto Mono", monospace',
        borderRadius: 12,
        spacing: 8,
        shadowPrimary: '0 8px 24px rgba(111, 66, 193, 0.3)',
        shadowElevated: '0 10px 40px rgba(0, 0, 0, 0.1)',
    },
};
//# sourceMappingURL=tokens.js.map