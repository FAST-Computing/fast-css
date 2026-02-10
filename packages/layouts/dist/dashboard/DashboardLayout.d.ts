import * as React from 'react';
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
export declare function DashboardLayout({ title, navItems, selectedKey, onSelect, appBarRight, children, drawerWidth, }: DashboardLayoutProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=DashboardLayout.d.ts.map