import Calendar from './components/Calendar';

const Main = () => {
  return (
    <main id="main">
      <div class="container">
        <div class="row section featured topspace">
          <h2 class="section-title"><span>ωραριο λειτουργιας</span></h2>
          <Calendar />
        </div>
      </div>
    </main>
  );
}

export default Main;
