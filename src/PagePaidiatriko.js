import Public from './components/Public';

export const col = [
  {
    desc: "βιογραφικο",
    url: `${process.env.REACT_APP_BASE_URL}/#/paidiatriko/bio`,
  }, {
    desc: "φωτογραφιες",
    url: `${process.env.REACT_APP_BASE_URL}/#/paidiatriko/photos`,
  }, {
    desc: "υπηρεσιες",
    url: `${process.env.REACT_APP_BASE_URL}/#/paidiatriko/services`,
  }, {
    desc: "ενημερωτικο υλικο",
    url: `${process.env.REACT_APP_BASE_URL}/#/paidiatriko/material`,
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
