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

export type DashboardNavItem = {
  key: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
};

export type DashboardLayoutProps = {
  title?: React.ReactNode;
  navItems: DashboardNavItem[];
  selectedKey?: string;
  onSelect?: (key: string) => void;

  /** Optional content on the right side of the top AppBar. */
  appBarRight?: React.ReactNode;

  /** Main page content. */
  children?: React.ReactNode;

  /** Drawer width on desktop. */
  drawerWidth?: number;
};

/**
 * Dashboard shell with:
 * - top AppBar
 * - responsive left navigation (Drawer)
 * - main content area
 */
export function DashboardLayout({
  title = 'Dashboard',
  navItems,
  selectedKey,
  onSelect,
  appBarRight,
  children,
  drawerWidth = 280,
}: DashboardLayoutProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ px: 2, py: 2 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          {title}
        </Typography>
      </Box>
      <Divider />
      <List sx={{ px: 1, py: 1 }}>
        {navItems.map((item) => (
          <ListItemButton
            key={item.key}
            selected={selectedKey === item.key}
            onClick={() => {
              item.onClick?.();
              onSelect?.(item.key);
              setMobileOpen(false);
            }}
            component={item.href ? 'a' : 'button'}
            href={item.href}
            sx={{ borderRadius: 1 }}
          >
            {item.icon ? <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon> : null}
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
      <Box flex={1} />
      <Box sx={{ px: 2, py: 2 }}>
        <Typography variant="caption" color="text.secondary">
          Powered by @fast
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <AppBar
        position="fixed"
        color="default"
        elevation={0}
        sx={{ borderBottom: (t) => `1px solid ${t.palette.divider}` }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setMobileOpen((v) => !v)}
            sx={{ display: { md: 'none' }, mr: 1 }}
            aria-label="Open navigation"
          >
            <Box component="span" aria-hidden sx={{ fontSize: 20, lineHeight: 1 }}>
              ☰
            </Box>
          </IconButton>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {title}
          </Typography>
          <Box flex={1} />
          {appBarRight}
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="Dashboard navigation"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          open
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <Toolbar />
          {drawer}
        </Drawer>
      </Box>

      <Box component="main" sx={{ flexGrow: 1, width: { md: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />
        <Container maxWidth="xl" sx={{ py: 3 }}>
          {children}
        </Container>
      </Box>
    </Box>
  );
}
