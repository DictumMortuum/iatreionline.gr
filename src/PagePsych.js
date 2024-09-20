import Public from './components/Public';

export const col = [
  {
    desc: "βιογραφικο",
    url: `${process.env.REACT_APP_BASE_URL}/#/psych/bio`,
  }, {
    desc: "υπηρεσιες",
    url: `${process.env.REACT_APP_BASE_URL}/#/psych/services`,
  }, {
    desc: "ενημερωτικο υλικο",
    url: `${process.env.REACT_APP_BASE_URL}/#/psych/material`,
  }
]

const Main = () => {
  return (
    <main id="main">
      <div class="container">
        <Public col={col} desc="ψυχολογος" />
      </div>
    </main>
  );
}

export default Main;
