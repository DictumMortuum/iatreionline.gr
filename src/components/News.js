import Grid from '@mui/material/Grid';

export const New = ({ desc, url }) => {
  return (
    <a  style={{ width: "100%" }} href={url}>
        <pre class="btn-lg" style={{
          // border: 0,
          textAlign: "center",
          fontSize: "1.1rem",
          padding: 40,
          width: "100%",
          textTransform: "uppercase",
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
          // textShadow: "0 1px 0px #780d33",
          wordBreak: "normal",
          borderRadius: 0,
          verticalAlign: "middle",
          border: "4px solid #30bec7ff",
          backgroundColor: "white",
        }}>
          {desc.normalize("NFD").replace(/\p{Diacritic}/gu, "")}
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
        <New desc="οδηγιες για ασφαλεις διακοπες - προγραμματισμoς ταξιδιου" url="assets/pdf/ΟΔΗΓΙΕΣ ΓΙΑ ΑΣΦΑΛΕΙΣ ΔΙΑΚΟΠΕΣ.pdf" />
      </Grid>
      <Grid item xs={12} md={6}>
        <New desc="λογοι απαλλαγης απο τον εμβολιασμο κατα του COVID-19" url="assets/pdf/Λόγοι-απαλλαγής-από-τον-εμβολιασμό-κατά-του-κορωνοϊού-COVID.pdf" />
      </Grid>
      <Grid item xs={12} md={6}>
        <New desc="επιδημιολογικα δεδομενα ιογενων λοιμωξεων αναπνευστικου" url="assets/pdf/ekthesi-epitirisis-anapneustikon-ion-2024-40.pdf" />
      </Grid>
      <Grid item xs={12} md={6}>
        <New desc="Εθνικό Πρόγραμμα Εμβολιασμών παιδιών και εφήβων 2024" url="assets/pdf/2024-1.pdf" />
      </Grid>
      <Grid item xs={12} md={6}>
        <New desc="Οδηγίες για την Εποχική Γρίπη 2024-2025 – Αντιγριπικός Εμβολιασμός" url="assets/pdf/ΨΩΣΑ465ΦΥΟ-ΟΕΨ.pdf" />
      </Grid>
    </Grid>
  </div>
  );
}

export default Main;
