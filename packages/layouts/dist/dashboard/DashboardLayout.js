import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
/**
 * Dashboard shell with:
 * - top AppBar
 * - responsive left navigation (Drawer)
 * - main content area
 */
export function DashboardLayout({ title = 'Dashboard', navItems, selectedKey, onSelect, appBarRight, children, drawerWidth = 280, }) {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const drawer = (_jsxs(Box, { sx: { height: '100%', display: 'flex', flexDirection: 'column' }, children: [_jsx(Box, { sx: { px: 2, py: 2 }, children: _jsx(Typography, { variant: "subtitle1", sx: { fontWeight: 700 }, children: title }) }), _jsx(Divider, {}), _jsx(List, { sx: { px: 1, py: 1 }, children: navItems.map((item) => (_jsxs(ListItemButton, { selected: selectedKey === item.key, onClick: () => {
                        item.onClick?.();
                        onSelect?.(item.key);
                        setMobileOpen(false);
                    }, component: item.href ? 'a' : 'button', href: item.href, sx: { borderRadius: 1 }, children: [item.icon ? _jsx(ListItemIcon, { sx: { minWidth: 40 }, children: item.icon }) : null, _jsx(ListItemText, { primary: item.label })] }, item.key))) }), _jsx(Box, { flex: 1 }), _jsx(Box, { sx: { px: 2, py: 2 }, children: _jsx(Typography, { variant: "caption", color: "text.secondary", children: "Powered by @fast" }) })] }));
    return (_jsxs(Box, { sx: { display: 'flex', minHeight: '100vh' }, children: [_jsx(AppBar, { position: "fixed", color: "default", elevation: 0, sx: { borderBottom: (t) => `1px solid ${t.palette.divider}` }, children: _jsxs(Toolbar, { children: [_jsx(IconButton, { color: "inherit", edge: "start", onClick: () => setMobileOpen((v) => !v), sx: { display: { md: 'none' }, mr: 1 }, "aria-label": "Open navigation", children: _jsx(Box, { component: "span", "aria-hidden": true, sx: { fontSize: 20, lineHeight: 1 }, children: "\u2630" }) }), _jsx(Typography, { variant: "h6", sx: { fontWeight: 700 }, children: title }), _jsx(Box, { flex: 1 }), appBarRight] }) }), _jsxs(Box, { component: "nav", sx: { width: { md: drawerWidth }, flexShrink: { md: 0 } }, "aria-label": "Dashboard navigation", children: [_jsx(Drawer, { variant: "temporary", open: mobileOpen, onClose: () => setMobileOpen(false), ModalProps: { keepMounted: true }, sx: {
                            display: { xs: 'block', md: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }, children: drawer }), _jsxs(Drawer, { variant: "permanent", open: true, sx: {
                            display: { xs: 'none', md: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }, children: [_jsx(Toolbar, {}), drawer] })] }), _jsxs(Box, { component: "main", sx: { flexGrow: 1, width: { md: `calc(100% - ${drawerWidth}px)` } }, children: [_jsx(Toolbar, {}), _jsx(Container, { maxWidth: "xl", sx: { py: 3 }, children: children })] })] }));
}
//# sourceMappingURL=DashboardLayout.js.map