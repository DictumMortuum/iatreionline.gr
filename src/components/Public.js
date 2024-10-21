import Grid from '@mui/material/Grid';
import { New as LinkNew } from './News';

// const New = ({ desc, url, isLink }) => {
//   if (isLink) {
//     return (
//       <LinkNew desc={desc} url={url} />
//     )
//   }
//   return (
//     <a class="btn btn-primary btn-lg" style={{ fontSize: "1.1rem", padding: 40, width: "100%" }} href={url}>{desc}</a>
//   )
// }

const Main = ({ col, desc }) => {
  return (
    <div class="row section featured topspace">
    <h2 class="section-title"><span>{desc}</span></h2>
    <Grid container spacing={1}>
      {col.map((d, i) => (
        <Grid item xs={12} md={6} key={i}>
          <LinkNew desc={d.desc} url={d.url} link={d.isLink === true} />
        </Grid>
      ))}
    </Grid>
  </div>
  );
}

export default Main;
