import Public from './components/Public';

export const col = [
  {
    desc: "βιογραφικο",
    url: `${process.env.REACT_APP_BASE_URL}/#/paidiatriko/bio`,
  }, {
    desc: "φωτογραφιες",
    url: `${process.env.REACT_APP_BASE_URL}/#/paidiatriko/photos`,
  }, {
    desc: "για γονεις",
    url: `${process.env.REACT_APP_BASE_URL}/#/paidiatriko/goneis`,
  }
]

const Main = () => {
  return (
    <main id="main">
      <div class="container">
        <Public col={col} desc="παιδιατρικο ιατρειο" />
      </div>
    </main>
  );
}

export default Main;
