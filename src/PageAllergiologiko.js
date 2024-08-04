import Card from './components/Card';
import Grid from '@mui/material/Grid';
import Recent from './components/Recent';

const Main = () => {
  return (
    <main id="main">
      <div class="container">
        <div class="row section topspace">
          <h2 class="section-title"><span>αλλεργιολογικο ιατρειο</span></h2>
        </div>

        <div class="row section recentworks topspace">
          <div class="thumbnails recentworks row">
            <Recent img="assets/images/lowres/-5.jpg" />
            <Recent img="assets/images/lowres/-6.jpg" />
            <Recent img="assets/images/lowres/-12.jpg" />
            <Recent img="assets/images/lowres/-13.jpg" />
          </div>
        </div>

        {/* <div class="row section recentworks topspace">
          <img src="assets/images/allergiologiko.png" alt="" style={{ display: "block", margin: "auto", width: "70%" }} />
        </div> */}

        <div class="row section featured topspace">
          <h2 class="section-title"><span>βιογραφικο</span></h2>
          <article class="post">
            <header class="entry-header">
              <h3 class="entry-title">Ντιανα Ιβανοβα</h3>
            </header>

            <div class="entry-content">
              <p>Γεννήθηκα και μεγάλωσα στο Kazanlaκ Βουλγαρίας, μια όμορφη μικρή πόλη στην Κοιλάδα των Ρόδων. Μαθήτευσα στο Γαλλικό κολλέγιο Romain Rollan Stara Zagora το οποίο τελείωσα με άριστα 9,53. Έπειτα σπούδασα στην Ιατρική σχολή του TRACIAN UNIVERCITY στην ίδια πόλη και αποφοίτησα με άριστα 9,67.</p>
              <p>Ακολουθώντας το όνειρο μου να γίνω αλλεργιολόγος ήρθα στην Ελλάδα και ξεκίνησα την ειδικότητα μου στην 1η Κρατική Παθολογική Κλινική, στο Ιπποκράτειο νοσοκομείο Αθηνών και έπειτα στο Αλλεργιολογικό τμήμα Λαϊκού Νοσοκομείου, στην Αθήνα. Κατά την διάρκεια της εκπαίδευσης μου εργάστηκα στο τμήμα πνευμονικών δοκιμασιών στο Γενικό Νοσοκομείο Νοσημάτων Θώρακος «Η Σωτηρία», στο δερματολογικό τμήμα του Νοσοκομείο Ανδρέας Συγγρός, στο ανοσολογικό τμήμα Γενικού Νοσοκομείου Αθηνών «Γεώργιος Γεννηματάς» καθώς και στο Αλλεργιολογικό τμήμα στο Νοσοκομείο Παίδων Παναγιώτη & Αγλαΐας Κυριακού.</p>
              <p>Έχω παρακολουθήσει και έχω λάβει πιστοποίηση σε ECDL Πρόγραμμα εκμάθησης Χειρισμού Ηλεκτρονικών Υπολογιστών, Σεμινάριο Στατιστικών Προγραμμάτων Ανάλυσης (SPSS), Σεμινάριο Μαστοκυττάρωσης, Αττικό Νοσοκομείο, Μεταπτυχιακό προγραμμά Παιδιατρικής διατροδής της Ιατρικής Σχολής του Πανεπιστημίου της Βοστώνης (ΗΠΑ) Early Nutrion Boston University.</p>
              <p>Παρακολουθώ και κατά καιρούς πραγματοποιώ ομιλίες σε Πανελλήνια και Πανευρωπαικά Αλλεργιολογικά Συνέδρια ενώ εργασίες μου έχουν δημοσιευτεί σε διεθνή επιστημονικά περιοδικά. Έχω μεταφράσει κείμενα στο Ατλαντά Αλλεργιολογίας της Ευρωπαϊκής Αλλεργιολογικής εταιρίας.</p>
              <p>Η αγάπη μου για τις ξένες γλώσσες ξεκίνησε από τα σχολικά μου χρόνια και έχω πολύ καλή γνώση στα γαλλικά, αγγλικά, βουλγάρικα, ρώσικα και παρακολουθώ μαθήματα ισπανικών.</p>
              <p>Εργάστηκα στο ιδιωτικό διαγνωστικό κέντρο Ιατρική Μερίμνα Α.Ε Πετρούπολής, εφημέρευα στην Ιδιωτική Κλινική Δυτικής Αθήνας, ήμουν ιατρός αγώνων ποδοσφαίρου και λοιπών αθλητικών εκδηλώσεων Ε.Π.Σ.Α.Ν.Α και τέλεσα ως ιατρός της ομάδας πόλο Γ.Σ.Π Περιστερίου. Είμαι εξωτερικός συνεργάτης από το 2013 του ομίλου Ιατρικό Αθηνών, υποκατάστημα Περιστερίου και ιατρός ελεγκτής του ταμείου ΤΕΑ-ΥΠΟΙΚ από το 2007. Από 2014 είμαι μέλος του ΔΣ την ΕΕΑΚΑ - ΕΛΛΗΝΙΚΗΣ ΕΤΑΙΡΕΙΑΣ ΑΛΛΕΡΓΙΟΛΟΓΙΑΣ ΚΑΙ ΚΛΙΝΙΚΗΣ ΑΝΟΣΟΛΟΓΙΑΣ, και ως σήμερα γραμματέας στη ΠΕΑ - ΠΑΝΕΛΛΗΝΙΑ ΕΝΩΣΗ ΑΛΛΕΡΓΙΟΛΟΓΩΝ.</p>
              <p>Τον ελεύθερο μου χρόνο τον αφιερώνω στην οικογένεια μου, μου αρέσουν πολύ τα ταξίδια, η γυμναστική, το θέατρο, ο κινηματόγραφος, οι βόλτες στην φύση και η μαγειρική.</p>
              <p>Από το 2011 είμαι παντρεμένη με τον σύζυγο μου Αλέξανδρό Σακελλαρίου Παιδίατρός και αποκτήσαμε δύο υπέροχα αγόρια. Από το 2010 διατηρώ ιδιωτικό ιατρείο στο Περιστέρι, όπου προσφέρω τις υπηρεσίες μου σε παιδία και ενήλικες.</p>
            </div>
          </article>
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
