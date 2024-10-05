import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Avatar, CardHeader } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Main = () => {
  return (
    <main id="main">
      <div class="container">
        <div class="row section featured topspace">
          <h2 class="section-title"><span>υπηρεσιες ψυχολογου</span></h2>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ alignItems: "center" }}>
              <Avatar src="assets/svg/nutrition6.svg" sx={{ height: 100, width: 100 }} />
              <CardHeader sx={{ textTransform: "capitalize" }} title="Ψυχολογική υποστήριξη ιατρικών περιστατικών" />
            </AccordionSummary>
            <AccordionDetails>
              <p class="lead ">Παροχή ψυχολογικής υποστήριξης σε ασθενείς που αντιμετωπίζουν σωματικές ασθένειες. Η υπηρεσία αυτή είναι ιδιαίτερα σημαντική για την αντιμετώπιση του συναισθηματικού βάρους που μπορεί να προκύψει από την εμπειρία μιας ασθένειας, χειρουργικής επέμβασης ή μακροχρόνιας θεραπείας.</p>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ alignItems: "center" }}>
              <Avatar src="assets/svg/psychology5.svg" sx={{ height: 100, width: 100 }} />
              <CardHeader sx={{ textTransform: "capitalize" }} title="Ατοµικές συνεδρίες εφήβων και ενηλίκων" />
            </AccordionSummary>
            <AccordionDetails>
              <p class="lead ">Παροχή ψυχολογικής υποστήριξης που εστιάζει στις προσωπικές ανάγκες και δυσκολίες κάθε ατόμου. Στόχος είναι η κατανόηση και η αντιμετώπιση ψυχικών, συναισθηματικών και συμπεριφορικών ζητημάτων. Οι ατομικές συνεδρίες προσφέρουν μια ευκαιρία για προσωπική ανάπτυξη, διαχείριση δύσκολων καταστάσεων και βελτίωση της συνολικής ψυχικής ευεξίας τόσο στους εφήβους όσο και στους ενήλικες.</p>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ alignItems: "center" }}>
              <Avatar src="assets/svg/psychology2.svg" sx={{ height: 100, width: 100 }} />
              <CardHeader sx={{ textTransform: "capitalize" }} title="Συµβουλευτική παιδιών - εφήβων" />
            </AccordionSummary>
            <AccordionDetails>
              <p class="lead ">Παροχή ψυχολογικής υποστήριξης που εστιάζει στις ανάγκες των νεότερων ηλικιών, βοηθώντας τα παιδιά και τους εφήβους να αντιμετωπίσουν συναισθηματικές, συμπεριφορικές και κοινωνικές προκλήσεις. Μέσω αυτής της διαδικασίας, ενισχύεται η ψυχική ανθεκτικότητα και η ικανότητά τους να διαχειρίζονται τις δυσκολίες που μπορεί να συναντούν κατά την ανάπτυξή τους.</p>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ alignItems: "center" }}>
              <Avatar src="assets/svg/psychology4.svg" sx={{ height: 100, width: 100 }} />
              <CardHeader sx={{ textTransform: "capitalize" }} title="Συµβουλευτική για θέµατα Υγείας" />
            </AccordionSummary>
            <AccordionDetails>
              <p class="lead ">Παροχή ψυχολογικής υποστήριξης που εστιάζει στην ενημέρωση, διαχείριση και κατανόηση ζητημάτων υγείας. Στόχος της είναι να βοηθήσει τα άτομα να προσαρμοστούν στις προκλήσεις που προκύπτουν από την ασθένεια, τη θεραπεία ή την αλλαγή στον τρόπο ζωής, καθώς και να ενισχύσει την ψυχική τους ανθεκτικότητα.</p>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ alignItems: "center" }}>
              <Avatar src="assets/svg/psychology6.svg" sx={{ height: 100, width: 100 }} />
              <CardHeader sx={{ textTransform: "capitalize" }} title="Συµβουλευτική διαχείρισης άγχους & στρες" />
            </AccordionSummary>
            <AccordionDetails>
              <p class="lead ">Παροχή ψυχολογικής στήριξης σε άτομα που βιώνουν έντονο άγχος, στρες ή ψυχολογική πίεση. Στόχος της είναι η ανάπτυξη στρατηγικών για τη μείωση του άγχους, η βελτίωση της ποιότητας ζωής και η ενίσχυση της ψυχικής ευεξίας μέσω ψυχοθεραπευτικών τεχνικών και εργαλείων.</p>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ alignItems: "center" }}>
              <Avatar src="assets/svg/psychology3.svg" sx={{ height: 100, width: 100 }} />
              <CardHeader sx={{ textTransform: "capitalize" }} title="Συµβουλευτική διαχείρισης κατάθλιψης" />
            </AccordionSummary>
            <AccordionDetails>
              <p class="lead ">Παροχή ψυχολογικής στήριξης σε άτομα που βιώνουν συμπτώματα κατάθλιψης. Στόχος της είναι η ανακούφιση από τα συμπτώματα, η κατανόηση των βαθύτερων αιτίων και η ανάπτυξη στρατηγικών για την αντιμετώπιση των συναισθηματικών και συμπεριφορικών επιπτώσεων της κατάθλιψης. Μέσω της θεραπευτικής διαδικασίας, προάγεται η βελτίωση της ψυχικής υγείας και της ποιότητας ζωής.</p>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </main>
  );
}

export default Main;
