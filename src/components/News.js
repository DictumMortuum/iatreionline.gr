import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';

const New = ({ desc, url }) => {
  return (
    <a class="btn btn-primary btn-lg" style={{ textAlign: "center", fontSize: "1.1rem", padding: 40, width: "100%" }} href={url}>
      <Box sx={{ display: "flex", alignContent: "center", justifyContent: "center" }}>
      {desc}
      </Box>
    </a>
  )
}

const Main = () => {
  return (
    <div class="row section featured topspace">
    <h2 class="section-title"><span>τελευταια νεα</span></h2>
    <Grid container spacing={1}>
      <Grid item xs={12} md={6}>
        <New desc="οδηγιες για ασφαλεις διακοπες" url="assets/pdf/ΟΔΗΓΙΕΣ ΓΙΑ ΑΣΦΑΛΕΙΣ ΔΙΑΚΟΠΕΣ.pdf" />
      </Grid>
      <Grid item xs={12} md={6}>
        <New desc="λογοι απαλλαγης απο τον εμβολιασμο κατα του COVID-19" url="assets/pdf/Λόγοι-απαλλαγής-από-τον-εμβολιασμό-κατά-του-κορωνοϊού-COVID.pdf" />
      </Grid>
    </Grid>
  </div>
  );
}

export default Main;
