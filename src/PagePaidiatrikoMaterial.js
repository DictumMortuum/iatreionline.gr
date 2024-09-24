// import Accordion from '@mui/material/Accordion';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import { Avatar, CardHeader } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { New } from './components/News';
import { Grid } from '@mui/material';

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

const Main = () => {
  return (
    <main id="main">
      <div class="container">
        <div class="row section topspace">
          <h2 class="section-title"><span>παιδιατρικο ιατρειο</span></h2>
        </div>

        <div class="row section featured topspace">
          <h2 class="section-title"><span>ενημερωτικο υλικο</span></h2>

          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <New desc="οδηγιες για τις πρώτες ημέρες" url="assets/pdf/firstdays.pdf" />
            </Grid>
            <Grid item xs={12} md={6}>
              <New desc="1η εβδομαδα" url="assets/pdf/week1.pdf" />
            </Grid>
            <Grid item xs={12} md={6}>
              <New desc="2η εβδομαδα" url="assets/pdf/week2.pdf" />
            </Grid>
            <Grid item xs={12} md={6}>
              <New desc="3η εβδομαδα" url="assets/pdf/week3.pdf" />
            </Grid>
            <Grid item xs={12} md={6}>
              <New desc="4η εβδομαδα" url="assets/pdf/week4.pdf" />
            </Grid>
            <Grid item xs={12} md={6}>
              <New desc="εποχικη γριπη" url="assets/pdf/gripi.pdf" />
            </Grid>
            <Grid item xs={12} md={6}>
              <New desc="οδηγος για την πρωτη σχολικη χρονια" url="assets/pdf/schoolyear.pdf" />
            </Grid>
            <Grid item xs={12} md={6}>
              <New desc="πως να μαθετε να καταπινετε" url="assets/pdf/swallow.png" />
            </Grid>
            <Grid item xs={12} md={6}>
              <New desc="5 κλειδια για πιο ασφαλεις παραδοσιακες αγορες τροφιμων" url="assets/pdf/ΚΛΕΙΔΙΑ.jpg" />
            </Grid>
            <Grid item xs={12} md={6}>
              <New desc="οδηγός επιτυχιας για τις σχολικες εξετασεις" url="assets/pdf/success.pages" />
            </Grid>
          </Grid>

        </div>

        <div class="row section topspace">
          <YoutubeEmbed embedId="N4fcYPQQzwk" />
        </div>

        <div class="row section topspace">
          <YoutubeEmbed embedId="AmeGYKV-L5s" />
        </div>

        <div class="row section topspace">
          <YoutubeEmbed embedId="z5kVsWptIwQ" />
        </div>
      </div>
    </main>
  );
}

export default Main;
