import Recent from './components/Recent';

const Main = () => {
  return (
    <main id="main">
      <div class="container">
        <div class="row section topspace">
          <h2 class="section-title"><span>παιδιατρικο ιατρειο</span></h2>
        </div>

        <div class="row section recentworks topspace">
          <h2 class="section-title"><span>φωτογραφιες</span></h2>
          <div class="thumbnails recentworks row">
            <Recent img="assets/images/lowres/-1.jpg" className="col-xs-12 col-sm-6 col-md-4 col-lg-4" />
            <Recent img="assets/images/lowres/-2.jpg" />
            <Recent img="assets/images/lowres/-3.jpg" />
            <Recent img="assets/images/lowres/-4.jpg" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
