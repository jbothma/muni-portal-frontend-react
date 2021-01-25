import React from 'react';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({ open: false });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, open });
  };

  return (
      <div>
        <Button onClick={toggleDrawer(true)}>Menu</Button>
        <Drawer anchor={'left'} open={state.open} onClose={toggleDrawer(false)}>
            <div
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              {'menu item'}
          </div>
        </Drawer>
      </div>
  );
};
