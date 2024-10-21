import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import DrawerList from './DrawerList';
import { Link } from "react-router-dom";

const Drawer = ({ setState, state, components }) => {
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState(open);
  };

  return (
    <SwipeableDrawer
      open={state}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      <Box
        role="presentation"
        // onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
        sx={{ width: 256 }}
      >
        <List>
          <ListItemButton component={Link} to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
          {components.map((d, i) => (
            <DrawerList key={i} name={d.name} col={d.col} />
          ))}
          <ListItemButton component={Link} to="/contact">
            <ListItemIcon>
              <ContactPageIcon />
            </ListItemIcon>
            <ListItemText primary="Επικοινωνια" />
          </ListItemButton>
        </List>
      </Box>
    </SwipeableDrawer>
  );
}

export default Drawer;
