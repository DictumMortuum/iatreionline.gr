import Card from './components/Card';
import Grid from '@mui/material/Grid';

const Main = () => {
  return (
    <main id="main">
      <div class="container">
        <div class="row section featured topspace">
          <h2 class="section-title"><span>υπηρεσιες ψυχολογου</span></h2>
          <Grid container>
            <Grid xs={12} md={6}>
              <Card
                desc="Ψυχολογική υποστήριξη ιατρικών περιστατικών"
                img="https://placehold.co/400"
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Card
                desc="Ατοµικές συνεδρίες εφήβων και ενηλίκων"
                img="https://placehold.co/400"
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Card
                desc="Συµβουλευτική παιδιών - εφήβων"
                img="https://placehold.co/400"
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Card
                desc="Συµβουλευτική για θέµατα Υγείας"
                more="(1000 ημέρες, εισαγωγή στερεών)"
                img="https://placehold.co/400"
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Card
                desc="Συµβουλευτική διαχείρισης άγχους & στρες"
                img="https://placehold.co/400"
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Card
                desc="Συµβουλευτική διαχείρισης κατάθλιψης"
                img="https://placehold.co/400"
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </main>
  );
}

export default Main;
