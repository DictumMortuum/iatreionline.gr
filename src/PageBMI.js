import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Card, Button, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

var rt = {
  a20:{male: {},female: {}},
  a25:{male: {},female: {}},
  a30:{male: {},female: {}},
  a35:{male: {},female: {}},
  a40:{male: {},female: {}},
  a45:{male: {},female: {}},
  a50:{male: {},female: {}},
  a55:{male: {},female: {}},
  a60:{male: {},female: {}},
  a65:{male: {},female: {}},
  a70:{male: {},female: {}},
  a75:{male: {},female: {}},
  a80:{male: {},female: {}},
  a85:{male: {},female: {}},
  a90:{male: {},female: {}},
  a95:{male: {},female: {}},
  a100:{male: {},female: {}},
  a105:{male: {},female: {}},
  a110:{male: {},female: {}},
  a115:{male: {},female: {}},
  a120:{male: {},female: {}},
  a125:{male: {},female: {}},
  a130:{male: {},female: {}},
  a135:{male: {},female: {}},
  a140:{male: {},female: {}},
  a145:{male: {},female: {}},
  a150:{male: {},female: {}},
  a155:{male: {},female: {}},
  a160:{male: {},female: {}},
  a165:{male: {},female: {}},
  a170:{male: {},female: {}},
  a175:{male: {},female: {}},
  a180:{male: {},female: {}}
};

rt.a20.male.s = 15.14;
rt.a20.female.s = 14.83;
rt.a20.male.l = 18.41;
rt.a20.female.l = 18.02;
rt.a20.male.xl = 20.09;
rt.a20.female.xl = 19.81;

rt.a25.male.s = 14.92;
rt.a25.female.s = 14.63;
rt.a25.male.l = 18.13;
rt.a25.female.l = 17.76;
rt.a25.male.xl = 19.80;
rt.a25.female.xl = 19.55;

rt.a30.male.s = 14.74;
rt.a30.female.s = 14.47;
rt.a30.male.l = 17.89;
rt.a30.female.l = 17.56;
rt.a30.male.xl = 19.57;
rt.a30.female.xl = 19.36;

rt.a35.male.s = 14.57;
rt.a35.female.s = 14.32;
rt.a35.male.l = 17.69;
rt.a35.female.l = 17.40;
rt.a35.male.xl = 19.39;
rt.a35.female.xl = 19.23;

rt.a40.male.s = 14.43;
rt.a40.female.s = 14.19;
rt.a40.male.l = 17.55;
rt.a40.female.l = 17.28;
rt.a40.male.xl = 19.29;
rt.a40.female.xl = 19.15;

rt.a45.male.s = 14.31;
rt.a45.female.s = 14.06;
rt.a45.male.l = 17.47;
rt.a45.female.l = 17.19;
rt.a45.male.xl = 19.26;
rt.a45.female.xl = 19.12;

rt.a50.male.s = 14.21;
rt.a50.female.s = 13.94;
rt.a50.male.l = 17.42;
rt.a50.female.l = 17.15;
rt.a50.male.xl = 19.30;
rt.a50.female.xl = 19.17;

rt.a55.male.s = 14.13;
rt.a55.female.s = 13.86;
rt.a55.male.l = 17.45;
rt.a55.female.l = 17.20;
rt.a55.male.xl = 19.47;
rt.a55.female.xl = 19.34;

rt.a60.male.s = 14.07;
rt.a60.female.s = 13.82;
rt.a60.male.l = 17.55;
rt.a60.female.l = 17.34;
rt.a60.male.xl = 19.78;
rt.a60.female.xl = 19.65;

rt.a65.male.s = 14.04;
rt.a65.female.s = 13.82;
rt.a65.male.l = 17.71;
rt.a65.female.l = 17.53;
rt.a65.male.xl = 20.23;
rt.a65.female.xl = 20.08;

rt.a70.male.s = 14.04;
rt.a70.female.s = 13.86;
rt.a70.male.l = 17.72;
rt.a70.female.l = 17.75;
rt.a70.male.xl = 20.63;
rt.a70.female.xl = 20.51;

