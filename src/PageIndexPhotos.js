import Recent from './components/Recent';

const Main = () => {
  return (
    <main id="main">
      <div class="container">
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
      </div>
    </main>
  );
}

export default Main;
