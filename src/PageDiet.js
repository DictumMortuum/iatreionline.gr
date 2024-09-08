import Public from './components/Public';

export const col = [
  {
    desc: "βιογραφικο",
    url: `${process.env.REACT_APP_BASE_URL}/#/diet/bio`,
  }, {
    desc: "για το κοινο",
    url: `${process.env.REACT_APP_BASE_URL}/#/diet/koino`,
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
