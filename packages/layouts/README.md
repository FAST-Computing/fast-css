# @fast/layouts

Example page layouts built on top of MUI.

## Install

This package expects MUI + React in the consuming app.

## Usage

### Landing page

```tsx
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { brandTokens } from '@fast/tokens';
import { createThemeFromTokens } from '@fast/mui-theme';
import { LandingPageLayout } from '@fast/layouts';

// Optional (for non-MUI CSS variables + brand overrides)
import '@fast/assets/styles.css';
import '@fast/assets/css/corporate.css';

const theme = createThemeFromTokens('corporate');

export function Page() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LandingPageLayout
        title="FAST"
        subtitle="Design tokens + MUI theme, packaged."
        primaryCta={{ label: 'Get started', href: '#' }}
        secondaryCta={{ label: 'Docs', href: '#' }}
      >
        {/* Your marketing sections */}
        <div>Content…</div>
      </LandingPageLayout>
    </ThemeProvider>
  );
}
```

### Dashboard

```tsx
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { createThemeFromTokens } from '@fast/mui-theme';
import { DashboardLayout } from '@fast/layouts';

const theme = createThemeFromTokens('argos');

export function Page() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DashboardLayout
        title="Argos"
        navItems={[
          { key: 'home', label: 'Home' },
          { key: 'reports', label: 'Reports' },
          { key: 'settings', label: 'Settings' },
        ]}
        selectedKey="home"
      >
        <div>Dashboard content…</div>
      </DashboardLayout>
    </ThemeProvider>
  );
}
```
