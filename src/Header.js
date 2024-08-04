function App() {
  return (
    <header id="header">
      <div id="head" class="parallax" parallax-speed="2">
        <h1 id="logo" class="text-center">
          <img class="img-circle" src="assets/images/background.png" alt=""></img>
          <span class="title"></span>
          <span class="tagline"></span>
        </h1>
      </div>
      <nav class="navbar navbar-default navbar-sticky">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
          </div>
          <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
              <li class="active"><a href={`${process.env.REACT_APP_BASE_URL}/#/`}>Home</a></li>
              <li><a href={`${process.env.REACT_APP_BASE_URL}/#/paidiatriko`}>Παιδιατρικo</a></li>
              <li><a href={`${process.env.REACT_APP_BASE_URL}/#/allergiologiko`}>Αλλεργιολογικo</a></li>
              <li><a href={`${process.env.REACT_APP_BASE_URL}/#/psych`}>Ψυχολoγος</a></li>
              <li><a href={`${process.env.REACT_APP_BASE_URL}/#/diet`}>Διαιτολoγος</a></li>
              {/* <li><a href={`${process.env.REACT_APP_BASE_URL}/#/map`}>Χαρτης</a></li> */}
              <li><a href={`${process.env.REACT_APP_BASE_URL}/#/contact`}>Επικοινωνια</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default App;
