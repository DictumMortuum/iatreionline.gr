import Recent from './components/Recent';
import { Grid } from '@mui/material';

const Main = () => {
  return (
    <main id="main">
      <div class="container">
        <div class="row section topspace">
          <h2 class="section-title"><span>αλλεργιολογικο ιατρειο</span></h2>
        </div>

        <div class="row section recentworks topspace">
          <h2 class="section-title"><span>φωτογραφιες</span></h2>
          <Grid container>
            <Grid xs={4} sx={{ padding: 1 }}>
              <Recent img="assets/images/lowres/-6.jpg" />
            </Grid>
            <Grid xs={4} sx={{ padding: 1 }}>
              <Recent img="assets/images/lowres/-12.jpg" />
            </Grid>
            <Grid xs={4} sx={{ padding: 1 }}>
              <Recent img="assets/images/lowres/-4.jpg" />
            </Grid>
          </Grid>
        </div>

      </div>
    </main>
  );
}

export default Main;
