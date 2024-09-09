import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import News from './components/News';
import Public from './components/Public';

export const col = [
  {
    desc: "ωραριο",
    url: `${process.env.REACT_APP_BASE_URL}/#/calendar`,
  }, {
    desc: "φωτογραφιες",
    url: `${process.env.REACT_APP_BASE_URL}/#/photos`,
  }, {
    desc: "παροχες",
    url: `${process.env.REACT_APP_BASE_URL}/#/paroxes`,
  }
]

const Main = () => {
  return (
    <main id="main">
      <div class="container">
        <div class="row section topspace">
          <h2 class="section-title"><span>Η φιλοσοφια μας</span></h2>
          <div class="col-md-12">
            <p class="lead ">Το iatreionline είναι η ηλεκτρονική έκφραση της προσπάθειας μας για τη βελτίωση της εξυπηρέτησης και της επικοινωνίας των ασθενών με τα ιατρεία μας. Μέσω της ιστοσελίδας ο κάθε ενδιαφερόμενος θα μπορεί να μας γνωρίσει, να εξερευνήσει τις παροχές και τις δυνατότητες του ιατρείου, να ρυθμίσει διαδικαστικά θέματα και να οργανώσει την επίσκεψή του. Επιπλέον παρέχετε οπτικοακουστικό υλικό (άρθρα, vlogs, shorts, podcast) με σκοπό την ενημέρωση επί ιατρικών και άλλων καθημερινών θεμάτων.</p>
          </div>
        </div>

        <News />

        {/* <New desc="ωραριο" url={} />
        <New desc="φωτογραφιες" url={`${process.env.REACT_APP_BASE_URL}/#/photos`} />
        <New desc="παροχες" url={`${process.env.REACT_APP_BASE_URL}/#/paroxes`} /> */}

        <Public col={col} desc="για το κοινο" />

        <div class="row section featured topspace">
          <h2 class="section-title"><span>ανακοινωσεις</span></h2>

          <div class="col-md-12">
            <ListItem>
              <ListItemAvatar>
                <Avatar src="assets/svg/1.svg" sx={{ height: 120, width: 120, marginRight: 1 }} />
              </ListItemAvatar>
              <p class="lead ">Στους χώρους υγειονομικού ενδιαφέροντος όπως και στο ιατρείο συστήνεται η χρήση προστατευτικής μάσκας προς αποφυγή διάδοσης τυχόν λοιμώξεων μεταξύ των ασθενών.</p>
            </ListItem>
          </div>

          <div class="col-md-12">
            <ListItem>
              <ListItemAvatar >
                <Avatar src="assets/svg/2.svg" sx={{ height: 120, width: 120, marginRight: 1 }} />
              </ListItemAvatar>
              <p class="lead ">Για την αποφυγή συνωστισμού και την μείωση της διασπορά λοιμώξεων συστήνεται η προσέλευση των επισκεπτών μόνο με ένα άτομο συνοδεία.</p>
            </ListItem>
          </div>

          <div class="col-md-12">
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ height: 120, width: 120, marginRight: 1 }}>
                  <NotificationsIcon sx={{ height: 100, width: 100 }} />
                </Avatar>
              </ListItemAvatar>
              <p class="lead ">Στις 30 Σεπτεμβρίου, στο χώρο του ιατρείου η συνεργαζόμενη διατροφολόγος Ελευθερία Παπαχρήστου θα παρουσιάσει σύγχρονες διατροφικές οδηγίες για τα παιδιά και θα απαντήσει σε ερωτήσεις γονέων. Για δηλώσεις συμμετοχής και περισσότερες πληροφορίες οι ενδιαφερόμενοι θα πρέπει να επικοινωνήσουν με τη γραμματεία (2105789951 και 6937432103).</p>
            </ListItem>
          </div>

          <div class="col-md-12">
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ height: 120, width: 120, marginRight: 1 }}>
                  <NotificationsIcon sx={{ height: 100, width: 100 }} />
                </Avatar>
              </ListItemAvatar>
              <p class="lead ">Το ιατρείο θα παραμείνει κλειστό στις 25 και 28 Οκτωβρίου. Η επικοινωνία των ασθενών θα γίνεται στο κινητό της γραμματείας ή των ιατρών.</p>
            </ListItem>
          </div>
        </div>

      </div>
    </main>
  );
}

export default Main;
