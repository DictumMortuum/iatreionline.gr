import Public from './components/Public';

export const col = [
  {
    desc: "βιογραφικο",
    url: `${process.env.REACT_APP_BASE_URL}/#/psych/bio`,
  }, {
    desc: "για το κοινο",
    url: `${process.env.REACT_APP_BASE_URL}/#/psych/koino`,
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
