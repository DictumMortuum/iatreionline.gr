import Grid from '@mui/material/Grid';

const Paidiatrics = ({ title, mobile, email }) => {
	return (
		<>
			<h3 class="widget-title">{title}</h3>
			<div class="widget-body">
				<Grid container>
					<Grid item xs={12} mb={1}>
						Βασιλέως Αλεξάνδρου 14-20, Περιστέρι, 121 34
					</Grid>
					<Grid item xs={6}>
						Σταθερό
					</Grid>
					<Grid item xs={6}>
						2105789951
					</Grid>
					<Grid item xs={6}>
						Κινητό
					</Grid>
					<Grid item xs={6}>
						{mobile}
					</Grid>
					<Grid item xs={6}>
						Κινητό για ραντεβού
					</Grid>
					<Grid item xs={6} mb={1}>
						6937432103
					</Grid>
					<Grid item xs={6}>
						email
					</Grid>
					<Grid item xs={6}>
						<a href="mailto:#">{email}</a>
					</Grid>
				</Grid>
			</div>
		</>
	);
}

function App() {
  return (
		<footer id="footer" style={{ paddingBottom: 40, marginTop: 10 }}>
			<div class="container">
				<div class="row">
					<div class="col-md-6 widget">
						<Paidiatrics
							mobile="6972084499"
							email="pediatrics.sakellariou@gmail.com"
							title="Παιδιατρικο ιατρειο"
						/>
					</div>

					<div class="col-md-6 widget">
						<Paidiatrics
							mobile="6977772170"
							email="di.allergy@gmail.com"
							title="Αλλεργιολογικο ιατρειο"
						/>
					</div>

					{/* <div class="col-md-3 widget">
						<h3 class="widget-title">Follow me</h3>
						<div class="widget-body">
							<p class="follow-me-icons">
								<a href=""><i class="fa fa-twitter fa-2"></i></a>
								<a href=""><i class="fa fa-dribbble fa-2"></i></a>
								<a href=""><i class="fa fa-github fa-2"></i></a>
								<a href=""><i class="fa fa-facebook fa-2"></i></a>
							</p>
						</div>
					</div> */}

					{/* <div class="col-md-3 widget">
						<h3 class="widget-title">Text widget</h3>
						<div class="widget-body">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, nihil natus explicabo ipsum quia iste aliquid repellat eveniet velit ipsa sunt libero sed aperiam id soluta officia asperiores adipisci maxime!</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, nihil natus explicabo ipsum quia iste aliquid repellat eveniet velit ipsa sunt libero sed aperiam id soluta officia asperiores adipisci maxime!</p>
						</div>
					</div> */}

					{/* <div class="col-md-4 widget">
						<h3 class="widget-title">Form widget</h3>
						<div class="widget-body">
							<p>+234 23 9873237<br />
								<a href="mailto:#">some.email@somewhere.com</a><br />
								<br />
								234 Hidden Pond Road, Ashland City, TN 37015
							</p>
						</div>
					</div> */}

				</div>
			</div>
		</footer>
  );
}

export default App;
