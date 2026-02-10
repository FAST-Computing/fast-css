import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
/**
 * Opinionated landing page skeleton.
 *
 * - Uses MUI AppBar + hero section
 * - Keeps styling minimal so it follows the active MUI theme
 */
export function LandingPageLayout({ brand = 'FAST', appBarRight, title, subtitle, primaryCta, secondaryCta, children, footer, }) {
    return (_jsxs(Box, { minHeight: "100vh", display: "flex", flexDirection: "column", children: [_jsx(AppBar, { position: "sticky", elevation: 0, color: "default", children: _jsxs(Toolbar, { children: [_jsx(Typography, { variant: "h6", sx: { fontWeight: 700 }, children: brand }), _jsx(Box, { flex: 1 }), appBarRight] }) }), _jsx(Box, { component: "section", sx: {
                    borderBottom: (t) => `1px solid ${t.palette.divider}`,
                    bgcolor: 'background.paper',
                }, children: _jsx(Container, { maxWidth: "lg", sx: { py: { xs: 8, md: 12 } }, children: _jsxs(Stack, { spacing: 3, alignItems: { xs: 'flex-start', md: 'flex-start' }, children: [_jsx(Typography, { variant: "h2", sx: { fontWeight: 800, lineHeight: 1.05 }, children: title }), subtitle ? (_jsx(Typography, { variant: "h6", color: "text.secondary", sx: { maxWidth: 760 }, children: subtitle })) : null, (primaryCta || secondaryCta) && (_jsxs(Stack, { direction: "row", spacing: 2, flexWrap: "wrap", children: [primaryCta ? (_jsx(Button, { variant: "contained", size: "large", href: primaryCta.href, onClick: primaryCta.onClick, children: primaryCta.label })) : null, secondaryCta ? (_jsx(Button, { variant: "outlined", size: "large", href: secondaryCta.href, onClick: secondaryCta.onClick, children: secondaryCta.label })) : null] }))] }) }) }), _jsx(Container, { maxWidth: "lg", sx: { py: 6, flex: 1 }, children: children }), _jsx(Box, { component: "footer", sx: {
                    borderTop: (t) => `1px solid ${t.palette.divider}`,
                    py: 3,
                    bgcolor: 'background.paper',
                }, children: _jsx(Container, { maxWidth: "lg", children: footer ?? (_jsxs(Typography, { variant: "body2", color: "text.secondary", children: ["\u00A9 ", new Date().getFullYear(), " FAST-Computing"] })) }) })] }));
}
//# sourceMappingURL=LandingPageLayout.js.map