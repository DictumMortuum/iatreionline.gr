import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

const Component = ({ name, col }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List component="nav">
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {col.map((d, i) => (
            <ListItemButton sx={{ pl: 4 }} component={Link} to={d.link}>
              <ListItemText primary={d.desc} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </List>
  );
}

export default Component;
