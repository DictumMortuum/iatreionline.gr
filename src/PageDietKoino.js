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
          <h2 class="section-title"><span>υπηρεσιες διαιτολογου</span></h2>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ alignItems: "center" }}>
              <Avatar src="https://placehold.co/400" sx={{ height: 100, width: 100 }} />
              <CardHeader sx={{ textTransform: "capitalize" }} title="Διατροφική συμβουλευτική στην εγκυμοσύνη και το θηλασμό" />
            </AccordionSummary>
            <AccordionDetails>
              <p class="lead ">Παροχή εξατομικευμένων οδηγιών διατροφής - πλάνου διατροφής στην εγκυμοσύνη και το θηλασμό με στόχο την κάλυψη των αναγκών της μητέρας σε ενέργεια και θρεπτικά συστατικά. Καθοδήγηση στην επιλογή ή αποφυγή τροφίμων. Διαχείριση του σωματικού βάρους.</p>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ alignItems: "center" }}>
              <Avatar src="https://placehold.co/400" sx={{ height: 100, width: 100 }} />
              <CardHeader sx={{ textTransform: "capitalize" }} title="Εισαγωγή στερεών - Διατροφή νηπίου" />
            </AccordionSummary>
            <AccordionDetails>
              <p class="lead ">Συμβουλευτική για τη διατροφή του βρέφους και νηπίου, με στόχο την υιοθέτηση υγιεινών διατροφικών συνηθειών από μικρή ηλικία και τη βέλτιστη ανάπτυξη του παιδιού. Κατάρτιση εξατομικευμένου πλάνου διατροφής - προτάσεις γευμάτων, ανάλογα με τις ανάγκες του παιδιού και της οικογένειας. Εισαγωγή στερεών με παραδοσιακή μέθοδο σίτισης με κουτάλι (αλεσμένα τρόφιμα) και Baby-Led Weaning. Συμβουλευτική για εύκολη μετάβαση από αλεσμένα τρόφιμα σε κομμάτια τροφής.</p>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ alignItems: "center" }}>
              <Avatar src="https://placehold.co/400" sx={{ height: 100, width: 100 }} />
              <CardHeader sx={{ textTransform: "capitalize" }} title="Επιλεκτική διατροφή παιδιών" />
            </AccordionSummary>
            <AccordionDetails>
              <p class="lead ">Αξιολόγηση της επάρκειας σε ενέργεια και θρεπτικά συστατικά του παιδιού με επιλεκτική διατροφή. Στρατηγικές αντιμετώπισης της επιλεκτικής διατροφής. Κατάρτιση εξατομικευμένου πλάνου διατροφής - προτάσεις γευμάτων με βάση τις ανάγκες και τις προτιμήσεις του παιδιού.</p>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ alignItems: "center" }}>
              <Avatar src="https://placehold.co/400" sx={{ height: 100, width: 100 }} />
              <CardHeader sx={{ textTransform: "capitalize" }} title="Παιδική παχυσαρκία" />
            </AccordionSummary>
            <AccordionDetails>
              <p class="lead ">Παροχή εξατομικευμένων οδηγιών διατροφής - πλάνου διατροφής και διατροφική εκπαίδευση του παιδιού και των γονέων. Οδηγίες πρόληψης της παχυσαρκίας.</p>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ alignItems: "center" }}>
              <Avatar src="https://placehold.co/400" sx={{ height: 100, width: 100 }} />
              <CardHeader sx={{ textTransform: "capitalize" }} title="Διατροφική εκπαίδευση γονέων - Συμβουλευτική για τη διατροφή της οικογένειας" />
            </AccordionSummary>
            <AccordionDetails>
              <p class="lead ">Οδηγίες ισορροπημένης διατροφής για όλη την οικογένεια - προτάσεις γευμάτων.</p>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ alignItems: "center" }}>
              <Avatar src="https://placehold.co/400" sx={{ height: 100, width: 100 }} />
              <CardHeader sx={{ textTransform: "capitalize" }} title="Διατροφική συμβουλευτική/υποκατάσταση σε Τροφική Αλλεργία" />
            </AccordionSummary>
            <AccordionDetails>
              <p class="lead ">Για βρέφη, παιδιά, εφήβους και ενήλικες. Αξιολόγηση της επάρκειας της δίαιτας σε ενέργεια και θρεπτικά συστατικά. Εκπαίδευση για εναλλακτικές πηγές θρεπτικών συστατικών - εναλλακτικά τρόφιμα, οδηγίες υποκαταστασης των αλλεργιογόνων τροφίμων σε συνταγές.</p>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ alignItems: "center" }}>
              <Avatar src="https://placehold.co/400" sx={{ height: 100, width: 100 }} />
              <CardHeader sx={{ textTransform: "capitalize" }} title="Διατροφή στα στάδια της ζωής" />
            </AccordionSummary>
            <AccordionDetails>
              <p class="lead ">Διατροφή βρεφών, νηπίων, παιδιών, εφήβων και ενηλίκων. Διατροφή πριν τη σύλληψη, στην εγκυμοσύνη και το θηλασμό.</p>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ alignItems: "center" }}>
              <Avatar src="https://placehold.co/400" sx={{ height: 100, width: 100 }} />
              <CardHeader sx={{ textTransform: "capitalize" }} title="Κλινική Διατροφή" />
            </AccordionSummary>
            <AccordionDetails>
              <p class="lead ">Αξιολόγηση της διατροφικής κατάστασης και εξατομικευμένες οδηγίες διατροφής - πλάνο διατροφής σε άτομα που πάσχουν από κάποιο νόσημα.</p>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </main>
  );
}

export default Main;
