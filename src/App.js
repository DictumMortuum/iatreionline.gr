import Header from './Header';
import Footer from './Footer';
// import Main from './PageMain';
import Index from './PageIndex';
import Paidiatriko from './PagePaidiatriko';
import Allergiologiko from './PageAllergiologiko';
import Psych from './PagePsych';
import Diet from './PageDiet';
import Map from './PageMap';
import Contact from './PageContact';
import { HashRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/paidiatriko" element={<Paidiatriko />} />
        <Route path="/allergiologiko" element={<Allergiologiko />} />
        <Route path="/psych" element={<Psych />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/map" element={<Map />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
