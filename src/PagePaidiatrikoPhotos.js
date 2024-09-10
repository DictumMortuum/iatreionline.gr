import Recent from './components/Recent';
import { Grid } from '@mui/material';

const Main = () => {
  return (
    <main id="main">
      <div class="container">
        <div class="row section topspace">
          <h2 class="section-title"><span>παιδιατρικο ιατρειο</span></h2>
        </div>

        <div class="row section recentworks topspace">
          <h2 class="section-title"><span>φωτογραφιες</span></h2>
          <Grid container>
            <Grid xs={2} sx={{ padding: 1 }}>
              <Recent img="assets/images/lowres/-1.jpg" />
            </Grid>
            <Grid xs={2} sx={{ padding: 1 }}>
              <Recent img="assets/images/lowres/-2.jpg" />
            </Grid>
            <Grid xs={2} sx={{ padding: 1 }}>
              <Recent img="assets/images/lowres/-3.jpg" />
            </Grid>
            <Grid xs={2} sx={{ padding: 1 }}>
              <Recent img="assets/images/lowres/image4.jpeg" />
            </Grid>
            <Grid xs={2} sx={{ padding: 1 }}>
              <Recent img="assets/images/lowres/image5.jpeg" />
            </Grid>
            <Grid xs={2} sx={{ padding: 1 }}>
              <Recent img="assets/images/lowres/image6.jpeg" />
            </Grid>
          </Grid>
        </div>
      </div>
    </main>
  );
}

export default Main;
