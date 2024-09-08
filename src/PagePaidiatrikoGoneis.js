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

        <div class="row section featured topspace">
          <h2 class="section-title"><span>για γονεις</span></h2>

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
        </div>

        <div class="row section topspace">
          <YoutubeEmbed embedId="N4fcYPQQzwk" />
        </div>
      </div>
    </main>
  );
}

export default Main;