rt.a75.male.s = 14.08;
rt.a75.female.s = 13.93;
rt.a75.male.l = 18.16;
rt.a75.female.l = 18.03;
rt.a75.male.xl = 21.09;
rt.a75.female.xl = 21.01;

rt.a80.male.s = 14.15;
rt.a80.female.s = 14.02;
rt.a80.male.l = 18.44;
rt.a80.female.l = 18.35;
rt.a80.male.xl = 21.60;
rt.a80.female.xl = 21.57;

rt.a85.male.s = 14.24;
rt.a85.female.s = 14.14;
rt.a85.male.l = 18.76;
rt.a85.female.l = 18.69;
rt.a85.male.xl = 22.17;
rt.a85.female.xl = 22.18;

rt.a90.male.s = 14.35;
rt.a90.female.s = 14.28;
rt.a90.male.l = 19.10;
rt.a90.female.l = 19.07;
rt.a90.male.xl = 22.77;
rt.a90.female.xl = 22.81;

rt.a95.male.s = 14.49;
rt.a95.female.s = 14.43;
rt.a95.male.l = 19.46;
rt.a95.female.l = 19.45;
rt.a95.male.xl = 23.39;
rt.a95.female.xl = 23.46;

rt.a100.male.s = 14.64;
rt.a100.female.s = 14.61;
rt.a100.male.l = 19.84;
rt.a100.female.l = 19.86;
rt.a100.male.xl = 24.00;
rt.a100.female.xl = 24.11;

rt.a105.male.s = 14.80;
rt.a105.female.s = 14.81;
rt.a105.male.l = 20.20;
rt.a105.female.l = 20.29;
rt.a105.male.xl = 24.57;
rt.a105.female.xl = 24.77;

rt.a110.male.s = 14.97;
rt.a110.female.s = 15.05;
rt.a110.male.l = 20.55;
rt.a110.female.l = 20.74;
rt.a110.male.xl = 25.10;
rt.a110.female.xl = 25.42;

rt.a115.male.s = 15.16;
rt.a115.female.s = 15.32;
rt.a115.male.l = 20.89;
rt.a115.female.l = 21.20;
rt.a115.male.xl = 25.58;
rt.a115.female.xl = 26.05;

rt.a120.male.s = 15.35;
rt.a120.female.s = 15.62;
rt.a120.male.l = 21.22;
rt.a120.female.l = 21.68;
rt.a120.male.xl = 26.02;
rt.a120.female.xl = 26.67;

rt.a125.male.s = 15.58;
rt.a125.female.s = 15.93;
rt.a125.male.l = 21.56;
rt.a125.female.l = 22.14;
rt.a125.male.xl = 26.43;
rt.a125.female.xl = 27.24;

rt.a130.male.s = 15.84;
rt.a130.female.s = 16.26;
rt.a130.male.l = 21.91;
rt.a130.female.l = 22.58;
rt.a130.male.xl = 26.84;
rt.a130.female.xl = 27.76;

rt.a135.male.s = 16.12;
rt.a135.female.s = 16.57;
rt.a135.male.l = 22.27;
rt.a135.female.l = 22.98;
rt.a135.male.xl = 27.25;
rt.a135.female.xl = 28.20;

rt.a140.male.s = 16.41;
rt.a140.female.s = 16.88;
rt.a140.male.l = 22.62;
rt.a140.female.l = 23.34;
rt.a140.male.xl = 27.63;
rt.a140.female.xl = 28.57;

rt.a145.male.s = 16.69;
rt.a145.female.s = 17.18;
rt.a145.male.l = 22.96;
rt.a145.female.l = 23.66;
rt.a145.male.xl = 27.98;
rt.a145.female.xl = 28.87;

rt.a150.male.s = 16.98;
rt.a150.female.s = 17.45;
rt.a150.male.l = 23.29;
rt.a150.female.l = 23.94;
rt.a150.male.xl = 28.30;
rt.a150.female.xl = 29.11;

rt.a155.male.s = 17.26;
rt.a155.female.s = 17.69;
rt.a155.male.l = 23.60;
rt.a155.female.l = 24.17;
rt.a155.male.xl = 28.60;
rt.a155.female.xl = 29.29;

