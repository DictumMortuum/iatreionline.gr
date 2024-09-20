// import Accordion from '@mui/material/Accordion';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import { Avatar, CardHeader } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
          <h2 class="section-title"><span>ενημερωτικο υλικο</span></h2>
        </div>

        <div class="row section topspace">
          <YoutubeEmbed embedId="N4fcYPQQzwk" />
        </div>
      </div>
    </main>
  );
}

export default Main;
