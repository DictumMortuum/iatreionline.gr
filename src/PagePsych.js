import Card from './components/Card';
import Grid from '@mui/material/Grid';

const Main = () => {
  return (
    <main id="main">
      <div class="container">
        <div class="row section featured topspace">
          <h2 class="section-title"><span>βιογραφικο ψυχολογου</span></h2>
          <article class="post">
            <header class="entry-header">
              <h3 class="entry-title">Χριστινα Μαρινα Μπιλιρακη</h3>
            </header>

            <div class="entry-content lead">
              <p>Η Χριστίνα Μαρίνα Μπιλιράκη είναι Ιατρική Ψυχολόγος/Ψυχολόγος Υγείας. Σπούδασε ψυχολογία (BSc Honours) στο University of Surrey του Ηνωµένου Βασιλείου και πραγµατοποίησε την πρακτική της άσκηση στο Πανεπιστηµιακό Νοσοκοµείο Giessen και Marburg της Γερµανίας στο Κέντρο Κοινωνικής Παιδιατρικής.</p>
              <p>Πραγµατοποίησε µεταπτυχιακές σπουδές στην Ιατρική Ψυχολογία και Ψυχολογία της υγείας (MSc) στο Leiden University της Ολλανδίας. Ολοκλήρωσε επιτυχώς την πρακτική της άσκηση στην Δ’ Ογκολογική Κλινική του Metropolitan Hospital.</p>
              <p>Από το 2023, ειδικεύεται στις Γνωσιακές Ψυχοθεραπείες στην Ελληνική Εταιρεία Γνωσιακών Ψυχοθεραπειών µε την πιστοποίηση EABCT.</p>
              <p>Τα δεδοµένα που συλλέχθηκαν για την διπλωµατική της εργασία έχουν δηµοσιευθεί στο επιστηµονικό περιοδικό Appetite µε τον εαυτό της ως συν-συγγραφέα.</p>
              <p>Είναι κάτοχος άδειας ασκήσεως επαγγέλµατος και αποτελεί µέλος της Ελληνικής Εταιρείας Γνωσιακών Ψυχοθεραπειών.</p>
            </div>
          </article>
        </div>

        <div class="row section featured topspace">
          <h2 class="section-title"><span>υπηρεσιες</span></h2>
          <Grid container>
            <Grid xs={12} md={6}>
              <Card
                desc="Ψυχολογική υποστήριξη ιατρικών περιστατικών"
                img="https://placehold.co/400"
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Card
                desc="Ατοµικές συνεδρίες εφήβων και ενηλίκων"
                img="https://placehold.co/400"
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Card
                desc="Συµβουλευτική παιδιών - εφήβων"
                img="https://placehold.co/400"
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Card
                desc="Συµβουλευτική για θέµατα Υγείας"
                more="(1000 ημέρες, εισαγωγή στερεών)"
                img="https://placehold.co/400"
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Card
                desc="Συµβουλευτική διαχείρισης άγχους & στρες"
                img="https://placehold.co/400"
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Card
                desc="Συµβουλευτική διαχείρισης κατάθλιψης"
                img="https://placehold.co/400"
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </main>
  );
}

export default Main;
