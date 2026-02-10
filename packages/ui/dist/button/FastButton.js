import { jsx as _jsx } from "react/jsx-runtime";
import Button from '@mui/material/Button';
/**
 * Thin wrapper over MUI Button.
 * Useful to enforce consistent defaults and provide a stable API surface.
 */
export function FastButton(props) {
    return _jsx(Button, { ...props });
}
//# sourceMappingURL=FastButton.js.map