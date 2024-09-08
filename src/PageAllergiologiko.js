import Public from './components/Public';

export const col = [
  {
    desc: "βιογραφικο",
    url: `${process.env.REACT_APP_BASE_URL}/#/allergiologiko/bio`,
  }, {
    desc: "φωτογραφιες",
    url: `${process.env.REACT_APP_BASE_URL}/#/allergiologiko/photos`,
  }, {
    desc: "για το κοινο",
    url: `${process.env.REACT_APP_BASE_URL}/#/allergiologiko/koino`,
  }
]

const Main = () => {
  return (
    <main id="main">
      <div class="container">
        <Public col={col} desc="αλλεργιολογικο ιατρειο" />
      </div>
    </main>
  );
}

export default Main;
