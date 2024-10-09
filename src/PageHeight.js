import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

const parse = v => {
  const tmp = parseFloat(v);

  if (isNaN(tmp)) {
    return 0
  } else {
    return tmp
  }
}

const Main = () => {
  const [father, setFather] = React.useState(185.0);
  const [mother, setMother] = React.useState(165.0);

  return (
    <main id="main">
      <div class="container">
        <div class="row section topspace">
          <h2 class="section-title"><span>υπολογισμος τελικου αναστηματος</span></h2>
        </div>

        <div class="row section featured topspace">
          <article class="post">
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Stack spacing={2}>
                  <TextField
                    label="Υψος πατέρα (cm)"
                    value={father}
                    onChange={(event) => {
                      setFather(parse(event.target.value));
                    }}
                  />
                  <TextField
                    label="Ύψος μητέρας (cm)"
                    value={mother}
                    onChange={(event) => {
                      setMother(parse(event.target.value));
                    }}
                  />
                  <TextField
                    label="Ύψος παιδιού"
                    disabled={true}
                    value={(father+mother)/2}
                  />
                </Stack>
              </Grid>
            </Grid>
          </article>
        </div>
      </div>
    </main>
  );
}

export default Main;
