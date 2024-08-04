// import Card from './components/Card';
// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

const Main = () => {
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
                <Grid item md={6} xs={12}>
                  <TextField label="Ονοματεπώνυμο" name="fullname" variant="outlined" fullWidth />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField label="Email" variant="outlined" name="email" fullWidth />
                </Grid>
                <Grid item md={12} xs={12}>
                  <TextField label="Μήνυμα" variant="outlined" name="message" fullWidth multiline minRows={3} />
                </Grid>
                <Grid item md={12} xs={12}>
                  <Button type="submit" variant="contained">Αποστολή</Button>
                </Grid>
              </Grid>
              <input type="hidden" name="access_key" value="9295bf8c-b57b-4b7d-84f5-d48f133ad61d" />
              <input type="checkbox" name="botcheck" class="hidden"  />
            </Box>
          </article>
        </div>

      </div>
    </main>
  );
}

export default Main;
