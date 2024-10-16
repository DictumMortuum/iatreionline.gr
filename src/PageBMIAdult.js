import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Card, Button, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

var lbl_height = "Ύψος";
var lbl_not_valid = "μη έγκυρη τιμή";
var lbl_small = "Λιποβαρές";
var lbl_normal = "Φυσιολογικό";
var lbl_large = "Υπέρβαρο";
var lbl_extra_large = "Παχυσαρκία";

function calc({ height, weight }) {
  var bmr = '';
  var bmr_status = '';
  var bmr_class = '';

  if(isNaN(height) || height<=0) {
    return {
      desc: lbl_height+': '+lbl_not_valid
    }
  } else if(isNaN(weight) || weight<=0) {
    return {
      desc: lbl_height+': '+lbl_not_valid
    }
  }else{
    if(0<height && height<2) {
      height = height * 100;
    }

    height = height/100;
    height = height*height;
    bmr = roundNumber(weight/height, 2);

    // var lbl_height = "Ύψος";
    // var lbl_not_valid = "μη έγκυρη τιμή";
    // var lbl_small = "Λιποβαρές";
    // var lbl_normal = "Φυσιολογικό";
    // var lbl_large = "Υπέρβαρο";
    // var lbl_extra_large = "Παχυσαρκία";

    if(bmr < 18.5){
      bmr_status = lbl_small;
      bmr_class = 'bmr-small';
    }else if(bmr >= 30){
      bmr_status = lbl_extra_large;
      bmr_class = 'bmr-extra-large';
    }else if(bmr >= 25){
      bmr_status = lbl_large;
      bmr_class = 'bmr-large';
    }else{
      bmr_status = lbl_normal;
      bmr_class = '';
    }

    return {
      desc: bmr_status,
      bmr_status,
      bmr_class,
    }
  }
}

function roundNumber(num, dec) {
  var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
  return result;
}

const parse = v => {
  const tmp = parseFloat(v);

  if (isNaN(tmp)) {
    return 0
  } else {
    return tmp
  }
}

const Main = () => {
  const [height, setHeight] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const [result, setResult] = React.useState(false);
  const [bmi, setBMI] = React.useState(null);

  return (
    <main id="main">
      <div class="container">
        <div class="row section topspace">
          <h2 class="section-title"><span>υπολογισμος δεικτη μαζας σωματος (BMI) ενηλικα</span></h2>
        </div>

        <div class="row section featured topspace">
          <article class="post">
            <Grid container spacing={1} direction="row" alignItems="center" justifyContent="center" sx={{ margin: "auto", maxWidth: 500 }}>
              {!result && <Grid item xs={12}>
                <Grid container spacing={1} component={Card} pl={0} pr={1} pt={1} pb={1}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Υψος (cm)"
                      value={height}
                      onChange={(event) => {
                        setHeight(parse(event.target.value));
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Βάρος (kg)"
                      value={weight}
                      onChange={(event) => {
                        setWeight(parse(event.target.value));
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <CardActions>
                      <Button
                        variant="contained"
                        onClick={(event) => {
                          setBMI(calc({ height, weight }));
                          setResult(true);
                        }}
                      >
                        υπολογισμος
                      </Button>
                      <Button
                        to="/apps/bmi"
                        component={Link}
                      >
                        ΒΜΙ παιδιων
                      </Button>
                    </CardActions>
                  </Grid>
                </Grid>
              </Grid>}
              {result && <Grid item xs={12}>
                <Grid container spacing={1} component={Card} pl={0} pr={1} pt={1} pb={1}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="ΒΜΙ"
                      disabled={true}
                      value={bmi.desc}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      onClick={(event) => {
                        setResult(false);
                      }}
                    >
                      πισω στον υπολογισμο
                    </Button>
                  </Grid>
                </Grid>
              </Grid> }
            </Grid>
          </article>
        </div>
      </div>
    </main>
  );
}

export default Main;
