import Public from './components/Public';

export const col = [
  {
    desc: "βιογραφικο",
    url: `${process.env.REACT_APP_BASE_URL}/#/diet/bio`,
  }, {
    desc: "υπηρεσιες",
    url: `${process.env.REACT_APP_BASE_URL}/#/diet/services`,
  }, {
    desc: "ενημερωτικο υλικο",
    url: `${process.env.REACT_APP_BASE_URL}/#/diet/material`,
  }
]

const Main = () => {
  return (
    <main id="main">
      <div class="container">
        <Public col={col} desc="διαιτολογος" />
      </div>
    </main>
  );
}

export default Main;
