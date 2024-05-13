import Card from './components/Card';
import Grid from '@mui/material/Grid';

const Main = () => {
  return (
    <main id="main">
      <div class="container">
        <div class="row section featured topspace">
          <h2 class="section-title"><span>βιογραφικο διαιτολογου</span></h2>
          <article class="post">
            <header class="entry-header">
              <h3 class="entry-title">Ελευθερία Παπαχρήστου</h3>
            </header>

            <div class="entry-content">
              <p>Η Ελευθερία Παπαχρήστου είναι Διαιτολόγος-Διατροφολόγος, απόφοιτη του Τμήματος Επιστήμης Διαιτολογίας- Διατροφής του Χαροκοπείου Πανεπιστημίου και κάτοχος μεταπτυχιακού Διπλώματος με τίτλο «Εφαρμοσμένη Διαιτολογία-Διατροφή: Κατεύθυνση Κλινική Διατροφή». Έχει μετεκπαιδευτεί στην παιδική διατροφή, ολοκληρώνοντας το πρόγραμμα «Τεκμηριωμένη Παιδιατρική Διατροφή» του Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης, και στο μητρικό θηλασμό, ολοκληρώνοντας το πρόγραμμα «Μητρικός Θηλασμός: Σεμινάριο για Επαγγελματίες Υγείας» του Ινστιτούτου Υγείας του Παιδιού. Επιπλέον κατέχει πιστοποίηση στη μέθοδο SOS Approach to Feeding για τη διαχείριση παιδιών με επιλεκτική σίτιση.</p>
              <p>Στο πλαίσιο των σπουδών της, έχει ασχοληθεί ερευνητικά με τη διατροφή παιδιών με κυστική ίνωση και τη διατροφή παιδιών με τροφικές αλλεργίες. Επιπλέον, εργάστηκε ως ερευνήτρια στο Πανεπιστήμιο της Γλασκώβης, στο πλαίσιο προγράμματος Erasmus, μελετώντας τη διατροφή και το εντερικό μικροβίωμα με στη νόσο Crohn. Τα τελευταία χρόνια εργάστηκε στο Ινστιτούτο Υγείας του Παιδιού, συμμετέχοντας στο ευρωπαϊκό πρόγραμμα Best-ReMaP για τη διατροφή των παιδιών και παρακολουθώντας βρέφη, παιδιά και εφήβους με ενδογενείς διαταραχές μεταβολισμού (φαινυλκετονουρία και γαλακτοζαιμία).</p>
            </div>
          </article>

          <div class="row section featured topspace">
          <h2 class="section-title"><span>υπηρεσιες</span></h2>
          <Grid container>
            <Grid xs={12} md={6}>
              <Card
                desc="Διατροφική συμβουλευτική στην εγκυμοσύνη και το θηλασμό"
                more="Παροχή εξατομικευμένων οδηγιών διατροφής - πλάνου διατροφής στην εγκυμοσύνη και το θηλασμό με στόχο την κάλυψη των αναγκών της μητέρας σε ενέργεια και θρεπτικά συστατικά. Καθοδήγηση στην επιλογή ή αποφυγή τροφίμων. Διαχείριση του σωματικού βάρους"
                img="https://placehold.co/400"
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Card
                desc="Εισαγωγή στερεών - Διατροφή νηπίου"
                more="Συμβουλευτική για τη διατροφή του βρέφους και νηπίου, με στόχο την υιοθέτηση υγιεινών διατροφικών συνηθειών από μικρή ηλικία και τη βέλτιστη ανάπτυξη του παιδιού. Κατάρτιση εξατομικευμένου πλάνου διατροφής - προτάσεις γευμάτων, ανάλογα με τις ανάγκες του παιδιού και της οικογένειας. Εισαγωγή στερεών με παραδοσιακή μέθοδο σίτισης με κουτάλι (αλεσμένα τρόφιμα) και Baby-Led Weaning. Συμβουλευτική για εύκολη μετάβαση από αλεσμένα τρόφιμα σε κομμάτια τροφής."
                img="https://placehold.co/400"
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Card
                desc="Επιλεκτική διατροφή παιδιών"
                more="Αξιολόγηση της επάρκειας σε ενέργεια και θρεπτικά συστατικά του παιδιού με επιλεκτική διατροφή. Στρατηγικές αντιμετώπισης της επιλεκτικής διατροφής. Κατάρτιση εξατομικευμένου πλάνου διατροφής - προτάσεις γευμάτων με βάση τις ανάγκες και τις προτιμήσεις του παιδιού."
                img="https://placehold.co/400"
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Card
                desc="Παιδική παχυσαρκία"
                more="Παροχή εξατομικευμένων οδηγιών διατροφής - πλάνου διατροφής και διατροφική εκπαίδευση του παιδιού και των γονέων. Οδηγίες πρόληψης της παχυσαρκίας."
                img="https://placehold.co/400"
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Card
                desc="Διατροφική εκπαίδευση γονέων - Συμβουλευτική για τη διατροφή της οικογένειας"
                more="Οδηγίες ισορροπημένης διατροφής για όλη την οικογένεια - προτάσεις γευμάτων."
                img="https://placehold.co/400"
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Card
                desc="Διατροφική συμβουλευτική/υποκατάσταση σε Τροφική Αλλεργία"
                more="Για βρέφη, παιδιά, εφήβους και ενήλικες. Αξιολόγηση της επάρκειας της δίαιτας σε ενέργεια και θρεπτικά συστατικά. Εκπαίδευση για εναλλακτικές πηγές θρεπτικών συστατικών - εναλλακτικά τρόφιμα, οδηγίες υποκαταστασης των αλλεργιογόνων τροφίμων σε συνταγές."
                img="https://placehold.co/400"
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Card
                desc="Διατροφή στα στάδια της ζωής"
                more="Διατροφή βρεφών, νηπίων, παιδιών, εφήβων και ενηλίκων. Διατροφή πριν τη σύλληψη, στην εγκυμοσύνη και το θηλασμό"
                img="https://placehold.co/400"
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Card
                desc="Κλινική Διατροφή"
                more="Αξιολόγηση της διατροφικής κατάστασης και εξατομικευμένες οδηγίες διατροφής - πλάνο διατροφής σε άτομα που πάσχουν από κάποιο νόσημα"
                img="https://placehold.co/400"
              />
            </Grid>
          </Grid>
        </div>

        </div>
      </div>
    </main>
  );
}

export default Main;