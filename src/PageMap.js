const Main = () => {
  return (
    <main id="main">
      <div class="container">
        <div class="row section featured topspace">
          <h2 class="section-title"><span>Χαρτης</span></h2>
          <article class="post">
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

          </article>
        </div>
      </div>
    </main>
  );
}

export default Main;
