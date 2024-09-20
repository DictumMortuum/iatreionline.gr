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
              <Avatar src="https://placehold.co/400" sx={{ height: 100, width: 100 }} />
              <CardHeader sx={{ textTransform: "capitalize" }} title="Ψυχολογική υποστήριξη ιατρικών περιστατικών" />
            </AccordionSummary>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ alignItems: "center" }}>
              <Avatar src="https://placehold.co/400" sx={{ height: 100, width: 100 }} />
              <CardHeader sx={{ textTransform: "capitalize" }} title="Ατοµικές συνεδρίες εφήβων και ενηλίκων" />
            </AccordionSummary>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ alignItems: "center" }}>
              <Avatar src="https://placehold.co/400" sx={{ height: 100, width: 100 }} />
              <CardHeader sx={{ textTransform: "capitalize" }} title="Συµβουλευτική παιδιών - εφήβων" />
            </AccordionSummary>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ alignItems: "center" }}>
              <Avatar src="https://placehold.co/400" sx={{ height: 100, width: 100 }} />
              <CardHeader sx={{ textTransform: "capitalize" }} title="Συµβουλευτική για θέµατα Υγείας" />
            </AccordionSummary>
            <AccordionDetails>
              <p class="lead ">(1000 ημέρες, εισαγωγή στερεών).</p>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ alignItems: "center" }}>
              <Avatar src="https://placehold.co/400" sx={{ height: 100, width: 100 }} />
              <CardHeader sx={{ textTransform: "capitalize" }} title="Συµβουλευτική διαχείρισης άγχους & στρες" />
            </AccordionSummary>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ alignItems: "center" }}>
              <Avatar src="https://placehold.co/400" sx={{ height: 100, width: 100 }} />
              <CardHeader sx={{ textTransform: "capitalize" }} title="Συµβουλευτική διαχείρισης κατάθλιψης" />
            </AccordionSummary>
          </Accordion>
        </div>
      </div>
    </main>
  );
}

export default Main;
