import Snackbar from '@mui/material/Snackbar';
import { useState } from 'react';

export default function AutohideSnackbar(message: string) {
  const [open, setOpen] = useState(false);
  (() => {
    setOpen(true);
  })()
return (
  <div>
    <Snackbar
      open={open}
      autoHideDuration={5000}
      message={message}
    />
  </div>
);
}
