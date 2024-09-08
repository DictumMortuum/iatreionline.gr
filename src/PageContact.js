// import Card from './components/Card';
// import Grid from '@mui/material/Grid';
import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const BasicSelect = ({ choice, setChoice }) => {
  const handleChange = (event) => {
    setChoice(event.target.value);
  };

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Ιατρείο</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={choice}
          label="Ιατρείο"
          onChange={handleChange}
        >
          <MenuItem value={1}>Παιδιατρικό</MenuItem>
          <MenuItem value={2}>Αλλεργιολογικό</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

const contactPaidiatrics = choice => {
  if (choice === 1) {
    return "84a4dbaa-4892-46a4-8c2c-c50835223794"
  } else {
    return ""
  }
}

const Main = () => {
  const [choice, setChoice] = React.useState(1);

  return (
    <main id="main">
      <div class="container">
        <div class="row section featured topspace">
          <h2 class="section-title"><span>Χαρτης</span></h2>
          <article class="post">
            <div class="row section featured topspace" style={{
              "overflow": "hidden",
              "height": 500,
            }}>
              <div id="embed-ded-map-canvas" style={{ height: "100%", width: "100%", "maxWidth": "100%" }}>
                <iframe
                  title="asdf"
                  style={{
                    height: "100%",
                    "width": "100%",
                    "border": 0
                  }}
                  frameborder="0"
                  src="https://www.google.com/maps/embed/v1/place?q=ΠΑΙΔΙΑΤΡΟΣ/ΑΛΕΞΑΝΔΡΟΣ+ΣΑΚΕΛΛΑΡΙΟΥ,+Vasileos+Alexandrou,+Peristeri,+Greece&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                />
              </div>
            </div>
          </article>
        </div>

        <div class="row section featured topspace">
          <h2 class="section-title"><span>Επικοινωνια</span></h2>
          <article class="post">
            <Box
              component="form"
              noValidate
              autoComplete="off"
              action="https://api.web3forms.com/submit"
              method="POST"
            >
              <Grid container spacing={1}>
                <Grid item md={4} xs={12}>
                  <TextField label="Ονοματεπώνυμο" name="fullname" variant="outlined" fullWidth />
                </Grid>
                <Grid item md={4} xs={12}>
                  <TextField label="Email" variant="outlined" name="email" fullWidth />
                </Grid>
                <Grid item md={4} xs={12}>
                  <BasicSelect choice={choice} setChoice={setChoice} />
                </Grid>
                <Grid item md={12} xs={12}>
                  <TextField label="Μήνυμα" variant="outlined" name="message" fullWidth multiline minRows={3} />
                </Grid>
                <Grid item md={12} xs={12}>
                  <Button type="submit" variant="contained">Αποστολή</Button>
                </Grid>
              </Grid>
              <input type="hidden" name="access_key" value={contactPaidiatrics(choice)} />
              <input type="checkbox" name="botcheck" class="hidden" />
            </Box>
          </article>
        </div>
      </div>
    </main>
  );
}

export default Main;
