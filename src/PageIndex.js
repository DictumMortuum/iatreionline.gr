// import Service from './components/Service';
import Recent from './components/Recent';
// import Card from './components/Card';
import Grid from '@mui/material/Grid';
import DoneIcon from '@mui/icons-material/Done';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import NotificationsIcon from '@mui/icons-material/Notifications';

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

        <div class="row section featured topspace">
          <h2 class="section-title"><span>παροχες για το κοινο</span></h2>
          <div class="col-md-12">
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <DoneIcon />
                </Avatar>
              </ListItemAvatar>
              <p class="lead ">Καθημερινή γραμματειακή υποστήριξη στο ιατρείο από τις 09:00 το πρωί μέχρι τις 13:00 και από τις 17:00 το απόγευμα μέχρι και τις 21:00 το βράδυ, επιπλέον μέσω σταθερού τηλεφώνου, κινητού (09:00-21:00) και email.</p>
            </ListItem>
          </div>
          <div class="col-md-12">
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <DoneIcon />
                </Avatar>
              </ListItemAvatar>
              <p class="lead ">Δυνατότητα ηλεκτρονικής αποστολής SMS και κλήσεις υπενθύμισης μετά από επιθυμία του ασθενούς, ώστε να διευκολύνεται όσο το δυνατόν περισσότερο η ομαλή ροή των επισκέψεων και να συνεχίζετε αδιάλειπτα η θεραπεία και η παρακολούθηση χρόνιων περιστατικών.</p>
            </ListItem>
          </div>
          <div class="col-md-12">
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <DoneIcon />
                </Avatar>
              </ListItemAvatar>
              <p class="lead ">Αυξημένη φροντίδα για την παροχή ιδανικών συνθηκών στο ιατρείο καθώς κάθε χώρος διαθέτει συσκευή καθαρισμού αέρα επιπλέον του φυσικού φωτισμού και εξαερισμού. Υπάρχουν επίσης ανέπαφες συσκευές απολύμανσης χεριών.</p>
            </ListItem>
          </div>
          <div class="col-md-12">
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <DoneIcon />
                </Avatar>
              </ListItemAvatar>
              <p class="lead ">Στο μπάνιο υπάρχει βρεφική αλλαξιέρα και ειδικός κάδος απόρριψης, αυτόματος καθαρισμός ειδών υγιεινής και ανέπαφοι μηχανισμοί νιπτήρα και χειροπετσετών.</p>
            </ListItem>
          </div>
          <div class="col-md-12">
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <DoneIcon />
                </Avatar>
              </ListItemAvatar>
              <p class="lead ">Για τη φροντίδα των βρεφών υπάρχει βραστήρας, αποστειρωτής καθώς και σκεύη μιας χρήσεως.Επιπλέον για τους επισκέπτες υπάρχει ψύκτες με εμφιαλωμένο νερό και ψυγείο για φύλαξη ευαίσθητων προϊόντων.</p>
            </ListItem>
          </div>
          <div class="col-md-12">
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <DoneIcon />
                </Avatar>
              </ListItemAvatar>
              <p class="lead ">Στο χώρο αναμονής και στα εξεταστήρια υπάρχουν σύγχρονα κλιματιστικά με λειτουργία ιονιστή, ενώ υπάρχει και αυτόνομη θέρμανση.</p>
            </ListItem>
          </div>

          <div class="col-md-12">
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <DoneIcon />
                </Avatar>
              </ListItemAvatar>
              <p class="lead ">Τέλος σε περίπτωση που οι συνθήκες το επιτρέπουν, πέραν του χώρου αναμονής υπάρχει και ευρύχωρη βεράντα που μπορεί να χρησιμοποιηθεί για το σκοπό αυτο.</p>
            </ListItem>
          </div>

          {/* <div class="row">
            <Service title="γραμματειακη υποστηριξη" button_text="Read" desc="Επικοινωνία μέσω τηλεφώνου (κινητό - σταθερό), email, ηλεκτρονική αποστολή αποδείξεων, βεβαιώσεων ή δικαιολογητικών, άυλη συνταγογράφηση, sms υπενθύμισης ραντεβού." />
            <Service title="προσβαση αμε" button_text="Read" desc="Ράμπα ανόδου στην είσοδο της πολυκατοικίας, ανελκυστήρας." />
            <Service title="Αυξημενη ευαισθησια σε θεματα υγιεινης" button_text="Read" desc="Κλιματισμός με ιονιστή και επιπλέον συσκευή καθαρισμού αέρα σε κάθε χώρο, φυσικός εξαερισμός και φωτισμός, αυτόνομη θέρμανση, no touch μηχανισμοί στο μπάνιο, βρεφική αλλαξιέρα, και κάδοι απόρριψης." />
          </div> */}
        </div>

        <div class="row section recentworks topspace">
          <h2 class="section-title"><span>Φωτογραφιες</span></h2>
          <div class="thumbnails recentworks row">
            <Recent img="assets/images/lowres/-7.jpg" />
            <Recent img="assets/images/lowres/-8.jpg" />
            <Recent img="assets/images/lowres/-9.jpg" />
            <Recent img="assets/images/lowres/-10.jpg" />
            <Recent img="assets/images/lowres/-11.jpg" />
            <Recent img="assets/images/lowres/-14.jpg" />
            <Recent img="assets/images/lowres/-15.jpg" />
          </div>
        </div>

        <div class="row section featured topspace">
          <h2 class="section-title"><span>ενημερωσεις ιατρειου</span></h2>

          <div class="col-md-12">
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <NotificationsIcon />
                </Avatar>
              </ListItemAvatar>
              <p class="lead ">Για τη φροντίδα των βρεφών υπάρχει βραστήρας, αποστειρωτής καθώς και σκεύη μιας χρήσεως.Επιπλέον για τους επισκέπτες υπάρχει ψύκτες με εμφιαλωμένο νερό και ψυγείο για φύλαξη ευαίσθητων προϊόντων.</p>
            </ListItem>
          </div>

          <div class="col-md-12">
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <NotificationsIcon />
                </Avatar>
              </ListItemAvatar>
              <p class="lead ">Στους χώρους υγειονομικού ενδιαφέροντος όπως και στο ιατρείου συστήνεται η χρήση προστατευτικής μάσκας προς αποφυγή διάδοσης τυχόν λοιμώξεων μεταξύ των ασθενών.</p>
            </ListItem>
          </div>

          <div class="col-md-12">
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <NotificationsIcon />
                </Avatar>
              </ListItemAvatar>
              <p class="lead ">Το ιατρείο θα παραμείνει κλειστό για το τριήμερο του Αγίου Πνεύματος. Η επικοινωνία των ασθενών θα γίνεται στο κινητό της γραμματείας ή των ιατρών.</p>
            </ListItem>
          </div>

          <div class="col-md-12">
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <NotificationsIcon />
                </Avatar>
              </ListItemAvatar>
              <Grid container>
                <Grid item xs={12}>
                  <strong>
                    <p class="lead ">Ωράριο λειτουργίας Αλλεργιολογικού Ιατρείου Παίδων - Ενηλίκων:</p>
                  </strong>
                </Grid>
                <Grid item xs={6}>
                  <p class="lead">Δευτέρα - Τετάρτη - Παρασκευή</p>
                </Grid>
                <Grid item xs={6}>
                  <p class="lead">16:00 - 21:00</p>
                </Grid>
                <Grid item xs={6}>
                  <p class="lead">Τρίτη - Πέμπτη</p>
                </Grid>
                <Grid item xs={6}>
                  <p class="lead">09:00 - 13:00</p>
                </Grid>
              </Grid>
            </ListItem>
          </div>

          <div class="col-md-12">
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <NotificationsIcon />
                </Avatar>
              </ListItemAvatar>
              <Grid container>
                <Grid item xs={12}>
                  <strong>
                    <p class="lead ">Ωράριο λειτουργίας Παιδιατρικού Ιατρείου:</p>
                  </strong>
                </Grid>
                <Grid item xs={6}>
                  <p class="lead">Δευτέρα - Τετάρτη - Παρασκευή</p>
                </Grid>
                <Grid item xs={6}>
                  <p class="lead">09:00 - 13:00</p>
                </Grid>
                <Grid item xs={6}>
                  <p class="lead">Τρίτη - Πέμπτη</p>
                </Grid>
                <Grid item xs={6}>
                  <p class="lead">16:00 - 21:00</p>
                </Grid>
              </Grid>
            </ListItem>
          </div>

          <div class="col-md-12">
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <NotificationsIcon />
                </Avatar>
              </ListItemAvatar>
              <Grid container>
                <Grid item xs={12}>
                  <strong>
                    <p class="lead">Γραφείο Διαιτολογίας Παίδων - Ενηλίκων:</p>
                  </strong>
                </Grid>
                <Grid item xs={6}>
                  <p class="lead">κάθε 3η Παρασκευή του μήνα</p>
                </Grid>
                <Grid item xs={6}>
                  <p class="lead">09:00 - 13:00 και 17:00 - 21:00</p>
                </Grid>
                <Grid item xs={12}>
                  <p class="lead">σε άλλες ημέρες και ώρες κατόπιν συνεννοήσεως</p>
                </Grid>
              </Grid>
            </ListItem>
          </div>

          <div class="col-md-12">
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <NotificationsIcon />
                </Avatar>
              </ListItemAvatar>
              <Grid container>
                <Grid item xs={12}>
                  <strong>
                    <p class="lead">Γραφείο Ψυχολογίας Παίδων - Ενηλίκων:</p>
                  </strong>
                </Grid>
                <Grid item xs={6}>
                  <p class="lead">κάθε 4η Παρασκευή του μήνα</p>
                </Grid>
                <Grid item xs={6}>
                  <p class="lead">09:00 - 13:00 και 17:00 - 21:00</p>
                </Grid>
                <Grid item xs={12}>
                  <p class="lead">σε άλλες ημέρες και ώρες κατόπιν συνεννοήσεως</p>
                </Grid>
              </Grid>
            </ListItem>
          </div>

        </div>
      </div>
    </main>
  );
}

export default Main;
