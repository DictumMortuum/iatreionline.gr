import Header from './Header';
import Footer from './Footer';
// import Main from './PageMain';
import Index from './PageIndex';
import IndexCalendar from './PageIndexCalendar';
import IndexPhotos from './PageIndexPhotos';
import IndexParoxes from './PageIndexParoxes';
import Paidiatriko from './PagePaidiatriko';
import PaidiatrikoBio from './PagePaidiatrikoBio';
import PaidiatrikoPhotos from './PagePaidiatrikoPhotos';
import PaidiatrikoGoneis from './PagePaidiatrikoGoneis';
import Allergiologiko from './PageAllergiologiko';
import AllergiologikoBio from './PageAllergiologikoBio';
import AllergiologikoKoino from './PageAllergiologikoKoino';
import AllergiologikoPhotos from './PageAllergiologikoPhotos';
import Psych from './PagePsych';
import PsychBio from './PagePsychBio';
import PsychKoino from './PagePsychKoino';
import Diet from './PageDiet';
import DietBio from './PageDietBio';
import DietKoino from './PageDietKoino';
// import Map from './PageMap';
import Contact from './PageContact';
import { HashRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/photos" element={<IndexPhotos />} />
        <Route path="/paroxes" element={<IndexParoxes />} />
        <Route path="/calendar" element={<IndexCalendar />} />
        <Route path="/paidiatriko" element={<Paidiatriko />} />
        <Route path="/paidiatriko/goneis" element={<PaidiatrikoGoneis />} />
        <Route path="/paidiatriko/bio" element={<PaidiatrikoBio />} />
        <Route path="/paidiatriko/photos" element={<PaidiatrikoPhotos />} />
        <Route path="/allergiologiko" element={<Allergiologiko />} />
        <Route path="/allergiologiko/koino" element={<AllergiologikoKoino />} />
        <Route path="/allergiologiko/bio" element={<AllergiologikoBio />} />
        <Route path="/allergiologiko/photos" element={<AllergiologikoPhotos />} />
        <Route path="/psych" element={<Psych />} />
        <Route path="/psych/bio" element={<PsychBio />} />
        <Route path="/psych/koino" element={<PsychKoino />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/diet/bio" element={<DietBio />} />
        <Route path="/diet/koino" element={<DietKoino />} />
        {/* <Route path="/map" element={<Map />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
