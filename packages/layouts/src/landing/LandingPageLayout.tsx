import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

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
  primaryCta?: { label: React.ReactNode; href?: string; onClick?: () => void };
  /** Secondary call-to-action button. */
  secondaryCta?: { label: React.ReactNode; href?: string; onClick?: () => void };
};

/**
 * Opinionated landing page skeleton.
 *
 * - Uses MUI AppBar + hero section
 * - Keeps styling minimal so it follows the active MUI theme
 */
export function LandingPageLayout({
  brand = 'FAST',
  appBarRight,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  children,
  footer,
}: LandingPageLayoutProps) {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <AppBar position="sticky" elevation={0} color="default">
        <Toolbar>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {brand}
          </Typography>
          <Box flex={1} />
          {appBarRight}
        </Toolbar>
      </AppBar>

      <Box
        component="section"
        sx={{
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
          bgcolor: 'background.paper',
        }}
      >
        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
          <Stack spacing={3} alignItems={{ xs: 'flex-start', md: 'flex-start' }}>
            <Typography variant="h2" sx={{ fontWeight: 800, lineHeight: 1.05 }}>
              {title}
            </Typography>

            {subtitle ? (
              <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 760 }}>
                {subtitle}
              </Typography>
            ) : null}

            {(primaryCta || secondaryCta) && (
              <Stack direction="row" spacing={2} flexWrap="wrap">
                {primaryCta ? (
                  <Button
                    variant="contained"
                    size="large"
                    href={primaryCta.href}
                    onClick={primaryCta.onClick}
                  >
                    {primaryCta.label}
                  </Button>
                ) : null}
                {secondaryCta ? (
                  <Button
                    variant="outlined"
                    size="large"
                    href={secondaryCta.href}
                    onClick={secondaryCta.onClick}
                  >
                    {secondaryCta.label}
                  </Button>
                ) : null}
              </Stack>
            )}
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6, flex: 1 }}>
        {children}
      </Container>

      <Box
        component="footer"
        sx={{
          borderTop: (t) => `1px solid ${t.palette.divider}`,
          py: 3,
          bgcolor: 'background.paper',
        }}
      >
        <Container maxWidth="lg">
          {footer ?? (
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} FAST-Computing
            </Typography>
          )}
        </Container>
      </Box>
    </Box>
  );
}
