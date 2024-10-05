import Public from './components/Public';

export const col = [
  {
    desc: "βιογραφικο",
    url: `${process.env.REACT_APP_BASE_URL}/#/paidiatriko/bio`,
    submenu: [],
  }, {
    desc: "φωτογραφιες",
    url: `${process.env.REACT_APP_BASE_URL}/#/paidiatriko/photos`,
    submenu: [],
  }, {
    desc: "υπηρεσιες",
    url: `${process.env.REACT_APP_BASE_URL}/#/paidiatriko/services`,
    submenu: [],
  }, {
    desc: "ενημερωτικο υλικο",
    url: `${process.env.REACT_APP_BASE_URL}/#/paidiatriko/material`,
    submenu: [{
      desc: "νεογνικη ηλικια",
      url: "#neogno",
    }]
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
