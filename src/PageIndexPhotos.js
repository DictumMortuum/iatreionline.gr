import Recent from './components/Recent';
import { Grid } from '@mui/material';
// import ImageList from '@mui/material/ImageList';

const Main = () => {
  return (
    <main id="main">
      <div class="container">
        <div class="row section recentworks topspace">
          <h2 class="section-title"><span>Φωτογραφιες</span></h2>

          {/* <ImageList cols={3} rowHeight={230}>
            <Recent img="assets/images/lowres/-7.jpg" />
            <Recent img="assets/images/lowres/-8.jpg" />
            <Recent img="assets/images/lowres/-10.jpg" />
            <Recent img="assets/images/lowres/-14.jpg" />
            <Recent img="assets/images/lowres/-16.jpg" />
            <Recent img="assets/images/lowres/-17.jpg" />
          </ImageList> */}

           <Grid container>
            <Grid xs={2} sx={{ padding: 1 }}>
              <Recent img="assets/images/lowres/-7.jpg" />
            </Grid>
            <Grid xs={2} sx={{ padding: 1 }}>
              <Recent img="assets/images/lowres/-8.jpg" />
            </Grid>
            <Grid xs={2} sx={{ padding: 1 }}>
              <Recent img="assets/images/lowres/-10.jpg" />
            </Grid>
            <Grid xs={2} sx={{ padding: 1 }}>
              <Recent img="assets/images/lowres/-14.jpg" />
            </Grid>
            <Grid xs={2} sx={{ padding: 1 }}>
              <Recent img="assets/images/lowres/-16.jpg" />
            </Grid>
            <Grid xs={2} sx={{ padding: 1 }}>
              <Recent img="assets/images/lowres/-17.jpg" />
            </Grid>
          </Grid>
        </div>
      </div>
    </main>
  );
}

export default Main;
