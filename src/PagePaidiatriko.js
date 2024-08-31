// import Card from './components/Card';
// import Grid from '@mui/material/Grid';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
// import DoneIcon from '@mui/icons-material/Done';
// import CardChild from './components/CardChild';
import Recent from './components/Recent';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Avatar, CardHeader } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

const Main = () => {
  return (
    <main id="main">
      <div class="container">
        <div class="row section topspace">
          <h2 class="section-title"><span>παιδιατρικο ιατρειο</span></h2>
        </div>


        <div class="row section recentworks topspace">
          <div class="thumbnails recentworks row">
            <Recent img="assets/images/lowres/-1.jpg" className="col-xs-12 col-sm-6 col-md-4 col-lg-4" />
            <Recent img="assets/images/lowres/-2.jpg" />
            <Recent img="assets/images/lowres/-3.jpg" />
            <Recent img="assets/images/lowres/-4.jpg" />
          </div>
        </div>


        {/*
        <div class="row section recentworks topspace">
          <img src="assets/images/paidiatriko.png" alt="" style={{ display: "block", margin: "auto", width: "70%" }} />
        </div> */}

        <div class="row section featured topspace">
          <h2 class="section-title"><span>βιογραφικο</span></h2>
          <article class="post">
            <header class="entry-header">
              <h3 class="entry-title">Αλεξανδρος Σακελλαριου</h3>
            </header>

            <div class="entry-content lead">
              <p>Γεννήθηκε στην Αθήνα αλλά αποφοίτησε με άριστα από το 1ο λύκειο Καρδίτσας. Μέσω πανελληνίων εξετάσεων επέτυχε αρχικά στην Ιατρική σχολή του Πανεπιστημίου Θράκης και έπειτα στην Ιατρική σχολή του Πανεπιστημίου Αθηνών από όπου και αποφοίτησε με «λίαν καλώς». Στη συνέχεια παρακολούθησε το μεταπτυχιακό πρόγραμμα «Κλινική Παιδιατρική και Νοσηλευτική - Έρευνα» της Ά Πανεπιστημιακής Παιδιατρικής Κλινικής του Πανεπιστημίου Αθηνών από το οποίο αποφοίτησε με «άριστα».</p>
              <p>Εργάστηκε στο Αλλεργιολογικό εργαστήριο της Β Πανεπιστημιακής Παιδιατρικής Κλινικής του Πανεπιστημίου Αθηνών συμμετέχοντας σε σημαντικά πανευρωπαϊκά προγράμματα όπως το Europrevall για την επίπτωση της τροφικής αλλεργίας στην Ελλάδα και την Ευρώπη και το Ga2len για την συχνότητα και τη βαρύτητα του άσθματος. Κατά η διάρκεια αυτών παρακολούθησε πρόγραμμα κατάρτισης στην επιδημιολογία στην σχολή δημόσιας υγείας, και ξεκίνησε την διδακτορική του διατριβή πάνω στην συχνότητα της τροφικής αλλεργίας στα παιδιά στην Ελλάδα.</p>
              <p>Ειδικεύθηκε στην παιδιατρική στην Ά παιδιατρική κλινική του νοσοκομείου παίδων «Π&Α Κυριακού» συμμετέχοντας μεταξύ άλλων στα τμήματα αύξησης και ανάπτυξης, διαβητολογικού, γαστρεντερολογικού και λοιμώξεων. Εκπαιδεύτηκε στη νεογνολογία στο μαιευτήριο «Έλενα Βενιζέλου» και στην παιδιατρική αλλεργιολογία στο St. Mary’s Hospital του Λονδίνου με υποτροφία από την Ευρωπαϊκή Ακαδημία Αλλεργιολογίας.</p>
              <p>Εκπαιδεύτηκε περαιτέρω στην διατροφή των παιδιών, καθώς έχει αποφοιτήσει με «Άριστα» από το μεταπτυχιακό πρόγραμμα Παιδιατρικής Διατροφής (Pediatric Nutrition) της Ιατρικής Σχολής του Πανεπιστημίου της Βοστώνης. Επίσης με άριστα από το μεταπτυχιακό πρόγραμμα Early Nutrition Specialist της Ιατρικής Σχολής του Πανεπιστημίου του Μονάχου και Early Nutrition Academy του ίδιου πανεπιστημίου.</p>
              <p>Τα τελευταία χρόνια ασχολείται ιδιαίτερα με την εφηβική ιατρική έχοντας ολοκληρώσει το πρόγραμμα εκπαίδευσης με τίτλο: «Εφηβική Ιατρική: ψυχοσωματική και γνωστική ανάπτυξη, αναπαραγωγική υγεία, διατροφή, άθληση και στρες των εφήβων». εμβαθύνοντας σε θέματα ψυχολογίας και διατροφής ενώ έχει λάβει μέρος και στο πρόγραμμα κατάρτισης: παιδιά/έφηβοι στις ημέρες COVID 19 κοινωνική/συναισθηματική ενδυνάμωση & ψυχική ανθεκτικότητα. Έχει εργαστεί σαν ιατρός σε αθλητικές εγκαταστάσεις (γήπεδα ποδοσφαίρου, αγώνες δρόμου μεγάλων αποστάσεων, κολυμβητικές ομάδες) σε διάφορες μονάδες κατά τη διάρκεια της στρατιωτικής του θητείας, όπου έχει παρακολουθήσει και μαθήματα πρώτων βοηθειών (Advance Life Support και Advanced Trauma Life Support) καθώς και σε τουριστικές και κατασκηνωτικές μονάδες. Έχει συμμετοχή στην μετάφραση πολλών ιατρικών συγγραμμάτων μεταξύ των οποίων και στο σύγγραμμα παιδιατρικής του Nelson.</p>
              <p>Μετά το τέλος της ειδικότητας ξεκίνησε να εργάζεται στο ιατρείο του στο περιστέρι και στην αθηναϊκή κλινική για πάνω από 3 χρόνια. Ταυτόχρονα εξυπηρετούσε τις ανάγκες κατ’ οίκον επισκέψεων στο δίκτυο του ομίλου βιοϊατρικής. Από το 2013 εξυπηρετεί το δίκτυο ασφαλισμένων της interamerican μέσω της γραμμής υγειάς 1010.</p>
              <p>Έχει συμμετάσχει με παρουσιάσεις και διαλέξεις σε περισσότερες από 20 ημερίδες και συνέδρια και έχει περισσότερες από 10 δημοσιεύσεις του σε ελληνικά και διεθνή περιοδικά, ενώ κατά καιρούς αρθρογραφεί και σε έντυπα ιατρικού ενδιαφέροντος του ομίλου interamerican. Στο παρελθόν παρείχε συμβουλές για θέματα παιδιατρικής μέσω της πρωινής ζώνης του ραδιοφωνικού σταθμού «Αθήνα 98,4».</p>
              <p>Γνωρίζει άριστα Αγγλικά ενώ έχει παρακολουθήσει στο παρελθόν μαθήματα Σουηδικών και Ισπανικών.</p>
              <p>Συμμετέχει σε μελέτες όπως HerA και armadillo σε συνεργασία με το Χαροκόπειο Πανεπιστήμιο και συμμετέχει σε εκπαιδευτικό πρόγραμμα για τις επιπτώσεις της κλιματικής αλλαγής στην παιδιατρική. Παρακολουθεί το πρόγραμμα early immunity and nutrition από το πανεπιστήμιο του Μονάχου για τη σύνδεση της διατροφής με την ανοσία. Είναι παντρεμένος από το 2011 με την αλλεργιολόγο ΝΤΙΑΝΑ ΙΒΑΝΟΒΑ και έχουν δύο υπέροχα, ζωηρά και σκανδαλιάρικα αγόρια τον Γεώργιο και τον Δημήτριο.</p>
            </div>
          </article>
        </div>

        <div class="row section featured topspace">
          <h2 class="section-title"><span>υπηρεσιες</span></h2>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ alignItems: "center" }}>
              <Avatar src="assets/svg/3.svg" sx={{ height: 100, width: 100 }} />
              <CardHeader sx={{ textTransform: "capitalize" }} title="προγεννητική επισκεψη" />
            </AccordionSummary>
            <AccordionDetails>
              <p class="lead ">Συνήθως γίνεται στο τρίτο τρίμηνο της κύησης. Συστήνεται σε όλες τις οικογένειες που περιμένουν παιδί και ιδιαίτερα όταν είναι το πρώτο τους. Σε αυτή την πρώτη γνωριμία οι μέλλοντες γονείς θα εξοικειωθούν με το χώρο και το προσωπικό ώστε να εγκατασταθεί μια σχέση υποστήριξης και εμπιστοσύνης για το μέλλον. Συλλέγονται χρήσιμες πληροφορίες για το οικογενειακό ιστορικό και την πορεία της κύησης, γίνεται ενημέρωση για θέματα ανοσοποίησης (εμβόλια) και διατροφής (1000 ημέρες) και παρέχετε ενημερωτικό υλικό.Κατά τη διάρκεια του ραντεβού μπορεί να αναγνωριστούν καταστάσεις που απαιτούν αντιμετώπιση ή χρήζουν ειδική διαχείρηση (τροφικές ή φαρμακευτικές αλλεργίες, ανάγκη για ψυχολογική υποστήριξη).</p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ alignItems: "center" }}>
              <Avatar src="assets/svg/4.svg" sx={{ height: 100, width: 100 }} />
              <CardHeader sx={{ textTransform: "capitalize" }} title="νεογνική επισκεψη" />
            </AccordionSummary>
            <AccordionDetails>
              <p class="lead ">Η πρώτη επίσκεψη συνήθως γίνεται στο οικείο περιβάλλον του σπιτιού. Πέρα από την κλινική εξέταση, λαμβάνονται πληροφορίες για το περιγεννητικό ιστορικό και δίνονται οδηγίες για τη σίτηση μητέρας και παιδιού (θηλασμός, υποκατάστατα ξένου γάλατος). Απαντώνται όλες οι ερωτήσεις του ζεύγους και του οικογενειακού περιβάλλοντος και γίνονται συστάσεις για τις προκλήσεις που θα εμφανιστούν. Επιπλέον θα συζητηθούν εκτενώς και με προσοχή θέματα ασφάλειας προκειμένου να μειωθεί ο κίνδυνος τραυματισμού του νεογνού.</p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ alignItems: "center" }}>
              <Avatar src="assets/svg/9.svg" sx={{ height: 100, width: 100 }} />
              <CardHeader sx={{ textTransform: "capitalize" }} title="Τακτική παιδιατρική επίσκεψη" />
            </AccordionSummary>
            <AccordionDetails>
              <p class="lead ">Είναι οι προγραμματισμένες επισκέψεις που έχουν σκοπό την πρόληψη (εμβολιασμοί, ασφάλεια, διατροφή), την παρακολούθηση της αύξησης και της ψυχοκινητικής εξέλιξης και τον προαγωγή της σωματικής, πνευματικής και κοινωνικής υγείας του παιδιού. Οι τακτικές παιδιατρικές επισκέψεις είναι 7 το πρώτο έτος ( 1, 2, 3, 4, 5, 6 και 9 μηνών), 5 το δεύτερο έτος (12, 13, 14, 15, 18 και 20 μηνών), έπειτα 2 και 2,5 ετών και συνεχίζονται ετησίως μέχρι και το 16ο έτος της ηλικίας του παιδιού.</p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ alignItems: "center" }}>
              <Avatar src="assets/svg/12.svg" sx={{ height: 100, width: 100 }} />
              <CardHeader sx={{ textTransform: "capitalize" }} title="Επείγουσα παιδιατρική εξέταση" />
            </AccordionSummary>
            <AccordionDetails>
              <p class="lead ">Λήψη ιστορικού και κλινική εξέταση του παιδιού, διερεύνηση συμπτωμάτων με εργαστηριακές και απεικονιστικές εξετάσεις. Συνεργασία με ειδικούς για την ορθότερη αντιμετώπιση του νοσήματος και την παρακολούθηση του παιδιού.</p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ alignItems: "center" }}>
              <Avatar src="assets/svg/11.svg" sx={{ height: 100, width: 100 }} />
              <CardHeader sx={{ textTransform: "capitalize" }} title="Εφηβική εξέταση" />
            </AccordionSummary>
            <AccordionDetails>
              <p class="lead ">Εκτίμηση των εφήβων σχετικά με θέματα που αφορούν:
                <ul>
                  <li>Ανάπτυξη - αύξηση - ενήβωση</li>
                  <li>Εφηβική διατροφή</li>
                  <li>Άσκηση και άθληση</li>
                  <li>Εκπαίδευση και συμπεριφορά</li>
                  <li>Άγχος και ψυχική υγεία</li>
                  <li>Ανδρολογία - Γυναικολογία - Σεξουαλική υγεία</li>
                </ul>
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ alignItems: "center" }}>
              <Avatar src="assets/svg/5.svg" sx={{ height: 100, width: 100 }} />
              <CardHeader sx={{ textTransform: "capitalize" }} title="Συμβουλευτική μητρικου θηλασμου" />
            </AccordionSummary>
            <AccordionDetails>
              <p class="lead ">Δίνονται οδηγίες για τη διαδικασία, τη συχνότητα και τη διάρκεια των γευμάτων, τη δίαιτα της μητέρας (τροφικές αλλεργίες, δυσανεξίες, εκούσιος αποκλεισμός ομάδων τροφών) και άλλες καταστάσεις που μπορεί να προβληματίσουν τους γονείς όπως λοιμώξεις, χρήση φαρμάκων, συμπληρωμάτων, ουσιών.</p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ alignItems: "center" }}>
              <Avatar src="assets/svg/7.svg" sx={{ height: 100, width: 100 }} />
              <CardHeader sx={{ textTransform: "capitalize" }} title="Ανοσοποίηση - χρόνιες θεραπείες" />
            </AccordionSummary>
            <AccordionDetails>
              <p class="lead ">Παρέχεται επίσημη ενημέρωση μέσω φυλλαδίων αλλά και επεξηγήσεις για κάθε εμβολιασμό που θα πραγματοποιηθεί. Επιπλέον Λαμβάνουν χώρα χρονιές θεραπείες (πρώιμη ήβη) και διαγνωστικές εξετάσεις (mantoux) μετά από συνεννόηση.</p>
            </AccordionDetails>
          </Accordion>

          {/* <div class="col-md-6">
            <CardChild desc="προγεννητική επισκεψη" img="assets/svg/3.svg">
              <p class="lead ">Συνήθως γίνεται στο τρίτο τρίμηνο της κύησης. Συστήνεται σε όλες τις οικογένειες που περιμένουν παιδί και ιδιαίτερα όταν είναι το πρώτο τους. Σε αυτή την πρώτη γνωριμία οι μέλλοντες γονείς θα εξοικειωθούν με το χώρο και το προσωπικό ώστε να εγκατασταθεί μια σχέση υποστήριξης και εμπιστοσύνης για το μέλλον. Συλλέγονται χρήσιμες πληροφορίες για το οικογενειακό ιστορικό και την πορεία της κύησης, γίνεται ενημέρωση για θέματα ανοσοποίησης (εμβόλια) και διατροφής (1000 ημέρες) και παρέχετε ενημερωτικό υλικό.Κατά τη διάρκεια του ραντεβού μπορεί να αναγνωριστούν καταστάσεις που απαιτούν αντιμετώπιση ή χρήζουν ειδική διαχείρηση (τροφικές ή φαρμακευτικές αλλεργίες, ανάγκη για ψυχολογική υποστήριξη).</p>
            </CardChild>
          </div>

          <div class="col-md-6">
            <CardChild desc="νεογνική επισκεψη" img="assets/svg/4.svg">
              <p class="lead ">Η πρώτη επίσκεψη συνήθως γίνεται στο οικείο περιβάλλον του σπιτιού. Πέρα από την κλινική εξέταση, λαμβάνονται πληροφορίες για το περιγεννητικό ιστορικό και δίνονται οδηγίες για τη σίτηση μητέρας και παιδιού (θηλασμός, υποκατάστατα ξένου γάλατος). Απαντώνται όλες οι ερωτήσεις του ζεύγους και του οικογενειακού περιβάλλοντος και γίνονται συστάσεις για τις προκλήσεις που θα εμφανιστούν. Επιπλέον θα συζητηθούν εκτενώς και με προσοχή θέματα ασφάλειας προκειμένου να μειωθεί ο κίνδυνος τραυματισμού του νεογνού.</p>
            </CardChild>
          </div>

          <div class="col-md-6">
            <CardChild desc="Τακτική παιδιατρική επίσκεψη" img="assets/svg/9.svg">
              <p class="lead ">Είναι οι προγραμματισμένες επισκέψεις που έχουν σκοπό την πρόληψη (εμβολιασμοί, ασφάλεια, διατροφή), την παρακολούθηση της αύξησης και της ψυχοκινητικής εξέλιξης και τον προαγωγή της σωματικής, πνευματικής και κοινωνικής υγείας του παιδιού. Οι τακτικές παιδιατρικές επισκέψεις είναι 7 το πρώτο έτος ( 1, 2, 3, 4, 5, 6 και 9 μηνών), 5 το δεύτερο έτος (12, 13, 14, 15, 18 και 20 μηνών), έπειτα 2 και 2,5 ετών και συνεχίζονται ετησίως μέχρι και το 16ο έτος της ηλικίας του παιδιού.</p>
            </CardChild>
          </div>

          <div class="col-md-6">
            <CardChild desc="Επείγουσα παιδιατρική εξέταση" img="assets/svg/12.svg">
              <p class="lead ">Λήψη ιστορικού και κλινική εξέταση του παιδιού, διερεύνηση συμπτωμάτων με εργαστηριακές και απεικονιστικές εξετάσεις. Συνεργασία με ειδικούς για την ορθότερη αντιμετώπιση του νοσήματος και την παρακολούθηση του παιδιού.</p>
            </CardChild>
          </div>

          <div class="col-md-6">
            <CardChild desc="Εφηβική εξέταση" img="assets/svg/11.svg">
              <p class="lead ">Εκτίμηση των εφήβων σχετικά με θέματα που αφορούν:
                <ul>
                  <li>Ανάπτυξη - αύξηση - ενήβωση</li>
                  <li>Εφηβική διατροφή</li>
                  <li>Άσκηση και άθληση</li>
                  <li>Εκπαίδευση και συμπεριφορά</li>
                  <li>Άγχος και ψυχική υγεία</li>
                  <li>Ανδρολογία - Γυναικολογία - Σεξουαλική υγεία</li>
                </ul>
              </p>
            </CardChild>
          </div>

          <div class="col-md-6">
            <CardChild desc="Συμβουλευτική μητρικου θηλασμου" img="assets/svg/5.svg">
              <p class="lead ">Δίνονται οδηγίες για τη διαδικασία, τη συχνότητα και τη διάρκεια των γευμάτων, τη δίαιτα της μητέρας (τροφικές αλλεργίες, δυσανεξίες, εκούσιος αποκλεισμός ομάδων τροφών) και άλλες καταστάσεις που μπορεί να προβληματίσουν τους γονείς όπως λοιμώξεις, χρήση φαρμάκων, συμπληρωμάτων, ουσιών.</p>
            </CardChild>
          </div>

          <div class="col-md-6">
            <CardChild desc="Ανοσοποίηση - χρόνιες θεραπείες" img="assets/svg/7.svg">
              <p class="lead ">Παρέχεται επίσημη ενημέρωση μέσω φυλλαδίων αλλά και επεξηγήσεις για κάθε εμβολιασμό που θα πραγματοποιηθεί. Επιπλέον Λαμβάνουν χώρα χρονιές θεραπείες (πρώιμη ήβη) και διαγνωστικές εξετάσεις (mantoux) μετά από συνεννόηση.</p>
            </CardChild>
          </div> */}
        </div>

        <div class="row section topspace">
          <YoutubeEmbed embedId="N4fcYPQQzwk" />
        </div>
        {/*
        <div class="row section topspace">
          <h2 class="section-title"><span>αρχεια</span></h2>

          <div class="panel panel-cta">
            <div class="panel-body">
              <div class="col-lg-8">
                <p>Οδηγίες για τις πρώτες μέρες μετά τη γέννηση</p>
              </div>
              <div class="col-lg-4 text-right">
                <a href="assets/pdf/first.pdf" class="btn btn-primary btn-lg">Download</a>
              </div>
            </div>
          </div>
          <div class="panel panel-cta">
            <div class="panel-body">
              <div class="col-lg-8">
                <p>Οδηγίες για την πρώτη εβδομάδα.</p>
              </div>
              <div class="col-lg-4 text-right">
                <a href="assets/pdf/week1.pdf" class="btn btn-primary btn-lg">Download</a>
              </div>
            </div>
          </div>
          <div class="panel panel-cta">
            <div class="panel-body">
              <div class="col-lg-8">
                <p>Οδηγίες για την δεύτερη εβδομάδα.</p>
              </div>
              <div class="col-lg-4 text-right">
                <a href="assets/pdf/week2.pdf" class="btn btn-primary btn-lg">Download</a>
              </div>
            </div>
          </div>
          <div class="panel panel-cta">
            <div class="panel-body">
              <div class="col-lg-8">
                <p>Οδηγίες για την τρίτη εβδομάδα.</p>
              </div>
              <div class="col-lg-4 text-right">
                <a href="assets/pdf/week3.pdf" class="btn btn-primary btn-lg">Download</a>
              </div>
            </div>
          </div>
          <div class="panel panel-cta">
            <div class="panel-body">
              <div class="col-lg-8">
                <p>Οδηγίες για την τέταρτη εβδομάδα.</p>
              </div>
              <div class="col-lg-4 text-right">
                <a href="assets/pdf/week4.pdf" class="btn btn-primary btn-lg">Download</a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </main>
  );
}

export default Main;
