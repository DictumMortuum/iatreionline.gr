import Grid from '@mui/material/Grid';

const New = ({ desc, url }) => {
  return (
    <a class="btn-primary" style={{ width: "100%" }} href={url}>
        <pre class="btn-primary btn-lg" style={{
          border: 0,
          textAlign: "center",
          fontSize: "1.1rem",
          padding: 40,
          width: "100%",
          textTransform: "uppercase",
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
          textShadow: "0 1px 0px #780d33",
          wordBreak: "normal",
          borderRadius: 0,
          verticalAlign: "middle",
        }}>
          {desc}
        </pre>
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
      <Grid item xs={12} md={6}>
        <New desc="επιδημιολογικά δεδομένα για τις ιογενείς λοιμώξεις του αναπνευστικού συστήματος" url="assets/pdf/report_wnv_gr_20240904.pdf" />
      </Grid>
      <Grid item xs={12} md={6}>
        <New desc="Εβδομαδιαία Έκθεση Επιδημιολογικής Επιτήρησης της λοίμωξης από τον ιό του Δυτικού Νείλου" url="assets/pdf/ekthesi-epitirisis-anapneustikon-ion-2024-35.pdf" />
      </Grid>
    </Grid>
  </div>
  );
}

export default Main;
