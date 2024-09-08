import Grid from '@mui/material/Grid';

const New = ({ desc, url }) => {
  return (
    <a class="btn btn-primary btn-lg" style={{ fontSize: "1.1rem", padding: 40, width: "100%" }} href={url}>{desc}</a>
  )
}

const Main = () => {
  return (
    <div class="row section featured topspace">
    <h2 class="section-title"><span>τελευταια νεα</span></h2>
    <Grid container spacing={1}>
      <Grid item xs={12} md={6}>
        <New desc="οδηγιες για ασφαλεις διακοπες" url="assets/pdf/ΟΔΗΓΙΕΣ ΓΙΑ ΑΣΦΑΛΕΙΣ ΔΙΑΚΟΠΕΣ.pages" />
      </Grid>
    </Grid>
  </div>
  );
}

export default Main;
