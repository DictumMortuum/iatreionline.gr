import Service from './components/Service';
import Recent from './components/Recent';
import Card from './components/Card';
import Grid from '@mui/material/Grid';

const Main = () => {
  return (
    <main id="main">
      <div class="container">
        <div class="row section topspace">
          <div class="col-md-12">
            <p class="lead text-center text-muted">Το iatreionline είναι η ηλεκτρονική έκφραση της προσπάθειας μας για τη βελτίωση της εξυπηρέτησης και της επικοινωνίας των ασθενών με τα ιατρεία μας. Μέσω της ιστοσελίδας ο κάθε ενδιαφερόμενος θα μπορεί να μας γνωρίσει, να εξερευνήσει τις παροχές και τις δυνατότητες του ιατρείου, να ρυθμίσει διαδικαστικά θέματα και να οργανώσει την επίσκεψή του. Επιπλέον παρέχετε οπτικοακουστικό υλικό (άρθρα, vlogs, shorts, podcast) με σκοπό την ενημέρωση επί ιατρικών και άλλων καθημερινών θεμάτων.</p>
          </div>
        </div>

        <div class="row section recentworks topspace">
          <h2 class="section-title"><span>Φωτογραφιες</span></h2>
          <div class="thumbnails recentworks row">
            <Recent img="assets/images/DSC_8990.jpg" />
            <Recent img="assets/images/DSC_8991.jpg" />
            <Recent img="assets/images/DSC_8994.jpg" />
            <Recent img="assets/images/DSC_9003.jpg" />
            <Recent img="assets/images/DSC_9005.jpg" />
            <Recent img="assets/images/DSC_9006.jpg" />
            <Recent img="assets/images/DSC_9008.jpg" />
            <Recent img="assets/images/DSC_9013.jpg" />
            <Recent img="assets/images/DSC_9015.jpg" />
          </div>
        </div>

        <div class="row section featured topspace">
          <h2 class="section-title"><span>παροχες ιατρειου</span></h2>
          <div class="row">
            <Service title="γραμματειακη υποστηριξη" button_text="Read" desc="Επικοινωνία μέσω τηλεφώνου (κινητό - σταθερό), email, ηλεκτρονική αποστολή αποδείξεων, βεβαιώσεων ή δικαιολογητικών, άυλη συνταγογράφηση, sms υπενθύμισης ραντεβού." />
            <Service title="προσβαση αμε" button_text="Read" desc="Ράμπα ανόδου στην είσοδο της πολυκατοικίας, ανελκυστήρας." />
            <Service title="Αυξημενη ευαισθησια σε θεματα υγιεινης" button_text="Read" desc="Κλιματισμός με ιονιστή και επιπλέον συσκευή καθαρισμού αέρα σε κάθε χώρο, φυσικός εξαερισμός και φωτισμός, αυτόνομη θέρμανση, no touch μηχανισμοί στο μπάνιο, βρεφική αλλαξιέρα, και κάδοι απόρριψης." />
          </div>
        </div>

        <div class="row section featured topspace" style={{
          "overflow": "hidden",
          "height": 500,
        }}>
          <div id="embed-ded-map-canvas" style={{ height: "100%", width: "100%", "maxWidth": "100%" }}>
            <iframe
              title="asdf"
              style={{
                height: "100%",
                "width": "100%",
                "border": 0
              }}
              frameborder="0"
              src="https://www.google.com/maps/embed/v1/place?q=ΠΑΙΔΙΑΤΡΟΣ/ΑΛΕΞΑΝΔΡΟΣ+ΣΑΚΕΛΛΑΡΙΟΥ,+Vasileos+Alexandrou,+Peristeri,+Greece&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            />
          </div>
        </div>


        <div class="row section featured topspace">
          <h2 class="section-title"><span>ενημερωσεις ιατρειου</span></h2>
          <Grid container>
            <Grid xs={12}>
              <Card
                desc="Στο ιατρείο η είσοδος γίνεται ΜΟΝΟ με μάσκα"
                img="assets/images/iat1.png"
              />
            </Grid>
            <Grid xs={12}>
              <Card
                desc="Ένας σύνοδος ανά εξεταζόμενο"
                img="assets/images/iat2.png"
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </main>
  );
}

export default Main;
