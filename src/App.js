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
import PaidiatrikoMaterial from './PagePaidiatrikoMaterial';
import Allergiologiko from './PageAllergiologiko';
import AllergiologikoBio from './PageAllergiologikoBio';
import AllergiologikoKoino from './PageAllergiologikoKoino';
import AllergiologikoPhotos from './PageAllergiologikoPhotos';
import AllergiologikoMaterial from './PageAllergiologikoMaterial';
import Psych from './PagePsych';
import PsychBio from './PagePsychBio';
import PsychKoino from './PagePsychKoino';
import PsychMaterial from './PagePsychMaterial';
import Diet from './PageDiet';
import DietBio from './PageDietBio';
import DietKoino from './PageDietKoino';
import DietMaterial from './PageDietMaterial';
import BMI from './PageBMI';
import BMIAdult from './PageBMIAdult';
import Height from './PageHeight';
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
        <Route path="/paidiatriko/services" element={<PaidiatrikoGoneis />} />
        <Route path="/paidiatriko/bio" element={<PaidiatrikoBio />} />
        <Route path="/paidiatriko/photos" element={<PaidiatrikoPhotos />} />
        <Route path="/paidiatriko/material" element={<PaidiatrikoMaterial />} />
        <Route path="/allergiologiko" element={<Allergiologiko />} />
        <Route path="/allergiologiko/services" element={<AllergiologikoKoino />} />
        <Route path="/allergiologiko/bio" element={<AllergiologikoBio />} />
        <Route path="/allergiologiko/photos" element={<AllergiologikoPhotos />} />
        <Route path="/allergiologiko/material" element={<AllergiologikoMaterial />} />
        <Route path="/psych" element={<Psych />} />
        <Route path="/psych/bio" element={<PsychBio />} />
        <Route path="/psych/services" element={<PsychKoino />} />
        <Route path="/psych/material" element={<PsychMaterial />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/diet/bio" element={<DietBio />} />
        <Route path="/diet/services" element={<DietKoino />} />
        <Route path="/diet/material" element={<DietMaterial />} />
        <Route path="/apps/bmi" element={<BMI />} />
        <Route path="/apps/bmiadult" element={<BMIAdult />} />
        <Route path="/apps/height" element={<Height />} />
        {/* <Route path="/map" element={<Map />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
