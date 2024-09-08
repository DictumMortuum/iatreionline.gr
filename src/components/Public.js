import Grid from '@mui/material/Grid';

const New = ({ desc, url }) => {
  return (
    <a class="btn btn-primary btn-lg" style={{ fontSize: "1.1rem", padding: 40, width: "100%" }} href={url}>{desc}</a>
  )
}

const Main = ({ col, desc }) => {
  return (
    <div class="row section featured topspace">
    <h2 class="section-title"><span>{desc}</span></h2>
    <Grid container spacing={1}>
      {col.map((d, i) => (
        <Grid item xs={12} md={4} key={i}>
          <New desc={d.desc} url={d.url} />
        </Grid>
      ))}
    </Grid>
  </div>
  );
}

export default Main;
