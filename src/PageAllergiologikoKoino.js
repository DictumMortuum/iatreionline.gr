import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Avatar, CardHeader } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Main = () => {
  return (
    <main id="main">
      <div class="container">
        <div class="row section topspace">
          <h2 class="section-title"><span>αλλεργιολογικο ιατρειο</span></h2>
        </div>

        <div class="row section featured topspace">
          <h2 class="section-title"><span>υπηρεσιες</span></h2>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ alignItems: "center" }}>
              <Avatar src="assets/svg/12.svg" sx={{ height: 100, width: 100 }} />
              <CardHeader sx={{ textTransform: "capitalize" }} title="Διάγνωση και κλινική παρακολούθηση" />
            </AccordionSummary>
            <AccordionDetails>
              <p class="lead ">όλου του φάσματος των αλλεργικών παθήσεων σε βρέφη, παιδιά και ενήλικες.</p>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ alignItems: "center" }}>
              <Avatar src="assets/svg/13.svg" sx={{ height: 100, width: 100 }} />
              <CardHeader sx={{ textTransform: "capitalize" }} title="Prick-test και Patch test" />
            </AccordionSummary>
            <AccordionDetails>
              <p class="lead ">Δερματικά αλλεργικά τεστ (prick-test και patch test) για τη διάγνωση της αναπνευστικής, της τροφικής και της δερματικής αλλεργίας.</p>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ alignItems: "center" }}>
              <Avatar src="assets/svg/14.svg" sx={{ height: 100, width: 100 }} />
              <CardHeader sx={{ textTransform: "capitalize" }} title="Kνίδωση και Aγγειοδημα" />
            </AccordionSummary>
            <AccordionDetails>
              <p class="lead ">Εξειδικευμένη διάγνωση και θεραπεία της χρόνιας κνίδωσης και αγγειοδηματος.</p>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ alignItems: "center" }}>
              <Avatar src="assets/svg/15.svg" sx={{ height: 100, width: 100 }} />
              <CardHeader sx={{ textTransform: "capitalize" }} title="Αλλεργική Ρινίτιδα" />
            </AccordionSummary>
            <AccordionDetails>
              <p class="lead ">Ανοσοθεραπεία για την θεραπεία της αλλεργικής ρινίτιδας και επιπεφυκίτιδας, αλλεργικού άσθματος και αναφυλαξία μετά από νυγμό υμενοπτέρων (μέλισσες και σφήκες).</p>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ alignItems: "center" }}>
              <Avatar src="assets/svg/16.svg" sx={{ height: 100, width: 100 }} />
              <CardHeader sx={{ textTransform: "capitalize" }} title="Αλλεργικό Άσθμα" />
            </AccordionSummary>
            <AccordionDetails>
              <p class="lead ">Διάγνωση , παρακολούθηση και θεραπεία του αλλεργικού άσθματος καθώς και του σοβαρού ηωσινοφιλικού άσθματος ( σπιρομετρισή ).</p>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ alignItems: "center" }}>
              <Avatar src="assets/svg/17.svg" sx={{ height: 100, width: 100 }} />
              <CardHeader sx={{ textTransform: "capitalize" }} title="Ηωσινοφιλικά Νοσήματα" />
            </AccordionSummary>
            <AccordionDetails>
              <p class="lead ">Διάγνωση και εκτίμηση ηωσινοφιλικών νοσημάτων ηωσινοφιλική οισοφαγίτιδα , τροφοεξαρτώμενη εντεροκολίτιδα, FPIE S.</p>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ alignItems: "center" }}>
              <Avatar src="assets/svg/18.svg" sx={{ height: 100, width: 100 }} />
              <CardHeader sx={{ textTransform: "capitalize" }} title="Θεραπείες με Μονοκλωνικά Αντισώματα" />
            </AccordionSummary>
            <AccordionDetails>
              <p class="lead ">θεραπείες με μονοκλωνικά αντισώματα με το αλλεργικό άσθμα, ρινικοί πολύποδες, χρόνια αυτοάνοση ή αυθόρμητη κνίδωση, καθώς και φυσικές κνιδώσεις όπως δερμογραφισμός, κνίδωση εκ ψύχους ή εκ θερμότητας.</p>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ alignItems: "center" }}>
              <Avatar src="assets/svg/19.svg" sx={{ height: 100, width: 100 }} />
              <CardHeader sx={{ textTransform: "capitalize" }} title="Δερματικές Παθήσεις" />
            </AccordionSummary>
            <AccordionDetails>
              <p class="lead ">Δερματικές παθήσεις με αλλεργικό υπόβαθρό - Ατοπική δερματίτιδα σε παιδιά και ενήλικες, δερματίτιδα εξ επαφής, νευροδερματίτιδα, παρασιτική κνίφη.</p>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ alignItems: "center" }}>
              <Avatar src="assets/svg/20.svg" sx={{ height: 100, width: 100 }} />
              <CardHeader sx={{ textTransform: "capitalize" }} title="Αναφυλαξια σε φάρμακα" />
            </AccordionSummary>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ alignItems: "center" }}>
              <Avatar src="assets/svg/21.svg" sx={{ height: 100, width: 100 }} />
              <CardHeader sx={{ textTransform: "capitalize" }} title="Αναφυλαξια σε τροφές" />
            </AccordionSummary>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ alignItems: "center" }}>
              <Avatar src="assets/svg/22.svg" sx={{ height: 100, width: 100 }} />
              <CardHeader sx={{ textTransform: "capitalize" }} title="Αναφυλαξια σε νυγμούς από μέλισσες και σφήκες" />
            </AccordionSummary>
          </Accordion>

        </div>
      </div>
    </main>
  );
}

export default Main;
