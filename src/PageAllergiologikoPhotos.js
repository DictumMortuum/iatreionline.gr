import Recent from './components/Recent';

const Main = () => {
  return (
    <main id="main">
      <div class="container">
        <div class="row section topspace">
          <h2 class="section-title"><span>αλλεργιολογικο ιατρειο</span></h2>
        </div>

        <div class="row section recentworks topspace">
          <h2 class="section-title"><span>φωτογραφιες</span></h2>
          <div class="thumbnails recentworks row">
            <Recent img="assets/images/lowres/-5.jpg" />
            <Recent img="assets/images/lowres/-6.jpg" />
            <Recent img="assets/images/lowres/-12.jpg" />
            <Recent img="assets/images/lowres/-13.jpg" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
