import * as React from 'react';
import Button, { type ButtonProps } from '@mui/material/Button';

export type FastButtonProps = ButtonProps;

/**
 * Thin wrapper over MUI Button.
 * Useful to enforce consistent defaults and provide a stable API surface.
 */
export function FastButton(props: FastButtonProps) {
  return <Button {...props} />;
}
