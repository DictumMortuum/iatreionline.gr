import Public from './components/Public';

export const col = [
  {
    desc: "βιογραφικο",
    url: `${process.env.REACT_APP_BASE_URL}/#/allergiologiko/bio`,
  }, {
    desc: "φωτογραφιες",
    url: `${process.env.REACT_APP_BASE_URL}/#/allergiologiko/photos`,
  }, {
    desc: "υπηρεσιες",
    url: `${process.env.REACT_APP_BASE_URL}/#/allergiologiko/services`,
  }, {
    desc: "ενημερωτικο υλικο",
    url: `${process.env.REACT_APP_BASE_URL}/#/allergiologiko/material`,
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
