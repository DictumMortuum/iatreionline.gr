import DoneIcon from '@mui/icons-material/Done';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const Main = () => {
  return (
    <main id="main">
      <div class="container">
        <div class="row section featured topspace">
          <h2 class="section-title"><span>παροχες</span></h2>
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
        </div>
      </div>
    </main>
  );
}

export default Main;