rt.a160.male.s = 17.54;
rt.a160.female.s = 17.91;
rt.a160.male.l = 23.90;
rt.a160.female.l = 24.37;
rt.a160.male.xl = 28.88;
rt.a160.female.xl = 29.43;

rt.a165.male.s = 17.80;
rt.a165.female.s = 18.09;
rt.a165.male.l = 24.19;
rt.a165.female.l = 24.54;
rt.a165.male.xl = 29.14;
rt.a165.female.xl = 29.56;

rt.a170.male.s = 18.05;
rt.a170.female.s = 18.25;
rt.a170.male.l = 24.46;
rt.a170.female.l = 24.70;
rt.a170.male.xl = 29.41;
rt.a170.female.xl = 29.69;

rt.a175.male.s = 18.28;
rt.a175.female.s = 18.38;
rt.a175.male.l = 24.73;
rt.a175.female.l = 24.85;
rt.a175.male.xl = 29.70;
rt.a175.female.xl = 29.84;

rt.a180.male.s = 18.50;
rt.a180.female.s = 18.50;
rt.a180.male.l = 25.00;
rt.a180.female.l = 25.00;
rt.a180.male.xl = 30.00;
rt.a180.female.xl = 30.00;

var lbl_height = "Ύψος";
var lbl_not_valid = "μη έγκυρη τιμή";
var lbl_small = "Λιποβαρές";
var lbl_normal = "Φυσιολογικό";
var lbl_large = "Υπέρβαρο";
var lbl_extra_large = "Παχυσαρκία";

function calc({ height, weight, sex, years, months }) {
  var bmr = '';
  var bmr_status = '';
  var bmr_class = '';
  var id;

  if (months < 6) {
    id = 'a'+years+0;
  } else {
    id = 'a'+years+5;
  }

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

    if(bmr<rt[id][sex]['s']){
      bmr_status = lbl_small;
      bmr_class = 'bmr-small';
    }else if(bmr>rt[id][sex]['xl']){
      bmr_status = lbl_extra_large;
      bmr_class = 'bmr-extra-large';
    }else if(bmr>rt[id][sex]['l']){
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
  const [sex, setSex] = React.useState("");
  const [years, setYears] = React.useState("");
  const [months, setMonths] = React.useState("");
  const [result, setResult] = React.useState(false);
  const [bmi, setBMI] = React.useState(null);

  return (
    <main id="main">
      <div class="container">
        <div class="row section topspace">
          <h2 class="section-title"><span>υπολογισμος δεικτη μαζας σωματος (BMI) παιδιου</span></h2>
        </div>

        <div class="row section featured topspace">
          <article class="post">
            <Grid container spacing={1} direction="row" alignItems="center" justifyContent="center" sx={{ margin: "auto", maxWidth: 500 }}>
              {!result && <Grid item xs={12}>
                <Grid container spacing={1} component={Card} pl={0} pr={1} pt={1} pb={1}>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Φύλο</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sex}
                        label="Age"
                        onChange={(event) => {
                          setSex(event.target.value);
                        }}
                      >
                        <MenuItem value=""></MenuItem>
                        <MenuItem value="male">Αγόρι</MenuItem>
                        <MenuItem value="female">Κορίτσι</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Χρονών</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={years}
                        label="Age"
                        onChange={(event) => {
                          setYears(parse(event.target.value));
                        }}
                      >
                        {["",2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19].map(d => (
                          <MenuItem value={d}>{d}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Μηνών</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={months}
                        label="Age"
                        onChange={(event) => {
                          setMonths(parse(event.target.value));
                        }}
                      >
                        {["",0,1,2,3,4,5,6,7,8,9,10,11,12].map(d => (
                          <MenuItem value={d}>{d}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
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
                          if(isNaN(years) || isNaN(months) || isNaN(height) || isNaN(weight)) {
                            setBMI({ desc: "Λάθος τιμές" });
                          } else {
                            setBMI(calc({ years, months, height, weight, sex }));
                          }

                          setResult(true);
                        }}
                      >
                        υπολογισμος
                      </Button>
                      <Button
                        to="/apps/bmiadult"
                        component={Link}
                      >
                        ΒΜΙ ενηλικων
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
