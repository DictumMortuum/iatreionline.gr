import { col as index_col } from './PageIndex';
import { col as paidiatriko_col } from './PagePaidiatriko';
import { col as psych_col } from './PagePsych';
import { col as allergiologiko_col } from './PageAllergiologiko';
import { col as diet_col } from './PageDiet';

function App() {
  return (
    <header id="header">
      <nav class="navbar navbar-default navbar-sticky">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
          </div>
          <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
              <img src="favicon-16x16.png" alt="" />
              <li style={{ marginLeft: 5 }}>iatreionline.gr</li>
              <li class="dropdown">
                <a href={`${process.env.REACT_APP_BASE_URL}/#/`}>Home</a>
                <div class="dropdown-content">
                  {index_col.map(d => (
                    <a href={d.url}>{d.desc}</a>
                  ))}
                </div>
              </li>
              <li class="dropdown">
                <a href={`${process.env.REACT_APP_BASE_URL}/#/paidiatriko`}>Παιδιατρικo</a>
                <div class="dropdown-content">
                  {paidiatriko_col.map(d => (
                    <a href={d.url}>{d.desc}</a>
                  ))}
                </div>
              </li>
              <li class="dropdown">
                <a href={`${process.env.REACT_APP_BASE_URL}/#/allergiologiko`}>Αλλεργιολογικo</a>
                <div class="dropdown-content">
                  {allergiologiko_col.map(d => (
                    <a href={d.url}>{d.desc}</a>
                  ))}
                </div>
              </li>
              <li class="dropdown">
                <a href={`${process.env.REACT_APP_BASE_URL}/#/psych`}>Ψυχολoγος</a>
                <div class="dropdown-content">
                  {psych_col.map(d => (
                    <a href={d.url}>{d.desc}</a>
                  ))}
                </div>
              </li>
              <li class="dropdown">
                <a href={`${process.env.REACT_APP_BASE_URL}/#/diet`}>Διαιτολoγος</a>
                <div class="dropdown-content">
                  {diet_col.map(d => (
                    <a href={d.url}>{d.desc}</a>
                  ))}
                </div>
              </li>
              <li class="dropdown"><a href={`${process.env.REACT_APP_BASE_URL}/#/contact`}>Επικοινωνια</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <div id="head" class="parallax" parallax-speed="2">
        <h1 id="logo" class="text-center">
          <img class="img-circle" src="assets/images/background.png" alt=""></img>
          <span class="title"></span>
          <span class="tagline"></span>
        </h1>
      </div>
    </header>
  );
}

export default App;
