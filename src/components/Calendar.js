import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import EventIcon from '@mui/icons-material/Event';
import { Grid } from '@mui/material';

const Component = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <p class="lead">Παιδιατρικό ιατρείο</p>
        <List subheader={<ListSubheader>Δευτέρα - Τετάρτη - Παρασκευή</ListSubheader>}>
          <ListItem>
            <ListItemIcon>
              <EventIcon />
            </ListItemIcon>
            <ListItemText primary="16:00 - 21:00" />
          </ListItem>
        </List>
        <List subheader={<ListSubheader>Τρίτη - Πέμπτη</ListSubheader>}>
          <ListItem>
            <ListItemIcon>
              <EventIcon />
            </ListItemIcon>
            <ListItemText primary="09:00 - 13:00" />
          </ListItem>
        </List>
      </Grid>

      <Grid item xs={12} md={6}>
        <p class="lead">Αλλεργιολογικό ιατρείο</p>
        <List subheader={<ListSubheader>Δευτέρα - Τετάρτη - Παρασκευή</ListSubheader>}>
          <ListItem>
            <ListItemIcon>
              <EventIcon />
            </ListItemIcon>
            <ListItemText primary="09:00 - 13:00" />
          </ListItem>
        </List>
        <List subheader={<ListSubheader>Τρίτη - Πέμπτη</ListSubheader>}>
          <ListItem>
            <ListItemIcon>
              <EventIcon />
            </ListItemIcon>
            <ListItemText primary="16:00 - 21:00" />
          </ListItem>
        </List>
      </Grid>

      <Grid item xs={12} md={6}>
        <p class="lead">Γραφείο διαιτολογίας παίδων - ενηλίκων</p>
        <List subheader={<ListSubheader>κάθε 3η Παρασκευή του μήνα</ListSubheader>}>
          <ListItem>
            <ListItemIcon>
              <EventIcon />
            </ListItemIcon>
            <ListItemText primary="09:00 - 13:00" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <EventIcon />
            </ListItemIcon>
            <ListItemText primary="17:00 - 21:00" />
          </ListItem>
        </List>
        <List subheader={<ListSubheader>σε άλλες ημέρες και ώρες κατόπιν συνεννοήσεως</ListSubheader>}>
        </List>
      </Grid>

      <Grid item xs={12} md={6}>
        <p class="lead">Γραφείο ψυχολογίας παίδων - ενηλίκων</p>
        <List subheader={<ListSubheader>κάθε 4η Παρασκευή του μήνα</ListSubheader>}>
          <ListItem>
            <ListItemIcon>
              <EventIcon />
            </ListItemIcon>
            <ListItemText primary="09:00 - 13:00" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <EventIcon />
            </ListItemIcon>
            <ListItemText primary="17:00 - 21:00" />
          </ListItem>
        </List>
        <List subheader={<ListSubheader>σε άλλες ημέρες και ώρες κατόπιν συνεννοήσεως</ListSubheader>}>
        </List>
      </Grid>
    </Grid>
  );
}

export default Component;
