import Card from './components/Card';
import Grid from '@mui/material/Grid';

const Main = () => {
  return (
    <main id="main">
      <div class="container">
        <div class="row section topspace">
          <h2 class="section-title"><span>αλλεργιολογικο ιατρειο</span></h2>
        </div>

        <div class="row section featured topspace">
          <h2 class="section-title"><span>υπηρεσιες</span></h2>
          <Grid container>
            <Grid xs={12} md={6}>
              <Card
                desc="Διάγνωση και κλινική παρακολούθηση"
                more="όλου του φάσματος των αλλεργικών παθήσεων σε βρέφη, παιδιά και ενήλικες."
                img="assets/svg/12.svg"
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Card
                desc="Prick-test και Patch test"
                more="Δερματικά αλλεργικά τεστ (prick-test και patch test) για τη διάγνωση της αναπνευστικής, της τροφικής και της δερματικής αλλεργίας."
                img="assets/svg/13.svg"
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Card
                desc="Kνίδωση και Aγγειοδημα"
                more="Εξειδικευμένη διάγνωση και θεραπεία της χρόνιας κνίδωσης και αγγειοδηματος"
                img="assets/svg/14.svg"
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Card
                desc="Αλλεργική Ρινίτιδα"
                more="Ανοσοθεραπεία για την θεραπεία της αλλεργικής ρινίτιδας και επιπεφυκίτιδας, αλλεργικού άσθματος και αναφυλαξία μετά από νυγμό υμενοπτέρων (μέλισσες και σφήκες )"
                img="assets/svg/15.svg"
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Card
                desc="Αλλεργικό Άσθμα"
                more="Διάγνωση , παρακολούθηση και θεραπεία του αλλεργικού άσθματος καθώς και του σοβαρού ηωσινοφιλικού άσθματος ( σπιρομετρισή )"
                img="assets/svg/16.svg"
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Card
                desc="Ηωσινοφιλικά Νοσήματα"
                more="Διάγνωση και εκτίμηση ηωσινοφιλικών νοσημάτων ηωσινοφιλική οισοφαγίτιδα , τροφοεξαρτώμενη εντεροκολίτιδα, FPIE S."
                img="assets/svg/17.svg"
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Card
                desc="Θεραπείες με Μονοκλωνικά Αντισώματα"
                more="θεραπείες με μονοκλωνικά αντισώματα με το αλλεργικό άσθμα, ρινικοί πολύποδες, χρόνια αυτοάνοση ή αυθόρμητη κνίδωση, καθώς και φυσικές κνιδώσεις όπως δερμογραφισμός, κνίδωση εκ ψύχους ή εκ θερμότητας"
                img="assets/svg/18.svg"
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Card
                desc="Δερματικές Παθήσεις"
                more="Δερματικές παθήσεις με αλλεργικό υπόβαθρό - Ατοπική δερματίτιδα σε παιδιά και ενήλικες, δερματίτιδα εξ επαφής, νευροδερματίτιδα, παρασιτική κνίφη"
                img="assets/svg/19.svg"
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Card
                desc="Αναφυλαξια σε φάρμακα"
                img="assets/svg/20.svg"
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Card
                desc="Αναφυλαξια σε τροφές"
                img="assets/svg/21.svg"
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Card
                desc="Αναφυλαξια σε νυγμούς από μέλισσες και σφήκες"
                img="assets/svg/22.svg"
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </main>
  );
}

export default Main;
